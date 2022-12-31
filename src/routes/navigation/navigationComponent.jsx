import { Fragment, useContext } from "react";
import { Outlet } from "react-router-dom";
import CartIcon from "../../components/cartIcon/cartIconComponent";
import CartDropdown from "../../components/cartDropdown/cartDropdownComponent";
import { UserContext } from "../../contexts/userContext";
import { CartContext } from "../../contexts/cartContext";
import { ReactComponent as CrwnLogo } from "../../assets/crown.svg";
import { signOutUser } from "../../utils/firebase/firebaseUtils";
import {
  NavigationContainer,
  NavLink,
  NavLinks,
  LogoContainer,
} from "./navigationStyles";

const Navigation = () => {
  // setting the navbar to either reflect a user is logged in or not.
  const { currentUser } = useContext(UserContext);
  const { isCartOpen } = useContext(CartContext);

  return (
    <Fragment>
      <NavigationContainer>
        <LogoContainer to="/">
          <CrwnLogo className="logo" />
        </LogoContainer>
        <NavLinks>
          <NavLink to="/shop">
            SHOP
          </NavLink>
          {currentUser ? (
            <NavLink as="span" onClick={signOutUser}>
              SIGN OUT
            </NavLink>
          ) : (
            <NavLink to="/auth">
              SIGN IN
            </NavLink>
          )}
          <CartIcon />
        </NavLinks>
        {isCartOpen && <CartDropdown />}
      </NavigationContainer>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;

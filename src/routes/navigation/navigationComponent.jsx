import { Fragment, useEffect } from "react";
import { Outlet } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import CartIcon from "../../components/cartIcon/cartIconComponent";
import CartDropdown from "../../components/cartDropdown/cartDropdownComponent";

import { selectIsCartOpen } from "../../store/cart/cartSelector";
import { selectCurrentUser } from "../../store/user/userSelector";

import { ReactComponent as CrwnLogo } from "../../assets/crown.svg";
import { signOutStart } from "../../store/user/userAction";

import { toast, Slide } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import {
  NavigationContainer,
  NavLink,
  NavLinks,
  LogoContainer,
} from "./navigationStyles";

const Navigation = () => {
  const currentUser = useSelector(selectCurrentUser);
  const isCartOpen = useSelector(selectIsCartOpen);
  const dispatch = useDispatch();
  const isLoggedIn = !!currentUser;

  const position = "top-right";
  const duration = 3000;
  const others = {
    closeButton: false,
  };

  const signOutUser = () => {
    dispatch(signOutStart());
    toast.success("Signed Out", {
      position,
      autoClose: duration,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: false,
      theme: "light",
      transition: Slide,
      ...others,
    });
  };

  useEffect(() => {
    if (isLoggedIn) {
      toast.success("Login successful", {
        position,
        autoClose: duration,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
        theme: "light",
        transition: Slide,
        ...others,
      });
    }
  }, [isLoggedIn]);

  return (
    <Fragment>
      <NavigationContainer>
        <LogoContainer to="/">
          <CrwnLogo className="logo" />
        </LogoContainer>
        <NavLinks>
          <NavLink to="/shop">SHOP</NavLink>
          {currentUser ? (
            <>
              <NavLink as="span" onClick={signOutUser}>
                SIGN OUT
              </NavLink>
            </>
          ) : (
            <NavLink to="/auth">SIGN IN</NavLink>
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

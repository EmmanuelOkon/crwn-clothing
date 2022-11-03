import { Fragment, useContext } from 'react';
import { Outlet, Link } from 'react-router-dom';
import CartIcon from '../../components/cartIcon/cartIconComponent';
import CartDropdown from '../../components/cartDropdown/cartDropdownComponent';
import { UserContext } from '../../context/userContext';
import { CartContext } from '../../context/cartContext';
import { ReactComponent as CrwnLogo } from '../../assets/crown.svg';
import { signOutUser } from '../../utils/firebase/firebaseUtils';
import './navigationStyles.scss';

const Navigation = () => {
  // setting the navbar to either reflect a user is logged in or not.
  const { currentUser } = useContext(UserContext);
  const { isCartOpen } = useContext(CartContext);

  return (
    <Fragment>
      <div className='navigation'>
        <Link className='logo-container' to='/'>
          <CrwnLogo className='logo' />
        </Link>
        <div className='nav-links-container'>
          <Link className='nav-link' to='/shop'>
            SHOP
          </Link>
          {currentUser ? (
            <span className='nav-link' onClick={signOutUser}>
              SIGN OUT
            </span>
          ) : (
            <Link className='nav-link' to='/auth'>
              SIGN IN
            </Link>
          )}
          <CartIcon />
        </div>
        {isCartOpen && <CartDropdown />}
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
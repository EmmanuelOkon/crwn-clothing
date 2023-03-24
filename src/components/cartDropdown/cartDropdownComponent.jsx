import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import Button from "../button/buttonComponent";
import CartItem from "../cartItem/cartItemComponent";
import { selectCartItems } from "../../store/cart/cartSelector";

import {
  CartDropdownContainer,
  EmptyMessage,
  CartItems,
} from "./cartDropdownStyles";

const CartDropdown = () => {
  const cartItems = useSelector(selectCartItems);
  const navigate = useNavigate();

  const goToCheckoutHandler = () => {
    navigate("/checkout");
  };

  return (
    <CartDropdownContainer>
      <CartItems>
        {cartItems.length ? (
          cartItems.map((item) => <CartItem key={item.id} cartItem={item} />)
        ) : (
          <EmptyMessage>Your cart is empty</EmptyMessage>
        )}
      </CartItems>
      <Button onClick={goToCheckoutHandler}>GO TO CHECKOUT</Button>
    </CartDropdownContainer>
  );
};

export default CartDropdown;

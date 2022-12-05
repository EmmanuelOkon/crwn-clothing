import { useContext } from "react";
import { CartContext } from "../../context/cartContext";

import Button from "../button/buttonComponent";
import CartItem from "../cartItem/cartItemComponent";

import "./cartDropdownStyles.scss";

const CartDropdown = () => {
  const { cartItems } = useContext(CartContext);
  return (
    <div className="cartDropdownContainer">
      <div className="cartItems">
        {cartItems.map((item) => (
          <CartItem key={item.id} cartItem={item} />
        ))}
      </div>
      <Button>GO TO CHECKOUT</Button>
    </div>
  );
};

export default CartDropdown;

import { useContext } from "react";
import { CartContext } from "../../contexts/cartContext";
import CheckoutItem from "../../components/checkoutItem/checkoutItemComponent";
import "./checkoutStyles.scss";

const Checkout = () => {
  const { cartItems, cartTotal } = useContext(CartContext);

  return (
    <div className="checkoutContainer">
      <div className="checkoutHeader">
        <div className="headerBlock">
          <span>Product</span>
        </div>
        <div className="headerBlock">
          <span>Description</span>
        </div>
        <div className="headerBlock">
          <span>Quantity</span>
        </div>
        <div className="headerBlock">
          <span>Price</span>
        </div>
        <div className="headerBlock">
          <span>Remove</span>
        </div>
      </div>
      {cartItems.map((cartItem) => (
        <CheckoutItem key={cartItem.id} cartItem={cartItem} />
      ))}
      <span className="total">Total: ${cartTotal}</span>
      
      
    </div>
  );
};

export default Checkout;

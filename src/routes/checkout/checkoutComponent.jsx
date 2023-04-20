import { useSelector } from "react-redux";

import {
  selectCartItems,
  selectCartTotal,
} from "../../store/cart/cartSelector";

import CheckoutItem from "../../components/checkoutItem/checkoutItemComponent";

import {
  CheckoutContainer,
  CheckoutHeader,
  HeaderBlock,
  Total,
  RemoveButton,
} from "./checkoutStyles.jsx";

const Checkout = () => {
  const cartItems = useSelector(selectCartItems);
  const cartTotal = useSelector(selectCartTotal);

  return (
    <CheckoutContainer>
      <CheckoutHeader>
        <HeaderBlock>
          <span>Product</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Description</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Quantity</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Price </span>
        </HeaderBlock>
        <HeaderBlock>
          <RemoveButton>Remove</RemoveButton>
        </HeaderBlock>
      </CheckoutHeader>
      {cartItems.map((cartItem) => (
        <CheckoutItem key={cartItem.id} cartItem={cartItem} />
      ))}
      <Total>Total: $ {cartTotal}</Total>
    </CheckoutContainer>
  );
};

export default Checkout;

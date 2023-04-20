import {
  CartItemContainer,
  CartItemImage,
  ItemDetails,
  ItemDetailsName,
  ItemDetailsPrice,
} from "./cartItemStyles";

const cartItem = ({ cartItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;

  return (
    <CartItemContainer>
      <CartItemImage src={imageUrl} alt={`${name}`} />
      <ItemDetails>
        <ItemDetailsName className="name">{name}</ItemDetailsName>
        <ItemDetailsPrice className="price">
          {quantity} x ${price}
        </ItemDetailsPrice>
      </ItemDetails>
    </CartItemContainer>
  );
};

export default cartItem;

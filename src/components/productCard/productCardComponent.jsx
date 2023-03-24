import { useDispatch, useSelector } from "react-redux";

import { selectCartItems } from "../../store/cart/cartSelector";
import { addItemToCart } from "../../store/cart/cartAction";

import Button, { BUTTON_TYPE_CLASSES } from "../button/buttonComponent";

import {
  ProductCardComponent,
  Footer,
  FooterName,
  FooterPrice,
} from "./productCardStyles";

const ProductCard = ({ product }) => {
  const { name, price, imageUrl } = product;
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);

  const addProductToCart = () => dispatch(addItemToCart(cartItems, product));

  return (
    <ProductCardComponent>
      <img src={imageUrl} alt={`${name}`} />
      <Footer>
        <FooterName>{name}</FooterName>
        <FooterPrice>{price}</FooterPrice>
      </Footer>
      <Button
        onClick={addProductToCart}
        buttonType={BUTTON_TYPE_CLASSES.inverted}
      >
        Add to cart
      </Button>
    </ProductCardComponent>
  );
};

export default ProductCard;

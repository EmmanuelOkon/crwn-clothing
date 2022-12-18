import { useContext } from "react";
import { CartContext } from "../../contexts/cartContext";
import Button, { BUTTON_TYPE_CLASSES } from "../button/buttonComponent";
import {
  ProductCardComponent,
  Footer,
  FooterName,
  FooterPrice,
} from "./productCardStyles";

const ProductCard = ({ product }) => {
  const { name, price, imageUrl } = product;
  const { addItemToCart } = useContext(CartContext);
  const addProductToCart = () => addItemToCart(product);

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

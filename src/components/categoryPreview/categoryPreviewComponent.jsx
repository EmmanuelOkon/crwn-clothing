import ProductCard from "../productCard/productCardComponent";
import {
  CategoryPreviewContainer,
  PreviewContainer,
  Title,
  ViewWrapper,
  View,
  TitleLink,
} from "./categoryPreviewStyles";
import { BsArrowRight } from "react-icons/bs";

const CategoryPreview = ({ title, products }) => {
  return (
    <CategoryPreviewContainer>
      <Title>
        <TitleLink to={title}>{title.toUpperCase()}</TitleLink>
        <ViewWrapper to={title}>
          <View>view more</View>
          <BsArrowRight />
        </ViewWrapper>
      </Title>
      <PreviewContainer>
        {products
          .filter((_, idx) => idx < 4)
          .map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </PreviewContainer>
    </CategoryPreviewContainer>
  );
};

export default CategoryPreview;

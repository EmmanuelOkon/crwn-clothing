import ProductCard from "../productCard/productCardComponent";
import {
  CategoryPreviewContainer,
  PreviewContainer,
  Title,
  TitleLink,
} from "./categoryPreviewStyles";

const CategoryPreview = ({ title, products }) => {
  return (
    <CategoryPreviewContainer>
      <Title>
        <TitleLink to={title}>{title.toUpperCase()}</TitleLink>
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

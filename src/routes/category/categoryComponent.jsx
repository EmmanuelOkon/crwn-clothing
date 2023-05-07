import { useState, useEffect, Fragment } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import ProductCard from "../../components/productCard/productCardComponent";
import Spinner from "../../components/spinner/spinnerComponent";

import {
  selectCategoriesMap,
  selectIsLoading,
} from "../../store/categories/categorySelector";
import { BsArrowLeft } from "react-icons/bs";

import {
  TitleWrapper,
  IconWrapper,
  Title,
  CategoryContainer,
} from "./categoryComponentStyles.jsx";

const Category = () => {
  const { category } = useParams();
  const categoriesMap = useSelector(selectCategoriesMap);
  const isLoading = useSelector(selectIsLoading);
  const [products, setProducts] = useState(categoriesMap[category]);

  useEffect(() => {
    setProducts(categoriesMap[category]);
  }, [category, categoriesMap]);

  return (
    <Fragment>
      <TitleWrapper>
        <IconWrapper>
          <BsArrowLeft />
        </IconWrapper>

        <Title>{category.toUpperCase()}</Title>
      </TitleWrapper>
      {isLoading ? (
        <Spinner />
      ) : (
        <CategoryContainer>
          {products &&
            products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
        </CategoryContainer>
      )}
    </Fragment>
  );
};

export default Category;

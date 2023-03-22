import { useState, useEffect, Fragment } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import ProductCard from "../../components/productCard/productCardComponent";

import { selectCategoriesMap } from "../../store/categories/categorySelector";

import "./categoryComponentStyles.scss";

const Category = () => {
  const { category } = useParams();
  const categoriesMap = useSelector(selectCategoriesMap);
  const [products, setProducts] = useState(categoriesMap[category]);

  useEffect(() => {
    setProducts(categoriesMap[category]);
  }, [category, categoriesMap]);

  return (
    <Fragment>
      <h2 className="categoryTitle">{category.toUpperCase()}</h2>
      <div className="categoryContainer">
        {products &&
          products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </div>
    </Fragment>
  );
};

export default Category;

import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { useDispatch } from "react-redux";

import CategoriesPreview from "../categoriesPreview/categoriesPreviewComponent";
import Category from "../category/categoryComponent";
import { fetchCategoriesStartAsync } from "../../store/categories/categoryAction";

const Shop = () => {
  const dispatch = useDispatch();

  useEffect(() => {

    dispatch(fetchCategoriesStartAsync());

  }, []);


  return (
    <Routes>
      <Route index element={<CategoriesPreview />} />
      <Route path=":category" element={<Category />} />
    </Routes>
  );
};

export default Shop;

import { Routes, Route } from "react-router-dom";

import CategoriesPreview from "../categoriesPreview/categoriesPreviewComponent";
import Category from "../category/categoryComponent";


import "./shopStyles.scss";

const Shop = () => {
  return (
    <Routes>
      <Route index element={<CategoriesPreview />} />
      <Route path=":category" element={<Category />} />
    </Routes>
  );
};

export default Shop;

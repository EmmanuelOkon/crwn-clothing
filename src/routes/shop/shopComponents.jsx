import { Routes, Route } from "react-router-dom";
// import { CategoriesProvider } from "../../contexts/categoriesContext";

import CategoriesPreview from "../categoriesPreview/categoriesPreviewComponent";
import Category from "../category/categoryComponent";

const Shop = () => {
  return (
    // <CategoriesProvider>
    <Routes>
      <Route index element={<CategoriesPreview />} />
      <Route path=":category" element={<Category />} />
    </Routes>
    // </CategoriesProvider>
  );
};

export default Shop;

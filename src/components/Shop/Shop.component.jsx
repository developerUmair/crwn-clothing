import "./shop.styles.scss";
import CategoriesPreview from "../../routes/categories-preview/categories-preview.component";
import Category from "../../routes/category/category.component";
import { Route, Routes } from "react-router-dom";
import { useEffect } from "react";
import { setCategories } from "../../store/categories/category.action";
import { getCategoriesAndDocuments } from "../../utils/firebase/firebase.utils";
import { useDispatch } from "react-redux";

const Shop = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    const getCategoriesMap = async () => {
      const categoryArray = await getCategoriesAndDocuments();
      dispatch(setCategories(categoryArray));
    };

    getCategoriesMap();
  }, []);

  return (
    <Routes>
      <Route index element={<CategoriesPreview />} />
      <Route path=":category" element={<Category />} />
    </Routes>
  );
};

export default Shop;

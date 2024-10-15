import React, { useContext, useEffect, useState } from "react";
import "./category.styles.scss";
import { useParams } from "react-router-dom";
import ProductCard from "../../components/product-card/product-card.component";
import { useSelector } from "react-redux";
import { selectCategoriesMap } from "../../store/categories/category.selector";

const Category = () => {
  const { category } = useParams();
  const categoriesMap  = useSelector(selectCategoriesMap);

  const [products, setProducts] = useState([])

  useEffect(() => {
    setProducts(categoriesMap[category]);
  }, [categoriesMap, category]);

  console.log("i am categories map", categoriesMap);
  return (
    <>
      <h2 className="categroy-title">{category}</h2>
      <div className="category-container">
        {products &&
          products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </div>
    </>
  );
};

export default Category;

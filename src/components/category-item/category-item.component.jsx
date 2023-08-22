import React from "react";
import "./category-item.style.scss";

const CatergoryItem = ({ category }) => {
  return (
    <div className="category-container">
      <div
        className="background-image"
        style={{
          backgroundImage: `url(${category.imageUrl})`,
        }}
      />
      {/* <img src={category.imageUrl} alt={`${category.title} image here`} /> */}
      <div className="category-body-container">
        <h2>{category.title}</h2>
        <p>Shop Now</p>
      </div>
    </div>
  );
};

export default CatergoryItem;

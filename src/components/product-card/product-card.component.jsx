import React, { useContext } from "react";
import Button from "../button/button.component";
import "./product-card.style.scss";
import { CartContext } from "../../contexts/cart.contexts";

const ProductCard = ({ product }) => {
  const { name, price, imageUrl } = product;

  const { addItemToCart } = useContext(CartContext);

  return (
    <div className="product-card-container">
      <img src={imageUrl} alt={`${name} image here`} />
      <div className="footer">
        <span className="name">{name}</span>
        <span className="price">${price}</span>
      </div>
      <Button buttonType="inverted" onClick={() => addItemToCart(product)}>Add to Cart</Button>
    </div>
  );
};

export default ProductCard;

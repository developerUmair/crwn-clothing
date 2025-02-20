import "./product-card.styles.scss";
import Button, { BUTTON_TYPE_CLASSES } from "../button/button.component";
import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";

const ProductCard = ({ product }) => {
  const { name, imageUrl, price } = product;
  const { addItemToCart } = useContext(CartContext);

  const handleAddToCart = () => addItemToCart(product);
  return (
    <div className="product-card-container">
      <img src={imageUrl} alt={`${name} image here`} />
      <div className="footer">
        <div className="name">{name}</div>
        <div className="price">${price}</div>
      </div>
      <Button buttonType={BUTTON_TYPE_CLASSES.inverted} onClick={handleAddToCart}>
        Add to cart
      </Button>
    </div>
  );
};

export default ProductCard;

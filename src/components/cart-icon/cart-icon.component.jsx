import React, { useContext } from "react";
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import "./cart-icon.style.scss";
import { CartContext } from "../../contexts/cart.contexts";

const CartIcon = () => {
  const { isCartOpen, setIsCartOpen, cartItems } = useContext(CartContext);

  const toggleIsCartOpen = () => {
    setIsCartOpen(!isCartOpen);
  }

  return (
    <div className="cart-icon-container">
      <ShoppingIcon className="shoppin-icon" onClick={toggleIsCartOpen} />
      <span className="item-count">{cartItems.length}</span>
    </div>
  );
};

export default CartIcon;

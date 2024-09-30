import { useContext } from "react";
import Button from "../button/button.component";
import CartItem from "../cart-item/cart-item.component";
import {
  CartDropdownContainer,
  CartItems,
  EmptyMessage,
} from "./cart-dropdown.styles";
import { CartContext } from "../../contexts/cart.context";
import { useNavigate } from "react-router-dom";

const CartDropdown = () => {
  const { cartItems, isCartOpen, setIsCartOpen } = useContext(CartContext);

  const navigate = useNavigate();

  const goToCheckoutHandler = () => {
    setIsCartOpen(!isCartOpen);
    navigate("/checkout");
  };
  return (
    <CartDropdownContainer>
      <CartItems>
        {cartItems?.length ? (
          cartItems.map((item) => <CartItem key={item.id} cartItem={item} />)
        ) : (
          <EmptyMessage>Your cart is empty.</EmptyMessage>
        )}
      </CartItems>
      <Button onClick={goToCheckoutHandler}>go to checkout</Button>
    </CartDropdownContainer>
  );
};

export default CartDropdown;

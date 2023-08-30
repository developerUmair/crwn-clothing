import { createContext, useState } from "react";

/* 
const addCartItem = (cartItems, productToAdd) => {
// find if cartItems contains productToAdd

// if found, increment quantity

// return new array with modified cartItems/ new cart Item
} */

const addCartItem = (cartItems, productToAdd) => {
    const existingCartItem = cartItems.find(cartItem => cartItem.id === productToAdd.id);

    if (existingCartItem) {
        // If the product is already in the cart, increment its quantity
        return cartItems.map(cartItem =>
            cartItem.id === productToAdd.id
                ? { ...cartItem, quantity: cartItem.quantity + 1 }
                : cartItem
        );
    }

    // If the product is not in the cart, add it with quantity 1
    return [...cartItems, { ...productToAdd, quantity: 1 }];
};



export const CartContext = createContext({
    isCartOpen: false,
    setIsCartOpen: () => { },
    cartItems: [],
    addItemToCart: () => { }
})

export const CartProvider = ({ children }) => {
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [cartItems, setCartItems] = useState([]);

    const addItemToCart = (productToAdd) => {
        setCartItems(addCartItem(cartItems, productToAdd))
    }
    const value = { isCartOpen, setIsCartOpen, addItemToCart, cartItems };
    return (
        <CartContext.Provider value={value}>{children}</CartContext.Provider>
    )
}
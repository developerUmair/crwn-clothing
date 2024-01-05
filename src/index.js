import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import { UserProvider } from "./contexts/user.context";
import { ToastContainer } from "react-toastify";
import { ProductsProvider } from "./contexts/products.context";
import { CartProvider } from "./contexts/cart.context";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode>
  <Router>
    <UserProvider>
      <ProductsProvider>
        <CartProvider>
          <App />
        </CartProvider>
      </ProductsProvider>
    </UserProvider>
    <ToastContainer />
  </Router>
  // </React.StrictMode>
);

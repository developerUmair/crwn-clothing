import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import { UserProvider } from "./contexts/user.context";
import { ToastContainer } from "react-toastify";
import { CartProvider } from "./contexts/cart.context";
import { store } from "./store/store";
import { Provider } from "react-redux";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode>
  <Provider store={store}>
    <Router>
      <UserProvider>
        <CartProvider>
          <App />
        </CartProvider>
      </UserProvider>
      <ToastContainer />
    </Router>
  </Provider>
  // </React.StrictMode>
);

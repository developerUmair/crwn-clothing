import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import { UserProvider } from "./contexts/user.context";
import { ToastContainer } from "react-toastify";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode>
    <Router>
      <UserProvider>
        <App />
      </UserProvider>
      <ToastContainer />
    </Router>
  // </React.StrictMode>
);

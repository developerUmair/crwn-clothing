import React from "react";
import "../../index.scss";
import CategoryDirectory from "../../components/directory/directory.component";
import { Link } from "react-router-dom";
// import { Outlet } from "react-router-dom";

const Home = () => {
  return (
    <>
      {/* <Outlet /> */}
      <h1 style={{ textAlign: "center" }}>Welcome to Crown Clothing</h1>
      <CategoryDirectory />
      <div style={{ display: "block", margin: "0 auto" }}>
        <Link to="/shop">View All</Link>
      </div>
    </>
  );
};
export default Home;

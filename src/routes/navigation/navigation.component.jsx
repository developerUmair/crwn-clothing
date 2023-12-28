import React, { useContext } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { ReactComponent as CrownLogo } from "../../assets/crown.svg";
import "./navigation.style.scss";
import { UserContext } from "../../contexts/user.context";
import { auth, signOutUser } from "../../utils/firebase/firebase.utils";
import { toast } from "react-toastify";

const Navigation = () => {
  const { currentUser, setCurrentUser } = useContext(UserContext);
  const navigate = useNavigate();

  // handle sign out

  const handleSignOut = async () => {
    await signOutUser();
    setCurrentUser(null);
    navigate("/");
    toast.success(`User Signed out successfully`);
  };
  console.log(currentUser);
  return (
    <>
      <div className="navigation">
        <Link to="/" className="logo-container">
          <CrownLogo className="logo" />
        </Link>
        <div className="nav-links-container">
          <Link to="shop" className="nav-link">
            SHOP
          </Link>
          {currentUser ? (
            <span className="nav-link" onClick={handleSignOut}>
              SIGN OUT
            </span>
          ) : (
            <Link to="auth" className="nav-link">
              SIGN IN
            </Link>
          )}
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default Navigation;

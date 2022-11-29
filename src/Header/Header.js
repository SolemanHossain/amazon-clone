import { Search, ShoppingBasket } from "@mui/icons-material";
import React from "react";
import { Link } from "react-router-dom";
import { auth } from "../firebase";
import { useStateValue } from "../StateProvider/StateProvider";
import "./Header.css";

export default function Header() {
  const [{ basket, user }, dispatch] = useStateValue();

  const handleAuthentication = () => {
    if (user) {
      auth.signOut();
    }
  };
  return (
    <div className="header">
      <Link to="/">
        <img
          className="header_logo"
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
        />
      </Link>
      <div className="header_search">
        <input className="header_searchInput" type="text"></input>
        <Search className="header_searchIcon"></Search>
      </div>
      <div className="header_nav">
        <Link to={!user && "/login"}>
          <div onClick={handleAuthentication} className="header_option">
            <span className="header_optionLineOne">
              Hello, {!user ? "Guest" : user.email}
            </span>
            <span className="header_optionLineTwo">
              {user ? "Sign Out" : "sign In"}
            </span>
          </div>
        </Link>
        <div onClick={handleAuthentication} className="header_option">
          <span className="header_optionLineOne">Returns</span>
          <span className="header_optionLineTwo"> & Orders</span>
        </div>
        <div className="header_option">
          <span className="header_optionLineOne">Your</span>
          <span className="header_optionLineTwo">Prime</span>
        </div>
        <Link to="/checkout">
          <div className="header_optionBasket">
            <ShoppingBasket />
            <span className="header_optionLineTwo header_basketCount">
              {basket?.length}
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
}

//https://www.freepnglogos.com/uploads/amazon-png-logo-vector/amazon-symbol-png-logo-vector-9.png

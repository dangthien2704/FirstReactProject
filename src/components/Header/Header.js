import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import Cart from "../Cart/Cart";
import Login from "../Login/Login";
// import { useState } from "react";

const Header = (props) => {
  return (
    <div className="header">
      <h1 className="header__title">Order Your Meals!</h1>

      <div className="header__search">
        <input type="text" className="header__searchInput" />
        <SearchIcon className="header__searchIcon" />
      </div>

      <div className="header__nav">
        <Login />
        <Cart onOpenModal={props.onOpenModal} />
      </div>
    </div>
  );
};

export default Header;

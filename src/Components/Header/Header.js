import React from "react";
import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import AnchorRoundedIcon from '@mui/icons-material/AnchorRounded';
// import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

function Header() {
  return (
    <div className="header">
      <h1 className="header_logo">OCEAN <span id="anchor__tag"><AnchorRoundedIcon/></span></h1>
      <div className="header_search">
        <input className="searchInput" type="text"></input>
        <SearchIcon className="header_searchIcon"></SearchIcon>
      </div>

      <div className="header_nav">
        <div className="header_option">
          <span className="header_optionUp">Hello,there</span>
          <span className="header_optionDown">Sign In</span>
        </div>
        <div className="header_option">
          <span className="header_optionUp">Returns</span>
          <span className="header_optionDown">& Orders</span>
        </div>
        <div className="header_option">
          <span className="header_optionUp">Choose</span>
          <span className="header_optionDown">Categories</span>
        </div>
      </div>

      <div className="header__optionBasket">
        <ShoppingCartIcon />
        <span className="header_optionDown header__basketCount">0</span>
      </div>
    </div>
  );
}

export default Header;

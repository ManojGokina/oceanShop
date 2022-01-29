import React from "react";
import "./Header.css";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import AnchorRoundedIcon from "@mui/icons-material/AnchorRounded";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

function Header() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const cartItem = JSON.parse(window.localStorage.getItem("productDesc"));
  const totalItems = cartItem ? cartItem.length : 0;
  return (
    <div className="header">
      <Link to="/" className="home__route">
        <h1 className="header_logo">
          OCEAN{" "}
          <span id="anchor__tag">
            <AnchorRoundedIcon />
          </span>
        </h1>
      </Link>

      <div className="header_search">
        <input className="searchInput" type="text"></input>
        <SearchIcon className="header_searchIcon"></SearchIcon>
      </div>

      <div className="header_nav">
        <Link to="/login" id="login_link">
          <div className="header_option">
            <span className="header_optionUp">Hello,there</span>
            <span className="header_optionDown">Sign In</span>
          </div>
        </Link>
        <div className="header_option">
          <span className="header_optionUp">Returns</span>
          <span className="header_optionDown">& Orders</span>
        </div>
        <div className="header_option">
          <span className="header_optionUp">Choose</span>
          <Button
            id="category__button"
            aria-controls={open ? "basic-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
          >
            Category
          </Button>
          <Menu
            id="category__button"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "category__button",
            }}
          >
            <MenuItem>
              <Link to="/MenClothing" id="dropDowm">
                Men's Clothing
              </Link>
            </MenuItem>
            <MenuItem>
              <Link to="/womenClothing" id="dropDowm">
                Women's Clothing
              </Link>
            </MenuItem>
            <MenuItem>Casual and Sports Shoes</MenuItem>
            <MenuItem>T-Shirts and Casual Shirts</MenuItem>
            <MenuItem>Laptops</MenuItem>
            <MenuItem>
              <Link to="/mobiles" id="dropDowm">
                Mobiles
              </Link>
            </MenuItem>
            <MenuItem>
              <Link to="/Jewelery" id="dropDowm">
                Jewelery
              </Link>
            </MenuItem>
            <MenuItem>Home Decor Items</MenuItem>
            <MenuItem>
              <Link to="/Electronics" id="dropDowm">
                Gadjets
              </Link>
            </MenuItem>
          </Menu>
        </div>
        <div className="header_option">
          <span className="header_optionUp">Your</span>
          <span className="header_optionDown">Wishlist</span>
        </div>
      </div>

      <Link to="/checkOut" className="checkout__route">
        <div className="header__optionBasket">
          <ShoppingCartIcon />
          <span
            className="header_optionDown header__basketCount"
            id="totalCartItems"
          >
            {totalItems}
          </span>
        </div>
      </Link>
    </div>
  );
}

export default Header;

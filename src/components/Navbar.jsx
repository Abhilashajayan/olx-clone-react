import React from "react";
import  OlxLogo from "../pages/olxLogo";
import  Search  from "../pages/search";
import Arrow  from "../pages/Arrow";
import  SellButton  from "../pages/sellButton";
import  SellButtonPlus  from "../pages/sellButtonPlus";
import "./navbar.css";
import { Link } from "react-router-dom";
import { UserAuth } from "../context/authContext";

const Navbar = () => {
    const { logout } = UserAuth();

  return (
    <>
      <div className="headerParentDiv">
        <div className="headerChildDiv">
          <div className="brandName ml-10">
            <OlxLogo></OlxLogo>
          </div>
          <div className="placeSearch">
            <Search></Search>
            <input type="text" placeholder="English" />
            <Arrow></Arrow>
          </div>
          <div className="productSearch">
            <div className="input">
              <input
                type="text"
                placeholder="Find car,mobile phone and more..." className="ml-2"
              />
            </div>
            <div className="searchAction">
              <Search color="#ffffff"></Search>
            </div>
          </div>
          <div className="language mr-6">
            <span className="text-black"> ENGLISH </span>
            <Arrow></Arrow>
          </div>
          <button
            className="bg-red-600 text-white px-5 py-2  mr-20 rounded-md"
           onClick={logout}
          >
            Logout
          </button>
          <div className="sellMenu mr-20">
            <SellButton></SellButton>
            <div className="sellMenuContent">
            <Link to="/sell">
                <SellButtonPlus></SellButtonPlus>
                <span>SELL</span>
             </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
import React from "react";
import { FaPhone, FaList, FaShoppingBasket } from "react-icons/fa";
const TopHeader = ({ setToggle }) => {
  return (
    <div className="top-header">
      <div onClick={() => setToggle(true)} className="top-header-menu">
        <FaList />
      </div>
      <div className="top-header-logo">
        <FaShoppingBasket />
        القاهره كايرو
      </div>
      <div className="top-header-text">أهلا وسهلا بكم</div>
      <div className="top-header-phone">
        123-456-789
        <FaPhone className="phone-icon" />
      </div>
    </div>
  );
};

export default TopHeader;

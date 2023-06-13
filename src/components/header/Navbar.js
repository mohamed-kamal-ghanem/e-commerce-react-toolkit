import React from "react";
import { Link } from "react-router-dom";
import { BiXCircle } from "react-icons/bi";

const Navbar = ({ toggle, setToggle }) => {
  return (
    <nav style={{ right: toggle && "0" }} className="navbar">
      <div className="navbar-close-icon">
        <i onClick={() => setToggle(false)} className="bi bi-x-lg"></i>
        <BiXCircle onClick={() => setToggle(false)} />
      </div>
      <ul className="navbar-links">
        <Link to="/" onClick={() => setToggle(false)} className="navbar-link">
          الصفحه الرئيسيه
        </Link>
        <Link
          to="/products"
          onClick={() => setToggle(false)}
          className="navbar-link"
        >
          الالكترونيات و الموبايلات
        </Link>
        <li onClick={() => setToggle(false)} className="navbar-link">
          المنزل و المطبخ
        </li>
        <li onClick={() => setToggle(false)} className="navbar-link">
          رجاليه
        </li>
        <li onClick={() => setToggle(false)} className="navbar-link">
          نسائيه
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

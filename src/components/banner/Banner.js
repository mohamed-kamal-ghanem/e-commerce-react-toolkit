import React from "react";
import "./Banner.css";

const Banner = () => {
  return (
    <div className="banner">
      <img
        src="/images/banners/shoes.png"
        alt="shoes-img"
        className="banner-img"
      />
      <img
        src="/images/banners/house.png"
        alt="house-img"
        className="banner-img"
      />
    </div>
  );
};

export default Banner;

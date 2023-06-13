import React from "react";
import "./Brands.css";
import { brands } from "../../data/brands";

const Brands = () => {
  return (
    <div className="brands-wrapper">
      {brands.map((brand) => (
        <div className="brand" key={brand.id}>
          <img src={brand.image} alt="" className="brand-img" />
        </div>
      ))}
    </div>
  );
};

export default Brands;

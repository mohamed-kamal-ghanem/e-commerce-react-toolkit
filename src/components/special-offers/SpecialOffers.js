import React from "react";
import "./SpecialOffers.css";
import { specialOffers } from "../../data/special-offers";
import Offer from "./Offer";

const SpecialOffers = () => {
  return (
    <div className="special-offers">
      <h1 className="special-offers-title">
        عروض كبيره لليوم
        <span className="special-offers-icon-wrapper">
          <i className="bi bi-stopwatch"></i>ل 24 ساعه بس
        </span>
      </h1>
      <div className="special-offers-wrapper">
        {specialOffers.map((offer) => (
          <Offer key={offer.id} offer={offer} />
        ))}
      </div>
    </div>
  );
};

export default SpecialOffers;

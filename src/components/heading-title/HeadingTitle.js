import React from "react";
import "./HeadingTitle.css";

const HeadingTitle = ({ title }) => {
  return (
    <div className="heading">
      <h1 className="heading-title">{title}</h1>
    </div>
  );
};

export default HeadingTitle;

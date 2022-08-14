import React from "react";
import "./product.css";
import "../../data";
const Product = (props, link) => {
  return (
    <div className="p">
      <div className="p-broswer">
        <div className="p-circle"></div>
        <div className="p-circle"></div>
        <div className="p-circle"></div>
      </div>
      <a href={link} target="_blank" rel="noreferrer">
        <img src={props.img} alt="Products" className="p-img" />
      </a>
    </div>
  );
};

export default Product;

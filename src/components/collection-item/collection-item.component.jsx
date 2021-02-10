import React from "react";
import "./collection-item.styles.scss";
import CustomButtom from "../custom-buttom/custom-buttom.component";

const CollectionItem = ({ id, name, price, imageUrl }) => (
  <div className="collection-item">
    <div style={{ backgroundImage: `url(${imageUrl}` }} className="image"></div>
    <div className="collection-footer">
      <span className="name">{name}</span>
      <span className="price">{price}</span>
    </div>
    <CustomButtom inverted>Add to cart</CustomButtom>
  </div>
);

export default CollectionItem;

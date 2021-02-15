import React from "react";
import "./cart-item.styles.scss";

const cartItem = ({ imageUrl, name, quantity, price }) => (
  <div className="cart-item">
    <img src={imageUrl} alt="item" />
    <div className="item-details">
      <span className="name">{name}</span>
      <span className="name">
        {quantity} x ${price}
      </span>
    </div>
  </div>
);

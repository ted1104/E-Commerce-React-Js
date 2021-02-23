import React from "react";
import { connect } from "react-redux";
import "./checkout-item.styles.scss";
import { ClearItemFromCart } from "../../redux/cart/cart.actions";

const CheckoutItem = ({ cartItems, clearItem }) => {
  const { name, imageUrl, price, quantity } = cartItems;
  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={imageUrl} alt="item" />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">{quantity}</span>
      <span className="price">{price}</span>
      <span className="remove-button" onClick={() => clearItem(cartItems)}>
        &#10005;
      </span>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  clearItem: (item) => dispatch(ClearItemFromCart(item)),
});
export default connect(null, mapDispatchToProps)(CheckoutItem);

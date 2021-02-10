import React from "react";
import { connect } from "react-redux";
import "./collection-item.styles.scss";
import CustomButtom from "../custom-buttom/custom-buttom.component";
import { addItem } from "../../redux/cart/cart.actions";
const CollectionItem = ({ item, addItem }) => {
  const { imageUrl, name, price } = item;
  return (
    <div className="collection-item">
      <div
        style={{ backgroundImage: `url(${imageUrl}` }}
        className="image"
      ></div>
      <div className="collection-footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <CustomButtom onClick={() => addItem(item)} inverted>
        Add to cart
      </CustomButtom>
    </div>
  );
};
const mapToDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item)),
});
export default connect(null, mapToDispatchToProps)(CollectionItem);

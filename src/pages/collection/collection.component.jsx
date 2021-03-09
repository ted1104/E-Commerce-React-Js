import React from "react";
import { connect } from "react-redux";
import { selectCollection } from "../../redux/shop/shop.selectors";
// import CollectionsItem from "../../components/cart-item/cart-item.component";

import "./collection.styles.scss";

const CollectionPage = ({ collection }) => {
  console.log("======HEEEEEEEEEEERRRRRRRREEE=======");
  console.log(collection);
  return (
    <div className="category">
      <h2>COLLECTIONS PAGE</h2>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.collectionId)(state),
});
export default connect(mapStateToProps)(CollectionPage);

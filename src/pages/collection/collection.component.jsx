import React from "react";
// import CollectionsItem from "../../components/cart-item/cart-item.component";

import "./collection.styles.scss";

const CollectionPage = ({ match }) => {
  console.log(match.params.collectionId);

  return (
    <div className="category">
      <h2>COLLECTIONS PAGE</h2>
    </div>
  );
};

export default CollectionPage;

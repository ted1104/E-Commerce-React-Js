import React from "react";
import { Route } from "react-router-dom";
import { connect } from "react-redux";
import CollectionsOverview from "../../components/collections-overview/collections-overview.component";
import CollectionPage from "../collection/collection.component";
import WithSpinner from "../../components/with-spinner/with-spinner.component";

import {
  firestore,
  convertCollectionsSnapshotToMap,
} from "../../firebase/firebase.utils";

import { updateCollections } from "../../redux/shop/shop.actions";
// const ShopPage = ({ match }) => {
//   // console.log(match);
//   return (
//     <div className="shop-page">
//       <Route exact path={`${match.path}`} component={CollectionsOverview} />
//       <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
//     </div>
//   );
// };

//VARIABLE WITH SPINNER

const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);
const CollectionPageWithSinner = WithSpinner(CollectionPage);

class ShopPage extends React.Component {
  state = {
    loading: true,
  };
  // constructor() {
  //   super()
  //   this.state = {}
  // }

  unsubscriberFromSnapshot = null;
  componentDidMount() {
    const { updateCollections } = this.props;
    const collectionRef = firestore.collection("collections");
    collectionRef.onSnapshot(async (snapshot) => {
      const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
      updateCollections(collectionsMap);

      this.setState({ loading: false });

      // console.log("===snapshot data sho====");
      // console.log(collectionsMap);

      // console.log("===snapshot data sho====");
      // console.log(snapshot);
    });
  }

  render() {
    const { match } = this.props;
    const { loading } = this.state;
    return (
      <div className="shop-page">
        {/* <Route exact path={`${match.path}`} component={CollectionsOverview} />
        <Route
          path={`${match.path}/:collectionId`}
          component={CollectionPage}
        /> */}
        <Route
          exact
          path={`${match.path}`}
          render={(props) => (
            <CollectionsOverviewWithSpinner isLoading={loading} {...props} />
          )}
        />
        <Route
          path={`${match.path}/:collectionId`}
          render={(props) => (
            <CollectionPageWithSinner isLoading={loading} {...props} />
          )}
        />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  updateCollections: (collectionsMap) =>
    dispatch(updateCollections(collectionsMap)),
});

export default connect(null, mapDispatchToProps)(ShopPage);

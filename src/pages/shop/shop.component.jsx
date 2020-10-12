import React from "react";
import { Route } from "react-router-dom";
import CollectionsOverview from "../../components/collections-overview/collections-overview.component";
import Collections from "../collections/collections.component";
import {
  firestore,
  covertCollectionsSnapshotToMap,
} from "../../firebase/firebase.utils";
import { connect } from "react-redux";
import { updateCollections } from "../../redux/shopdata/shop.actions";
import WithSpinner from "../../components/spinner/spinner.component";

const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);

const CollectionPageWithSpinner = WithSpinner(Collections)
class ShopPage extends React.Component {
  constructor() {
    super();
    this.state = {
      loading: true
    };
  }

  unsubscribeFromSnapShot = null;

  componentDidMount() {
    const { updateCollections } = this.props;
    const collectionRef = firestore.collection("collections");


    this.unsubscribeFromSnapShot = collectionRef.onSnapshot(async snapshot => {
      const collectionMap = covertCollectionsSnapshotToMap(snapshot);
      console.log("database", collectionMap);
      updateCollections(collectionMap);
      this.setState({ loading: false });
    });
  }

  render() {
    const { match } = this.props;
    const { loading} = this.state;
    console.log('loadingState', loading);
    return (
      <div className="shop-page">
        <Route exact path={`${match.path}`} render={(props) => <CollectionsOverviewWithSpinner isLoading={loading} {...props} /> } />

        <Route
          exact
          path={`${match.path}/:collectionId`}
          render={(props) => <CollectionPageWithSpinner isLoading={loading} {...props} /> }
        />
      </div>
    );
  }
}
const mapDispatchToProps = (dispatch) => ({
  updateCollections: (collectionMap) =>
    dispatch(updateCollections(collectionMap)),
});
export default connect(null, mapDispatchToProps)(ShopPage);

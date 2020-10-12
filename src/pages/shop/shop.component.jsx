import React from "react";
import { Route } from "react-router-dom";
import CollectionsOverview from "../../components/collections-overview/collections-overview.component";
import Collections from "../collections/collections.component";
import { connect } from "react-redux";
import { fetchCollectionsStartAsync } from "../../redux/shopdata/shop.actions";
import { selectIsCollectionFetching, selectIsCollectionsLoaded } from "../../redux/shopdata/shop.data.selector";
import WithSpinner from "../../components/spinner/spinner.component";
const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);

const CollectionPageWithSpinner = WithSpinner(Collections);
class ShopPage extends React.Component {
  

  componentDidMount() {
    const { fetchCollectionsStartAsync } = this.props
    fetchCollectionsStartAsync();
    
  }
  
  render() {
    const { match, selectIsCollectionsLoaded } = this.props;
    return (
      <div className="shop-page">
        <Route
          exact
          path={`${match.path}`}
          render={(props) => (
            <CollectionsOverviewWithSpinner isLoading={selectIsCollectionsLoaded} {...props} />
          )}
        />

        <Route
          exact
          path={`${match.path}/:collectionId`}
          render={(props) => (
            <CollectionPageWithSpinner isLoading={selectIsCollectionsLoaded} {...props} />
          )}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  selectIsCollectionsLoaded: selectIsCollectionsLoaded(state)
})

const mapDispatchToProps = (dispatch) => ({
  fetchCollectionsStartAsync: () => dispatch(fetchCollectionsStartAsync())
});
export default connect(mapStateToProps, mapDispatchToProps)(ShopPage);

import React from "react";
import "./collections-overview.styles.scss";
import { selectCollectionsForPreview } from '../../redux/shopdata/shop.data.selector'
import { connect } from "react-redux";
import  PreviewCollection from '../preview-collection/preview-collection.component';

const collectionsOverview = ({collections}) => {
  return(
    <div className="collections-overview">
    {collections.map(({id, ...otherProps}) => (
      <PreviewCollection
        key={id} {...otherProps}
      />
    ))}
  </div>
);
}


const MapStateToProps = state => ({
    collections: selectCollectionsForPreview(state)
})

export default connect(MapStateToProps)(collectionsOverview);
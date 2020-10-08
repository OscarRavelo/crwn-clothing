import React from 'react';
import {connect} from 'react-redux';
import {selectCollections} from '../../redux/shopdata/shop.data.selector';

import PreviewCollection from  "../../components/preview-collection/preview-collection.component";
const ShopPage = ({collections}) => {
    return(

        <div className='shop-page' >
            {
                collections.map((collection) => (
                    <PreviewCollection key={collection.id} title={collection.title} items={collection.items} />
                    ))
                }
                
            </div>
        )
    };

const mapStateToProps = state => ({
    collections: selectCollections(state)
})

export default connect(mapStateToProps)(ShopPage);
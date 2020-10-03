import React from 'react';
import SHOP_DATA from './shop.data';
import PreviewCollection from  "../../components/preview-collection/preview-collection.component";
class ShopPage extends React.Component {
    constructor(){
        super();

        this.state = {
            collections : SHOP_DATA
        }

    }

    render ( ){
        return (
            <div className='shop-page' >
            {
                this.state.collections.map((collection) => (
                    <PreviewCollection key={collection.id} title={collection.title} items={collection.items} />
                    ))
                }
                
            </div>
        )
    }
}

export default ShopPage;
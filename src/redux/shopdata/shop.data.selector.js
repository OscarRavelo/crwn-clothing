import { createSelector } from 'reselect';



const selectShopDate = state => state.shop;

export const selectCollections =  createSelector([selectShopDate],
    shop => shop
    );

export const selectCollectionsForPreview = createSelector([selectCollections],
    collections => Object.keys(collections).map(key => collections[key])
    )

export const selectCollection = collectionUrlParam => 
createSelector(
    [selectCollections],
    collections => collections[collectionUrlParam]
);
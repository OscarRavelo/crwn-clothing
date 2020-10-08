import { createSelector } from 'reselect';

const selectShopDate = state => state.shopData;

export const selectCollections =  createSelector([selectShopDate],
    shopData => shopData
    );
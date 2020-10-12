import ShopAccctionTypes from './shop.type';

export const updateCollections = (collectionsMap) => ({
    type: ShopAccctionTypes.UPDATE_COLLECTIONS,
    payload: collectionsMap
})
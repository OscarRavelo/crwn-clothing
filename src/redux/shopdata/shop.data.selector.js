import { createSelector } from "reselect";

const selectShopDate = (state) => state.shop;

export const selectCollections = createSelector(
  [selectShopDate],
  (shop) => shop.collections
);

export const selectCollectionsForPreview = createSelector(
  [selectCollections],
  (collections) =>
    collections ? Object.keys(collections).map((key) => collections[key]) : []
);

export const selectCollection = (collectionUrlParam) =>
  createSelector([selectCollections], (collections) =>
    collections ? collections[collectionUrlParam] : collections
  );

export const selectIsCollectionFetching = createSelector(
  [selectShopDate],
  (shop) => shop.isFetching
);

export const selectIsCollectionsLoaded = createSelector(
    [selectShopDate],
    shop => !!shop.collections
)
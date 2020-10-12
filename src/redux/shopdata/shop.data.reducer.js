import ShopAccctionTypes from "./shop.type";
import  ShopActionTypes from "./shop.type";

const SHOP_DATA = {
  collections: null,
  isFetching: false,
  errorMessage: undefined
}


  const shopDataReducer = (state = SHOP_DATA, action) => {
      switch (action.type) {

        case ShopAccctionTypes.FETCH_COLLECTIONS_START:
          return {
            ...state,
            isFetching: true
          };

        case ShopAccctionTypes.FETCH_COLLECTIONS_SUCCESS:
          return {
            ...state, 
            isFetching: false,
            collections: action.payload
          }

        case ShopAccctionTypes.FETCH_COLLECTIONS_FAILURE:
          return {
            ...state,
            isFetching: false,
            errorMessage: action.payload
          }

        case ShopActionTypes.UPDATE_COLLECTIONS:
          return {
            ...state,
            collections: action.payload
          }
          
          default:
              return state;
      }
  }

  export default shopDataReducer;
  
  
  
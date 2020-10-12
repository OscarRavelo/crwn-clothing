import  ShopActionTypes from "./shop.type";

const SHOP_DATA = {
  collections: null
}


  const shopDataReducer = (state = SHOP_DATA, action) => {
      switch (action.type) {

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
  
  
  
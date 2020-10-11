import { combineReducers } from 'redux';
import { persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import directoryReducer from './directoy/directory.reducer';
import userReducer from './user/user.reducer';
import CartReducer from './cart/cart.reducer';
import shopDataReducer from './shopdata/shop.data.reducer';

const persistConfig = {
    key: 'root',
    storage, 
    whitelist: ['cart']
}

const rootReducer = combineReducers({
    user: userReducer,
    cart: CartReducer,
    directory: directoryReducer,
    shop: shopDataReducer
});

export default persistReducer(persistConfig, rootReducer);

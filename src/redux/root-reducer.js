import { combineReducers } from 'redux';
import { persistReducer} from 'redux-persist';
import directoryReducer from './directoy/directory.reducer';
import storage from 'redux-persist/lib/storage';
import shopDataReducer from './shopdata/shop.data.reducer';

import userReducer from './user/user.reducer';
import CartReducer from './cart/cart.reducer';

const persistConfig = {
    key: 'root',
    storage, 
    whitelist: ['cart']
}

const rootReducer = combineReducers({
    user: userReducer,
    cart: CartReducer,
    directory: directoryReducer,
    shopData: shopDataReducer
});

export default persistReducer(persistConfig, rootReducer);

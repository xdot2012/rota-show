import { createStore, compose, applyMiddleware } from 'redux';
import { persistStore, persistCombineReducers } from 'redux-persist'
import { createLogger } from 'redux-logger';
import ReduxThunk from 'redux-thunk';
import { AsyncStorage } from 'react-native';
import rootReducers from './reducers';


const config = {
    key: 'root',
    storage: AsyncStorage,
    debug: true, //to get useful logging
};
const middleware = [ReduxThunk];
if (__DEV__) {
    middleware.push(createLogger());
}

const reducers = persistCombineReducers(config, rootReducers)
const enhancers = [applyMiddleware(...middleware)];

const persistConfig = { enhancers };
const store = createStore(reducers, undefined, compose(...enhancers));
const persistor = persistStore(store, persistConfig);

const configureStore = () => {
    return { persistor, store };
}

export default configureStore;
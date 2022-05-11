import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from "redux-devtools-extension";
import currencyReducer from './currencyReducer';

const storeFactory = () => {
     const middleware = [thunk];
     const reduxStore = createStore(
       currencyReducer,
       composeWithDevTools(
         applyMiddleware(...middleware)
         
       )
     );

     return reduxStore;
}



export default storeFactory;
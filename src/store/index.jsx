import { createStore, combineReducers,compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import listReducer from "../pages/list/reducer";

const reducer = combineReducers({
    list: listReducer
});

//调用redux工具
const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)));

export default store;
import { combineReducers } from 'redux';

import toDoReducer from './todo.reducer';
import showGraph from './showgraph.reducer';
import addToDoItemReducer from './addtodoitem.reducer';
import cartReducer from '../cart/cart.reducer';

import productReducer from '../product/product.reducer';

const reducers = combineReducers({
    todo: toDoReducer,
    btnHide: showGraph,
    addedtodos: addToDoItemReducer,
    product: productReducer,
    cart: cartReducer
});
export default reducers;
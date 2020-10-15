import {addCartItem, reduceItemQuantityUtils, addItemQuantityUtils} from './cart.utils';
const INITIAL_STATE = {
    cartItems: []
};
const cartReducer = (state=INITIAL_STATE, action) => {
    switch (action.type) {
        case 'ADD_ITEM_TO_CART':
            return{
                ...state,
                cartItems: addCartItem(state.cartItems, action.payload)
            }
        case 'ADD_ITEM_QUANTITY':
            return{
                ...state,
                cartItems: addItemQuantityUtils(state.cartItems, action.payload)
            }
        case 'REDUCE_ITEM_QUANTITY':
            return{
                ...state,
                cartItems: reduceItemQuantityUtils(state.cartItems, action.payload)
            }
        default:
            return state;
    }
}
export default cartReducer;
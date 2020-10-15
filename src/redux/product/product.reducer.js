const INITIAL_STATE = {
    productItems: []
};

const productReducer = (state=INITIAL_STATE, action) => {
    switch (action.type){
        case 'ADD_PRODUCT':
            return {
                ...state,
                productItems: [...state.productItems, action.payload]
            };
        default:
            return state;
    }
};
export default productReducer;
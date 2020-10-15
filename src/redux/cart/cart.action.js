export const addItemToCartAction = product => ({
    type: 'ADD_ITEM_TO_CART',
    payload: product
});

export const addQuantity = id => ({
    type: 'ADD_ITEM_QUANTITY',
    payload: id
})
export const reduceQuantity = id => ({
    type: 'REDUCE_ITEM_QUANTITY',
    payload: id
})
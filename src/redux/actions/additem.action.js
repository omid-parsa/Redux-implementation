export const addItem = todoItem => ({
    type: 'ADD_TODO_ITEM',
    payload: todoItem
});

export const reduceQuantity = id => ({
    type: 'REDUCE_QUANTITY',
    payload: id
});
export const addQuantity = id => ({
    type: 'ADD_QUANTITY',
    payload: id
})
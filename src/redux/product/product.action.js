let nextId = 1;
export const addProductAction = (product) => ({
    type: 'ADD_PRODUCT',
    payload: {...product, id: nextId++}
});
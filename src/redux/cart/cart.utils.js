export const addCartItem = (cartItems, itemToAdd) => {
    const existingItem = cartItems.find(cartItem => cartItem.id === itemToAdd.id);

    if (existingItem) {
        return cartItems.map(cartItem => cartItem.id === itemToAdd.id ? {...cartItem, quantity: cartItem.quantity + 1} : cartItem);
    }
    return [...cartItems, {...itemToAdd, quantity: 1}];
}
export const addItemQuantityUtils = (cartItems, itemId) => {
    return cartItems.map(cartItem => cartItem.id === itemId ? {...cartItem, quantity: cartItem.quantity + 1} : cartItem);
}
export const reduceItemQuantityUtils = (cartItems, itemId) => {
    const existingItem = cartItems.find(cartItem => cartItem.id === itemId);

    if (existingItem.quantity > 1) {
        return cartItems.map(cartItem => cartItem.id === itemId ? {...cartItem, quantity: cartItem.quantity -1 } : cartItem);
    }else {
        return cartItems.filter(cartItem => cartItem.id !== itemId);
    }
}
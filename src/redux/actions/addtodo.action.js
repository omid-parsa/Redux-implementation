let nextId= 0;

export const addToDoAction = text => ({
    type: 'ADD_TODO',
    payload: {
        text: text,
        id: nextId++
    }
})
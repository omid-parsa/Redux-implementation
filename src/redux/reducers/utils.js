export const addtoItemUtils = (addedToDos, addItem) => {
    const existingItem = addedToDos.find(addedToDo=> addedToDo.id === addItem.id);

    if (existingItem) {
        return addedToDos.map (addedToDo => addedToDo.id === addItem.id ? {...addedToDo, quantity: addedToDo.quantity + 1 }: addedToDo)
    }
    else{
        return [...addedToDos, {...addItem, quantity: 1}]
    }
    
};

export const reuceQuantityUtils =(addedToDos, itemId) => {

    const existingItem = addedToDos.find(addedToDo => addedToDo.id === itemId);

    if (existingItem.quantity> 1) {
        return addedToDos.map(addedToDo => addedToDo.id === itemId ?  {...addedToDo,quantity: addedToDo.quantity -1} : addedToDo)
    }else {
        return addedToDos.filter(addedToDo=> addedToDo.id !== itemId);
    }

    
}
export const addQuantityUtils = (addedToDos, itemId) => {
    // console.log(addedToDos);
    return addedToDos.map(addedToDo => addedToDo.id ===itemId ? {...addedToDo, quantity: addedToDo.quantity + 1} : addedToDo);
    // return addedToDos.map (addedToDo => console.log(addedToDo.quantity))
    // return addedToDos.map (addedToDo => addedToDo.id=== itemId ? {...addedToDo, quantity: addedToDo.quantity + 1 }: addedToDo);

    
}
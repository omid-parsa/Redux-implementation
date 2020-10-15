import {addtoItemUtils, reuceQuantityUtils, addQuantityUtils} from './utils';

const INITIAL_STATE = {
    addedToDos : []
}

const addToDoItemReducer = (state= INITIAL_STATE, action) => {
    switch (action.type) {
        case 'ADD_TODO_ITEM':
            return {
                ...state,
                addedToDos: addtoItemUtils(state.addedToDos, action.payload)
            }
        case 'REDUCE_QUANTITY':
            return{
                ...state,
                addedToDos: reuceQuantityUtils(state.addedToDos, action.payload)
            }
        case 'ADD_QUANTITY':
            return{
                ...state,
                addedToDos: addQuantityUtils(state.addedToDos, action.payload)
            }
        default:
            return state;
    }
}
export default addToDoItemReducer;
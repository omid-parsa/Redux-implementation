import React from 'react';

import {connect} from 'react-redux';
import {addItem} from '../../redux/actions/additem.action';

const Display = ({todos, addItem}) => {

    return(
        <div className="">
            {
                todos.map(todo => <p onClick={()=>addItem(todo)} key={todo.id}>{todo.text}</p>)
            }
        </div>
    )
};
const mapStateToProps = ({todo: {todos}}) => {
    console.log('called 2');
    return ({
        todos
    });
};
const mapDispatchToProps = dispatch => ({
    addItem: todo => dispatch(addItem(todo))
})

export default connect(mapStateToProps, mapDispatchToProps)(Display);
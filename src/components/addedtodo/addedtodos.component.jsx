import React from 'react';

import {connect } from 'react-redux';

import {reduceQuantity, addQuantity} from '../../redux/actions/additem.action';

const AddedToDosByClicking = ({addedToDos,itemCount, reduceQuantity, addQuantity}) => {

    return(
        <div className="">
            {
                addedToDos.map(addedToDo => <p key={addedToDo.id}><span onClick= {()=> reduceQuantity(addedToDo.id)}> - </span>  {addedToDo.text + '-' + addedToDo.quantity} <span onClick={()=> addQuantity(addedToDo.id)}> + </span></p>)
            }
            <p>{}</p>
        </div>
    )
}
const mapStateToProps = ({addedtodos: {addedToDos}}) => {
    console.log('i am being called');
    return({
        addedToDos,
    itemCount: addedToDos.reduce((accumulateValue, addedToDo)=> accumulateValue + addedToDo.quantity, 0)
    });
};
const mapDispatchToProps = dispatch => ({
    reduceQuantity: id => dispatch(reduceQuantity(id)),
    addQuantity: id => dispatch(addQuantity(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(AddedToDosByClicking);

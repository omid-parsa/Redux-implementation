import React from 'react';
import { connect } from 'react-redux';


import {addToDoAction} from '../../redux/actions/addtodo.action';

const Input = ({addToDo}) => {
    const [textInput, setTextInput] = React.useState('');

    const handleSubmit = e => {
        e.preventDefault();

        addToDo(textInput);

        setTextInput('');

    }
    return(
        <div className="">
            <form action="" onSubmit={handleSubmit}>
                <input type="text" value={textInput} onChange={e => setTextInput(e.target.value)}/>
                <button type='submit'>save</button>
            </form>
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    addToDo : textInput => dispatch(addToDoAction(textInput))
})
export default connect(null,mapDispatchToProps)(Input);
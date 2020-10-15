import React from 'react';
import './form-input.styles.scss';


const FormInput = ({value, onChange, type, labelFor, labelText}) => (
    <div className="form-input">
        <label htmlFor={labelFor}>{labelText}: </label>
        <input type={type} value={value} onChange={onChange}/>
    </div>
);
export default FormInput;
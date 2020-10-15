import React from 'react';
import './button-submit.styles.scss';

const ButtonSubmit = ({buttonText, onClick, type}) => (
    <button type={type} onClick={onClick}>{buttonText}</button>
);
export default ButtonSubmit;
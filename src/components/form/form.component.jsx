import React, { useState } from 'react';
import './form.styles.scss';

import {connect} from 'react-redux';

//ACTIONS
import { addProductAction } from '../../redux/product/product.action';

//COMPONENTS
import FormTitle from '../form-title/form-title.component';
import FormInput from '../form-input/form-input.component';
import ButtonSubmit from '../button-submit/button-submit.component';

const Form = ({addProduct}) => {

    const [productName, setProductName] = useState('');
    const [productPrice, setProductPrice] = useState('');
    const [productImgUrl, setProductImgUrl] = useState('');
    

    const submitHandler = e => {
        e.preventDefault();
        const product = {
            productName,
            productPrice,
            productImgUrl
        };
        addProduct(product);
        setProductName('');
        setProductPrice('');
        setProductImgUrl('');
    }

    return (
        <form className="form" onSubmit={submitHandler}>
            <FormTitle formTitle='Enter Product Details' />
            <FormInput value={productName} type='text' onChange={e => setProductName(e.target.value)} labelFor='p-name' labelText='Product Name'/>
            <FormInput value={productPrice} type='number' onChange={e => setProductPrice(e.target.value)} labelFor='p-price' labelText='Product Price'/>
            <FormInput value={productImgUrl} type='text' onChange={e => setProductImgUrl(e.target.value)} labelFor='p-imgUrl' labelText='Product Image URL'/>
            <ButtonSubmit type='submit' buttonText='Publish' />
        </form>
    );
};
const mapDispatchToProps = dispatch => ({
    addProduct: product => dispatch(addProductAction(product))
})
export default connect(null,mapDispatchToProps)(Form);
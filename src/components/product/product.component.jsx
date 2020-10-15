import React from 'react';
import './product.styles.scss';

import {connect } from 'react-redux';
import {addItemToCartAction} from '../../redux/cart/cart.action';

//COMPONENTS
import ButtonSubmit from '../button-submit/button-submit.component';

const Product = ({product, addItemToCart}) => {
    const {productName, productPrice, productImgUrl, id} = product;
    return (
        <div className="product">
            <img src={productImgUrl} alt={productName+' photo'}/>
            <p>{productName}</p>
            <p>{productPrice}</p>
            <ButtonSubmit onClick={()=> addItemToCart(product)} buttonText='Add to cart'/>
        </div>
    );
};
const mapDispatchToProps = dispatch => ({
    addItemToCart: product => dispatch(addItemToCartAction(product))
})
export default connect(null,mapDispatchToProps)(Product);

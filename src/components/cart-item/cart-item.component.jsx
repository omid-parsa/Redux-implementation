import React from 'react';
import './cart-item.styles.scss';

//ACTIONS
import {addQuantity, reduceQuantity} from '../../redux/cart/cart.action';

import {connect} from 'react-redux';

const CartItem = ({product, addQuantity, reduceQuantity}) => (
    <div className="cart-item">
        <p><span onClick={() => reduceQuantity(product.id)}>-</span>{product.productName + '   ' + product.quantity}<span onClick={() => addQuantity(product.id)}>+</span></p>
    </div>
);

const mapDispatchToState = dispatch => ({
    addQuantity: id => dispatch(addQuantity(id)),
    reduceQuantity: id => dispatch(reduceQuantity(id))
});
export default connect(null,mapDispatchToState)(CartItem);
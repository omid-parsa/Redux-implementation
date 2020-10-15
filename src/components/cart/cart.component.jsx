import React from 'react';
import './cart.styles.scss';

import {connect } from 'react-redux';
import {selectCartItems,selectCartItemsCount} from '../../redux/cart/cart.selectors';

//COMPONENTS
import CartItem from '../cart-item/cart-item.component';


const Cart = ({cartItems, itemsCount}) => (
    <div className="cart">
        {
            cartItems.map(cartItem => (<CartItem key={cartItem.id} product={cartItem} />))
            
        }
        <p>Total Items: {itemsCount}</p>
    </div>
);
const mapStateToProps = (state) => ({
    cartItems: selectCartItems(state),
    itemsCount: selectCartItemsCount(state)
});

export default connect(mapStateToProps)(Cart);
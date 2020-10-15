import React from 'react';
import './products.styles.scss';

import {connect} from 'react-redux';
import {productItems} from '../../redux/product/product.selector';


//COMPONENTS
import Product from '../product/product.component';

const Products = ({products}) => {

    return(
        <div className="products">
            {
                products.map(product => <Product key={product.id} product= {product} />)
            }
        </div>
    )
};
const mapStateToProps = (state) => ({
    products: productItems(state)
});
export default connect(mapStateToProps)(Products);

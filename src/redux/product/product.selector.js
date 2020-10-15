import {createSelector} from 'reselect';

const product = state => state.product;

export const productItems = createSelector([product],
product => product.productItems);

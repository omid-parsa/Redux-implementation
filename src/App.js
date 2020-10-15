import React from 'react';

import { Route } from 'react-router-dom';

import {connect} from 'react-redux';
import Form from './components/form/form.component';
import Products from './components/products/products.component';
import Cart from './components/cart/cart.component';

import Highcharts from 'highcharts/highstock';
import HighchartsReact  from 'highcharts-react-official';

import UsingState from './usingstate';
import UsingClasses from './usingClasses';

import ToDo from './components/todo/todo.component';
import BtnDisplay from './components/grap-display-btn/btn-display.component';
import AddedToDosByClicking from './components/addedtodo/addedtodos.component';

const App = ({graphHidden}) => {

    const options = {
        
        title: {
            text: 'My chart'
        },
        series: [
            {
                data: [1, 2, 3, 4, 5, 3, 2]
            }
        ]
    };

    return(
        <div className='container'>
            <Form />
            <Products />
            <Cart />
            {/* <ToDo />
            <BtnDisplay />
            <AddedToDosByClicking />
            {
                graphHidden ? <HighchartsReact 
                highcharts= {Highcharts} 
                constructorType = {'stockChart'}
                options={options} />
                : ''
            }


            <Route exact path='/state' component= {UsingState} />
            <Route exact path='/class' component= {UsingClasses} /> */}
            {/* <UsingState />
            <UsingClasses /> */}
        </div>
    );
};
const mapStateToProps = ({btnHide: {hidden}}) => ({
    graphHidden: hidden
}) 
export default connect(mapStateToProps)(App);
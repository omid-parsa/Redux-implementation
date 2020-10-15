import React from 'react';
import './index.css';

import { render } from 'react-dom';

import { BrowserRouter } from 'react-router-dom';

import { Provider } from 'react-redux';
import store from './redux/store';

import App from './App.js';




render( <Provider store={store}>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </Provider>
, document.getElementById('root'));

        

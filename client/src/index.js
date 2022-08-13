import 'materialize-css/dist/css/materialize.min.css';
import React from "react"
import ReactDOM from "react-dom"
import {Provider} from 'react-redux';
import {applyMiddleware} from 'redux';
import reduxThunk from 'redux-thunk';

import App from "./components/App"
import { legacy_createStore as createStore} from 'redux'
import reducers from "./reducers";

import axios from 'axios';
window.axios = axios;


const store = createStore(reducers, {}, applyMiddleware(reduxThunk))

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.querySelector("#root"));
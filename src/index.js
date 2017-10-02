import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import HomeContainer from "./containers/HomeContainer.js";
import registerServiceWorker from './registerServiceWorker';
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import { createStore,applyMiddleware } from "redux";

import createSocketIoMiddleware from 'redux-socket.io';
import io from 'socket.io-client';

import allReducers from "./reducers/index";

let socket = io('http://localhost:8000');
let socketIoMiddleware = createSocketIoMiddleware(socket, "server/");
let store = applyMiddleware(socketIoMiddleware)(createStore)(allReducers);

ReactDOM.render(
    <Provider store={store}>
        <HomeContainer />
    </Provider>
, document.getElementById('root'));
registerServiceWorker();

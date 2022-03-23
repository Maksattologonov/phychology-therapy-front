import React from 'react';
import ReactDOM from 'react-dom';
import App from "./App";
import {createStore} from "redux";
import rootReducer from "./redux/reducers/rootReducer";
import {Provider} from "react-redux";
import {BrowserRouter} from "react-router-dom";

const store = createStore(rootReducer);


ReactDOM.render(
    <BrowserRouter>
        <Provider store={store}>
            <App/>
        </Provider>
    </BrowserRouter>,
    document.getElementById('root')
);
import React from 'react';
import ReactDOM from 'react-dom';
import App from "./App";
import rootReducer from "./redux/reducers/rootReducer";
import {applyMiddleware, compose, createStore} from "redux";
import createSagaMiddleware from 'redux-saga';
import {Provider} from "react-redux";
import {BrowserRouter} from "react-router-dom";
import rootSaga from "./redux/sagas/rootSaga";
import "regenerator-runtime/runtime";

const sagaMiddleware = createSagaMiddleware();

const store = createStore(rootReducer,compose(
    applyMiddleware(sagaMiddleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
));

sagaMiddleware.run(rootSaga);

ReactDOM.render(
    <BrowserRouter>
        <Provider store={store}>
            <App/>
        </Provider>
    </BrowserRouter>,
    document.getElementById('root')
);
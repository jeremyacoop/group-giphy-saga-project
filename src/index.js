import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';

const favoriteReducer = (state = [], action) => {
    console.log(state, action);
}

const storeInstance = createStore(
    combineReducers({

    }),
    applyMiddleware(logger),
)

ReactDOM.render(<Provider store={storeInstance}><App /></ Provider>, document.getElementById('root'));

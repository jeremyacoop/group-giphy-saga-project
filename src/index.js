import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import { takeEvery, put } from 'redux-saga/effects';
import axios from 'axios';

function* watcherSaga() {
    yield takeEvery('FETCH_IMAGES', fetchImages);
}

function* fetchImages() {
    console.log('In fetchImages');
    try {
        let response = yield axios.get('/');
        yield put({
            type:   'SET_GALLERY',
            payload:    response.data
        })
    }
    catch (err) {
        console.error('GET images failed', err);
        yield put({
            type:   'SET_ERROR',
            payload: 'Image fail!'
        })
    }
}

const imageReducer = (state = [], action) => {
    console.log(state, action);
    switch (action.type) {
        case 'SET_GALLERY':
            return [...state, action.payload];
        default:
            return state;
    }
}

// const favoriteReducer = (state = [], action) => {
//     console.log(state, action);

// }



const sagaMiddleware = createSagaMiddleware();

const storeInstance = createStore(
    combineReducers({
        imageReducer,
        
    }),
    applyMiddleware(sagaMiddleware, logger),
)

sagaMiddleware.run(watcherSaga);

ReactDOM.render(
<Provider store={storeInstance}>
    <App />
</ Provider>, 
document.getElementById('root'));

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore, combineReducers } from 'redux';
import { logger } from 'redux-logger';

const inputReducer = (state = {}, action) => {
    if (action.type === 'GET_INPUT'){
        console.log('Inside inputReducer:', state, 'payload:', action.payload);
        return {...state, ...action.payload };
    } 
      return state
}



const feedbackReducer = (state = [], action) => {
    // put feedback in redux global state
    if (action.type === "FEEDBACK_GET") {
        console.log("Inside feedbackReducer, payload:", action.payload);
        return action.payload;
    }
    return state;
}

const storeInstance = createStore(
    combineReducers({
        inputReducer,
        feedbackReducer
    }),
    applyMiddleware(logger)
)

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();

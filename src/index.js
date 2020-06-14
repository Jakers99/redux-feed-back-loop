import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';

const feelingReducer = (state = [], action) => {
    if (action.type === 'GET_INPUT'){
        console.log('Inside feelingReducer:', state, 'payload:', action.payload);
        return [... state, action.payload];
    } 
      return state
}

const storeInstance = createStore(
    combineReducers({
        feelingReducer
    })
)

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();

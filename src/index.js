import React from 'react';
import ReactDOM from 'react-dom';
import App from './router/index';
import registerServiceWorker from './registerServiceWorker';
import {createStore, combineReducers} from 'redux';
import {Provider} from 'react-redux';
import FoodReducer from './reducers/FoodReducer';
import NextReducer from './reducers/NextReducer';
const recuders = combineReducers({
	list: FoodReducer,
	list1:NextReducer
})
const store = createStore(recuders, {});


function renderPage() {
	ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
}

renderPage();

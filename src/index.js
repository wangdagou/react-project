import React from 'react';
import ReactDOM from 'react-dom';
import App from './router/index';
import registerServiceWorker from './registerServiceWorker';
import {createStore, combineReducers} from 'redux';
import {Provider} from 'react-redux';
<<<<<<< HEAD
import SingleReducer from './reducers/SingleReducer';
import DetailsReducer from './reducers/DetailsReducer';
const recuders = combineReducers({
	list: SingleReducer,
	list1: SingleReducer,
	ss:DetailsReducer,
=======
import FoodReducer from './reducers/FoodReducer';
import NextReducer from './reducers/NextReducer';
import SectionReducer from './reducers/SectionReducer';

const recuders = combineReducers({
	list: FoodReducer,
	list1:NextReducer,
	list2:SectionReducer
>>>>>>> fe02de053b2e8f160ab7eb42d318045ee5eeb61d
})

const store = createStore(recuders, {});


function renderPage() {
	ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
}

renderPage();

store.subscribe(renderPage);

registerServiceWorker();

import React from 'react';
import ReactDOM from 'react-dom';
import App from './router/index';
import registerServiceWorker from './registerServiceWorker';
import {createStore, combineReducers} from 'redux';
import {Provider} from 'react-redux';
import SingleReducer from './reducers/SingleReducer';
import DetailsReducer from './reducers/DetailsReducer';
import FoodReducer from './reducers/FoodReducer';
import NextReducer from './reducers/NextReducer';
import SectionReducer from './reducers/SectionReducer';

const recuders = combineReducers({
	list: SingleReducer,
	list1: SingleReducer,
	list2: FoodReducer,
	list3: NextReducer,
	list4: SectionReducer,
	ss:DetailsReducer,
})

const store = createStore(recuders, {});


function renderPage() {
	ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
}

renderPage();

store.subscribe(renderPage);

registerServiceWorker();

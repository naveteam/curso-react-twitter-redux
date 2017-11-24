import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import promise from 'redux-promise';
import reducers from './modules';

const store = applyMiddleware(thunk, promise)(createStore)(reducers);

export default store;
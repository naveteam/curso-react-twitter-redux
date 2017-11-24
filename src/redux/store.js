import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import reducers from './modules';

const store = applyMiddleware(thunk)(createStore)(reducers);

export default store;
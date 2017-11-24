import { combineReducers } from 'redux';
import tweets from './tweets';
import auth from './auth';

const rootReducer = combineReducers({
    auth,
    tweets
})

export default rootReducer
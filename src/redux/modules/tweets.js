import { createTweet, getTweets } from '../../services/tweet';

const CREATE_TWEET = 'CREATE_TWEET';
const CREATE_TWEET_SUCCESS = 'CREATE_TWEET_SUCCESS';
const CREATE_TWEET_FAIL = 'CREATE_TWEET_FAIL';
const LIST_TWEETS = 'LIST_TWEETS';
const LIST_TWEETS_SUCCESS = 'LIST_TWEETS_SUCCESS';
const LIST_TWEETS_FAIL = 'LIST_TWEETS_FAIL';

const INITIAL_STATE = {
    data: [],
    loading: false,
    error: false
}
export default function reducer(state = INITIAL_STATE, action){
    switch(action.type) {
        case LIST_TWEETS:
        case CREATE_TWEET:
            return {
                ...state,
                loading: true
            };
        case LIST_TWEETS_FAIL:
        case CREATE_TWEET_FAIL:
            return {
                ...state,
                loading: false,
                error: true
            };
        case LIST_TWEETS_SUCCESS: {
            return {
                loading: false,
                error: false,
                data: action.payload
            };
        }
        case CREATE_TWEET_SUCCESS:
            const newState = [action.payload].concat(state.data);
            return {
                data: newState,
                loading: false,
                error: true
            }
        default:
            return state
    }
}

export function create(data) {
    return dispatch => {
        dispatch({type: CREATE_TWEET});
        createTweet(data)
            .then(res => dispatch({type: CREATE_TWEET_SUCCESS, payload: res.data}))
            .catch(error => dispatch({type: CREATE_TWEET_FAIL}))
    }
}

export function list() {
    return dispatch => {
        dispatch({type: LIST_TWEETS});
        getTweets()
            .then(res => dispatch({type: LIST_TWEETS_SUCCESS, payload: res.data}))
            .catch(error => dispatch({type: LIST_TWEETS_FAIL}))
    }
}
import { loginUser, signUp, updateUser } from '../../services/auth';

const LOGIN = 'LOGIN';
const LOGIN_FAIL = 'LOGIN_FAIL';
const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
const REGISTER = 'REGISTER';
const REGISTER_FAIL = 'REGISTER_FAIL';
const REGISTER_SUCCESS = 'REGISTER_SUCCESS';
const UPDATE = 'UPDATE';
const UPDATE_FAIL = 'UPDATE_FAIL';
const UPDATE_SUCCESS = 'UPDATE_SUCCESS';

const INITIAL_STATE = {
    user: {
        name: '',
        email: '',
        password: '',
        id: null
    },
    loading: false,
    error: false,
}

export default function reducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case LOGIN:
        case REGISTER:
        case UPDATE:
            return {
                ...state,
                loading: true,
                error: false
            }
        case REGISTER_SUCCESS:
            return {
                ...state,
                loading: false,
                error: false
            }
        case LOGIN_SUCCESS:
        case UPDATE_SUCCESS:
            return {
                loading: false,
                error: false,
                user: action.payload
            }
        case REGISTER_FAIL:
        case LOGIN_FAIL:
        case UPDATE_FAIL:
            return {
                loading: false,
                error: true,
                ...state
            }
        default:
            return state;
    }
}

export function login(user){
    return dispatch => {
        dispatch({type: LOGIN});
        return loginUser(user)
            .then(res => {
                setUser(res.data);
            })
            .catch(error => dispatch({type: LOGIN_FAIL}))
    }
}

export function setUser(user) {
    localStorage.setItem('user', JSON.stringify(user));
    return dispatch => {
        dispatch({type: LOGIN_SUCCESS, payload: user});
    }
}

export function getUser(){
    return JSON.parse(localStorage.getItem('user'));
}

export function register(user) {
    return dispatch => {
        dispatch({type: REGISTER});
        return signUp(user)
            .then(res => dispatch({type: REGISTER_SUCCESS}))
            .catch(error => dispatch({type: REGISTER_FAIL}))
    }
}

export function update(user) {
    return dispatch => {
        dispatch({type: UPDATE});
        return updateUser(user)
            .then(res => {
                setUser(res.data);
                dispatch({type: UPDATE_SUCCESS, payload: res.data})
            })
            .catch(error => dispatch({type: UPDATE_FAIL}));
    }
}
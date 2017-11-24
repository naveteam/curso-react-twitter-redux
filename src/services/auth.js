import api from './api';

export const loginUser = data => api.post('/login', data);

export const signUp = user => api.post('/user/create', user);

export const updateUser = user => api.put(`/user/${user._id}`, user);
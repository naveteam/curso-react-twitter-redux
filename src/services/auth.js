import api from './api';

export const login = data => api.post('/login', data);

export const signUp = user => api.post('/user/create', user);

export const updateUser = user => api.put('/user/:id', user);
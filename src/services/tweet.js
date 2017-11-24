import api from './api';

export const getTweets = () => api.get('/tweets');

export const createTweet = (data) => api.post('/tweets', data);

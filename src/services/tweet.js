import api from './api';

export const getTweets = () => api.get('/tweets');

export const createTweet = (data) => {
    return api.post('/tweets', data);
}

import axios from 'axios';
const __API__ = 'http://localhost:3000';

export default axios.create({
    baseURL: __API__,
})
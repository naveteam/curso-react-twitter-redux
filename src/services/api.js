import axios from 'axios';
const __API__ = 'http://localhost:8080';

export default axios.create({
    baseURL: __API__,
})
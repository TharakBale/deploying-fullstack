import axios from 'axios';

const api = axios.create({
  baseURL: 'https://deploying-backend-03ds.onrender.com/api/reviews'
});

export default api;

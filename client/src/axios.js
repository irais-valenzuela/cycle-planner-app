import axios  from 'axios';

const apiInstance = axios.create({
  baseURL: 'http://localhost:3045/api', // Set the base URL for all requests, the backend routes
});

export default apiInstance
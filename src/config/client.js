import axios form 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://localhost:5000/',
  /* other custom settings */
});

export default axiosInstance;

import axios from 'axios';
import { store } from '../store';

const axiosInstance = axios.create({
  baseURL: 'process.env.NEXT_PUBLIC_API_BASE_URL', 
  headers: {
    'Content-Type': 'application/json',
  },
});

axiosInstance.interceptors.request.use(
  (config) => {
    const state = store.getState();
    const token = state.auth?.token; 

    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);


axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      // logout
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;

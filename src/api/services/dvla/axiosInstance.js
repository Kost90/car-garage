import axios from 'axios';

const axiosInstance = axios.create({
  // For dev environment
  baseURL: '/api',
  headers: {
    'Content-Type': 'application/json',
    'x-api-key': import.meta.env.VITE_DVLA_API_KEY,
  },
});

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    const status = error.response?.status;

    if (status === 401 || status === 403) {
      console.error('Access denied: Unauthorized or Forbidden');

      return Promise.reject(new Error('Access denied. Please check your permissions.'));
    }

    if (status === 404) {
      console.error('Not Found: Record for vehicle not found');

      return Promise.reject(new Error('Vehicle Not Found: Record for vehicle not found.'));
    }

    console.error('API Error:', error);

    return Promise.reject(error);
  },
);

export default axiosInstance;

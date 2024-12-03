import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'http://localhost:5000/api',
});

// axios(url, data, header)

// Request interceptor
apiClient.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('authToken'); 
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor: Handle expired tokens
apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      console.warn("Token has expired or is invalid. Redirecting to login...");
      
      localStorage.removeItem('authToken');

      window.location.href = '/signin';
    }
    
    return Promise.reject(error);
  }
);

export default apiClient;

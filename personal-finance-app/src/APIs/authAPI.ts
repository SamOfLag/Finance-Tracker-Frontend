import axios from 'axios';
import apiClient from './apiClient';

export const API_BASE_URL = 'http://localhost:5000/api';

export const signup = async (userData: {
  username: string;
  email: string;
  password: string;
}): Promise<void> => {
  try {
    const response = await axios.post(`${API_BASE_URL}/auth/register`, userData);
    return response.data;
  } catch (error: any) {
    throw error.response?.data?.message || 'An error occurred while signing up.';
  }
};


export const signin = async (userData: {
    email: string;
    password: string;
  }): Promise<void> => {
    try {
      const response = await apiClient.post('/auth/login', userData);
      const token = response.data.data;
      
      console.log('Login response:', token)

      if (token) {
        localStorage.setItem('authToken', token);
        window.location.href = '/dashboard';
      }
    } catch (error) {
      console.error('Login failed:', error);
    }
  };
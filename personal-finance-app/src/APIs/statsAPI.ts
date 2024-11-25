import axios from 'axios';
import { API_BASE_URL } from './authAPI';
import apiClient from './apiClient';

export const fetchSummary = async () => {
  try {
    const response = await apiClient.get('/summary');
    return response.data.data; 
  } catch (error: any) {
    throw new Error(error.response?.data?.message || 'Failed to fetch summary');
  }
};

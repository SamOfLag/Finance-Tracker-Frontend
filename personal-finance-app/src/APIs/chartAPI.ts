import apiClient from './apiClient';


export const fetchChart = async () => {
  try {
    const response = await apiClient.get('/chart');
    return response.data.data; 

  } catch (error: any) {
    throw new Error(error.response?.data?.message || 'Failed to fetch chart data');
  }
};

import apiClient from './apiClient';


export const fetchBudgetChart = async () => {
  try {
    const response = await apiClient.get('/budgets');
    return response.data.data; 

  } catch (error: any) {
    throw new Error(error.response?.data?.message || 'Failed to fetch budget chart data');
  }
};

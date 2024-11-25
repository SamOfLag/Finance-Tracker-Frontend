import React, { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';
import axios from 'axios';
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, Tooltip, Legend } from 'chart.js';
import apiClient from '../../APIs/apiClient';

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

const MoneyFlowChart: React.FC = () => {
  const [chartData, setChartData] = useState<any>(null);

  useEffect(() => {
    const fetchMoneyFlowData = async () => {
      try {
        const response = await apiClient.get('/chart');

        const data = response.data.data;

        // Format data for the chart
        setChartData({
          labels: data.map((item: any) => item.monthYear),
          datasets: [
            {
              label: 'Income',
              data: data.map((item: any) => item.income),
              backgroundColor: 'rgba(75, 192, 192, 0.6)', // Light green
            },
            {
              label: 'Expenses',
              data: data.map((item: any) => item.expenses),
              backgroundColor: 'rgba(255, 99, 132, 0.6)', // Light red
            },
          ],
        });
      } catch (error) {
        console.error('Failed to fetch money flow data:', error);
      }
    };

    fetchMoneyFlowData();
  }, []);

  if (!chartData) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h3>Money Flow Chart</h3>
      <Bar data={chartData} />
    </div>
  );
};

export default MoneyFlowChart;

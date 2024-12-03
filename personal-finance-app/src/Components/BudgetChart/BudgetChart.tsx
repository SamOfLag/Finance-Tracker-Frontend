import React, { useState, useEffect } from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import apiClient from '../../APIs/apiClient';
import styles from './BudgetChart.module.css';

// Register required chart components
ChartJS.register(ArcElement, Tooltip, Legend);

// Interface for Budget Data
interface BudgetData {
  category: string;
  spentAmount: number;
}

interface ChartData {
  labels: string[];
  datasets: {
    data: number[];
    backgroundColor: string[];
    borderWidth: number;
    hoverOffset: number;
  }[];
}


const BudgetChart: React.FC = () => {
  const [chartData, setChartData] = useState<ChartData | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchBudgetData = async () => {
      setLoading(true);
      try {
        const response = await apiClient.get('/budgets');
        const budgets: BudgetData[] = response.data.data;

        const labels = budgets.map((budget) => budget.category);
        const spentAmounts = budgets.map((budget) => budget.spentAmount);

        setChartData({
          labels,
          datasets: [
            {
              data: spentAmounts,
              backgroundColor: [
                '#28a745',
                '#ffc107',
                '#007bff',
                '#17a2b8',
                '#dc3545',
                '#6610f2',
              ],
              borderWidth: 0,
              hoverOffset: 10,
            },
          ],
        });
      } catch (err: any) {
        setError(err.response?.data?.message || 'Failed to fetch budget data');
      } finally {
        setLoading(false);
      }
    };

    fetchBudgetData();
  }, []);

  const totalBudget = chartData
    ? chartData.datasets[0].data.reduce((acc, value) => acc + value, 0)
    : 0;

  const options = {
    cutout: '75%',
    plugins: {
      tooltip: { enabled: true },
      legend: { display: false },
    },
  };

  if (loading) return <div>Loading budget data...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className={styles.budgetContainer}>
      <h3>Budget Overview</h3>
      <div className={styles.budgetCard}>
        <div className={styles.chartWrapper}>
          {chartData && <Doughnut data={chartData} options={options} />}
          {chartData && (
            <div className={styles.chartCenter}>
              <h2>${totalBudget.toLocaleString()}</h2>
              <p>Total Budget</p>
            </div>
          )}
        </div>
        {chartData && (
          <div className={styles.legend}>
            {chartData.labels.map((label, index) => (
              <div key={index} className={styles.legendItem}>
                <span
                  className={styles.legendColor}
                  style={{
                    backgroundColor: chartData.datasets[0].backgroundColor[index],
                  }}
                ></span>
                <span className={styles.legendLabel}>{label}</span>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default BudgetChart;
import React from 'react';
import styles from './Stats.module.css';
import StatCard from '../StatCard/StatCard';
import { useStats } from '../../Contexts/StatsContext';
import StatCards from '../StatCards/StatCards';

// const statsData = [
//   { title: 'Total Balance', value: '$20,700', percentage: '+12.8%', isPositive: true },
//   { title: 'Income', value: '$10,870', percentage: '+9.8%', isPositive: true },
//   { title: 'Expense', value: '$6,661', percentage: '-11%', isPositive: false },
//   { title: 'Total Savings', value: '$84,310.50', percentage: '+6.7%', isPositive: true },
// ];

const Stats: React.FC = () => {
    const {stats, loading} = useStats()

    if (loading) {
        return (
          <div className={styles.statsContainer}>
            {Array(4)
              .fill(null)
              .map((_, index) => (
                <div className={styles.skeletonCard} key={index}></div>
              ))}
          </div>
        );
      }
    
      if (!stats) {
        return <div>Error loading stats...</div>;
      }

  return (
    <div>
      <StatCards
        stats={[
          { title: 'Total Income', value: `$${stats.totalIncome}`, percentage: '', isPositive: true },
          { title: 'Total Expenses', value: `$${stats.totalExpenses}`, percentage: '', isPositive: false },
          { title: 'Balance', value: `$${stats.balance}`, percentage: '', isPositive: stats.balance > 0 },
        ]}
      />
    </div>
  );
};

export default Stats;

import React from 'react';
import { useStats } from '../../Contexts/StatsContext';
import StatCard from '../../Components/StatCard/StatCard';
import styles from './StatCards.module.css';
import { StatCardsProps } from '../../Types/interfaces';

const StatCards: React.FC<StatCardsProps> = ({stats}) => {

//   if (loading) return <p>Loading...</p>;
//   if (error) return <p>{error}</p>;

  return (
    <div className={styles.statCardsContainer}>
      {stats?.map((stat, index) => (
        <StatCard
          key={index}
          title={stat.title}
          value={stat.value}
          percentage={stat.percentage}
          isPositive={stat.isPositive}
        />
      ))}
    </div>
  );
};

export default StatCards;

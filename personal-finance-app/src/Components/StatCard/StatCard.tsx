import React from 'react';
import styles from './StatCard.module.css';
import { FaArrowUp, FaArrowDown } from 'react-icons/fa';
import { StatCardProps } from '../../Types/interfaces';

const StatCard: React.FC<StatCardProps> = ({ title, value, percentage, isPositive }) => {
  return (
    <div className={styles.card}>
      <div className={styles.cardHeader}>
        <h3>{title}</h3>
      </div>
      <div className={styles.cardBody}>
        <h2 className={styles.value}>{value}</h2>
        <div className={styles.percentage}>
          {isPositive ? (
            <FaArrowUp className={styles.positive} />
          ) : (
            <FaArrowDown className={styles.negative} />
          )}
          <span className={isPositive ? styles.positive : styles.negative}>
            {percentage}
          </span>
        </div>
      </div>
    </div>
  );
};

export default StatCard;

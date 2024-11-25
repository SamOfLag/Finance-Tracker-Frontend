import React from 'react';
import Sidebar from '../../Components/Sidebar/Sidebar';
import Header from '../../Components/Header/Header';
import StatsCard from '../../Components/StatCard/StatCard';
import MoneyFlowChart from '../../Components/MoneyFlowChart/MoneyFlowChart';
import BudgetChart from '../../Components/BudgetChart/BudgetChart';
import RecentTransactions from '../../Components/RecentTransactions/RecentTransactions';
import SavingGoals from '../../Components/SavingGoals/SavingGoals';
import styles from './DashboardPage.module.css';
import Stats from '../../Components/Stats/Stats';
import { StatsProvider } from '../../Contexts/StatsContext';


const DashboardPage: React.FC = () => {
  return (
    <StatsProvider>
    <div className={styles.dashboardPage}>
      <Sidebar />
      <div className={styles.mainContent}>
        <Header />
        <Stats/>
        {/* <div className={styles.statsSection}>
          <Stats/>
        </div> */}
        <div className={styles.chartsSection}>
          <MoneyFlowChart />
          <BudgetChart />
        </div>
        <div className={styles.detailsSection}>
          <RecentTransactions />
          <SavingGoals />
        </div>
      </div>
    </div>
    </StatsProvider>
  );
};

export default DashboardPage;

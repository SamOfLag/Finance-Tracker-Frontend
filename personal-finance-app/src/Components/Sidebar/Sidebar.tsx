import React from 'react';
import { FaHome, FaWallet, FaChartPie, FaBullseye, FaCog, FaQuestionCircle, FaSignOutAlt } from 'react-icons/fa';
import { MdOutlineAnalytics } from 'react-icons/md';
import { BiTargetLock } from 'react-icons/bi';
import styles from './Sidebar.module.css';

const Sidebar: React.FC = () => {
  return (
    <div className={styles.sidebar}>
      {/* Logo Section */}
      <div className={styles.logo}>
        <h2>SmartFi</h2>
        {/* <img src="/path-to-your-logo/logo.png" alt="Easy Life Logo" /> */}
      </div>

      {/* Navigation Links */}
      <ul className={styles.navLinks}>
        <li>
          <FaHome className={styles.icon} />
          <span>Dashboard</span>
        </li>
        <li>
          <FaWallet className={styles.icon} />
          <span>Transactions</span>
        </li>
        <li>
          <BiTargetLock className={styles.icon} />
          <span>Wallet</span>
        </li>
        <li>
          <FaBullseye className={styles.icon} />
          <span>Goals</span>
        </li>
        <li>
          <FaChartPie className={styles.icon} />
          <span>Budget</span>
        </li>
        <li>
          <MdOutlineAnalytics className={styles.icon} />
          <span>Analytics</span>
        </li>
        <li>
          <FaCog className={styles.icon} />
          <span>Settings</span>
        </li>
      </ul>

      {/* Help & Logout Section */}
      <div className={styles.footerLinks}>
        <div>
          <FaQuestionCircle className={styles.icon} />
          <span>Help</span>
        </div>
        <div>
          <FaSignOutAlt className={styles.icon} />
          <span>Log out</span>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;

import React, { useEffect, useState } from 'react';
import { FaBell } from 'react-icons/fa';
import styles from './Header.module.css';
import axios from 'axios'; 
import apiClient from '../../APIs/apiClient';

const Header: React.FC = () => {
  const [username, setUsername] = useState<string>('');

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await apiClient.get('/user/profile');
  
        // Update state with the fetched username
        setUsername(response.data.data.username); 
      } catch (error) {
        console.error('Failed to fetch user data:', error);
      }
    };
  
    fetchUserData();
  }, []);
  

  return (
    <header className={styles.header}>
      <div className={styles.welcomeSection}>
        <h1>Welcome back, {username || 'User'}!</h1>
        <p>It’s the best time to manage your finances.</p>
      </div>

      {/* Right Section: Controls */}
      <div className={styles.controls}>
        {/* Date Filter */}
        <select className={styles.dateFilter}>
          <option value="thisMonth">This Month</option>
          <option value="lastMonth">Last Month</option>
          <option value="thisYear">This Year</option>
        </select>

        {/* Notification Icon */}
        <div className={styles.notification}>
          <FaBell />
        </div>

        {/* User Profile */}
        <div className={styles.userProfile}>
          <img
            src="/1707852097637.jpeg"
            alt="User Avatar"
            className={styles.avatar}
          />
          <span className={styles.userName}>{username || 'User'}</span>
        </div>
      </div>
    </header>
  );
};

export default Header;

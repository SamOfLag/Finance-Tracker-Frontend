import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import axios from 'axios';
import { Stat, StatsContextProps } from '../Types/interfaces';
import { fetchSummary } from '../APIs/statsAPI';

// Create the context
const StatsContext = createContext<StatsContextProps | undefined>(undefined);

// Create the provider component
export const StatsProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [stats, setStats] = useState<StatsContextProps['stats']>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  
    const loadStats = async () => {
      try {
        setLoading(true)
        const data = await fetchSummary()
        setLoading(false)
        setStats(data);
        setError(null);
      } catch (err) {
        setError('Failed to fetch stats data.');
        setLoading(false)
        
      } 
    };

    // loadStats();


  return (
    <StatsContext.Provider value={{ stats, loading, loadStats }}>
      {children}
    </StatsContext.Provider>
  );
};

// Custom hook to use the stats context
export const useStats = () => {
  const context = useContext(StatsContext);
  if (!context) {
    throw new Error('useStats must be used within a StatsProvider');
  }
  return context;
};

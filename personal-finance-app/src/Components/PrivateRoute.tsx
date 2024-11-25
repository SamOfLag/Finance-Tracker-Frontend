import React from 'react';
import { Navigate } from 'react-router-dom';


const PrivateRoute = ({ children }: { children: React.ReactNode }) => {
    const token = localStorage.getItem('authToken');
    if (!token) {
      window.location.href = '/signin';
      return null; 
    }
    return <>{children}</>;
  };
  

export default PrivateRoute;

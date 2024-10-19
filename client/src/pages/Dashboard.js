import React, { useState, useEffect } from 'react';
import AdminDashboard from '../components/AdminDashboard';
import ManagerDashboard from '../components/ManagerDashboard';
import StaffDashboard from '../components/StaffDashboard';
import {jwtDecode} from 'jwt-decode';

const Dashboard = () => {
  const [role, setRole] = useState('');
  
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      try {
        const decoded = jwtDecode(token);
        setRole(decoded.role);
      } catch (error) {
        console.error('Invalid token');
      }
    }
  }, []);

  if (!role) {
    return <div>Loading...</div>; // Loading state
  }

  // Render the correct dashboard based on role
  if (role === 'admin') {
    return <AdminDashboard />;
  }

  if (role === 'manager') {
    return <ManagerDashboard />;
  }

  return <StaffDashboard />; // Default to staff
};

export default Dashboard;

import React, { useState, useEffect } from 'react';
import AdminDashboard from '../components/AdminDashboard';
import ManagerDashboard from '../components/ManagerDashboard';
import StaffDashboard from '../components/StaffDashboard';
import jwtDecode from 'jwt-decode';

const Dashboard = () => {
  const [role, setRole] = useState('');

  useEffect(() => {
    // Assuming the role is stored in the token
    const token = localStorage.getItem('token');
    if (token) {
      const decoded = jwtDecode(token);
      setRole(decoded.role);
    }
  }, []);

  if (role === 'admin') {
    return <AdminDashboard />;
  }

  if (role === 'manager') {
    return <ManagerDashboard />;
  }

  return <StaffDashboard />;
};

export default Dashboard;

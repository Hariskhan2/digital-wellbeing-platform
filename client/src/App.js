import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import {jwtDecode} from 'jwt-decode';

// A component to protect private routes
const PrivateRoute = ({ element, allowedRoles }) => {
  const [role, setRole] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      try {
        const decoded = jwtDecode(token);
        setRole(decoded.role);
      } catch (error) {
        console.error('Invalid token');
        localStorage.removeItem('token'); // Clear invalid token
        setRole(null);
      }
    }
    setLoading(false);
  }, []);

  if (loading) return <div>Loading...</div>;

  // If the user is not logged in, redirect to login
  if (!role) return <Navigate to="/" />;

  // Check if user has the required role
  if (!allowedRoles.includes(role)) return <Navigate to="/" />;

  return element;
};

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        
        {/* Role-based dashboard route */}
        <Route
          path="/dashboard"
          element={
            <PrivateRoute
              element={<Dashboard />}
              allowedRoles={['admin', 'manager', 'staff']}
            />
          }
        />

        {/* Add other protected routes here if needed */}
      </Routes>
    </Router>
  );
};

export default App;

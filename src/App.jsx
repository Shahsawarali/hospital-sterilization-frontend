// App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import OperationTheaterStaff from './pages/OperationTheaterStaff';
import CounterStaff from './pages/CounterStaff';
import SterilizationStaff from './pages/SterilizationStaff';
import { AuthProvider, ProtectedRoute } from './context/AuthContext';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          
          {/* Protecting routes */}
          <Route path="/ot-dashboard" element={<ProtectedRoute><OperationTheaterStaff /></ProtectedRoute>} />
          <Route path="/counter-dashboard" element={<ProtectedRoute><CounterStaff /></ProtectedRoute>} />
          <Route path="/sterilization-dashboard" element={<ProtectedRoute><SterilizationStaff /></ProtectedRoute>} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;

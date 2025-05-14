import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Patients from './components/Patients';
import Appointments from './components/Appointments';
import Prescriptions from './components/Prescriptions';
import Profile from './components/Profile';
import Sidebar from './components/Sidebar';
import TopNav from './components/TopNav';
import Login from './components/Login';
import { ThemeProvider } from './context/ThemeContext';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <ThemeProvider>
      {!isAuthenticated ? (
        <Login setIsAuthenticated={setIsAuthenticated} />
      ) : (
        <Router>
          <div className="app-container">
            <Sidebar />
            <div className="main-content">
              <TopNav />
              <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/patients" element={<Patients />} />
                <Route path="/appointments" element={<Appointments />} />
                <Route path="/prescriptions" element={<Prescriptions />} />
                <Route path="/profile" element={<Profile />} />
              </Routes>
            </div>
          </div>
        </Router>
      )}
    </ThemeProvider>
  );
}

export default App;

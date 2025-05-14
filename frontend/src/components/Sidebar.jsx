import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { ThemeContext } from '../context/ThemeContext';
import '../styles/Sidebar.css';

const Sidebar = () => {
  const { darkMode } = useContext(ThemeContext);

  return (
    <div className={`sidebar ${darkMode ? 'dark' : ''}`}>
      <div className="sidebar-header">
        <h3>MediConnect</h3>
        <p>Doctor Dashboard</p>
      </div>
      <nav className="sidebar-nav">
        <NavLink to="/" exact="true" className="nav-item">
          <i className="fas fa-tachometer-alt"></i>
          <span>Dashboard</span>
        </NavLink>
        <NavLink to="/patients" className="nav-item">
          <i className="fas fa-user-injured"></i>
          <span>Patients</span>
        </NavLink>
        <NavLink to="/appointments" className="nav-item">
          <i className="fas fa-calendar-check"></i>
          <span>Appointments</span>
        </NavLink>
        <NavLink to="/prescriptions" className="nav-item">
          <i className="fas fa-prescription-bottle-alt"></i>
          <span>Prescriptions</span>
        </NavLink>
        <NavLink to="/profile" className="nav-item">
          <i className="fas fa-user-md"></i>
          <span>Profile</span>
        </NavLink>
      </nav>
    </div>
  );
};

export default Sidebar;
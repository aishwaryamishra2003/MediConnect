import React, { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import '../styles/TopNav.css';

const TopNav = () => {
  const { darkMode, toggleTheme } = useContext(ThemeContext);

  return (
    <div className="top-nav">
      <div className="search-bar">
        <input type="text" placeholder="Search..." />
        <button>
          <i className="fas fa-search"></i>
        </button>
      </div>
      <div className="nav-actions">
        <button className="theme-toggle" onClick={toggleTheme}>
          {darkMode ? (
            <i className="fas fa-sun"></i>
          ) : (
            <i className="fas fa-moon"></i>
          )}
        </button>
        <button className="notification">
          <i className="fas fa-bell"></i>
          <span className="badge">3</span>
        </button>
        <div className="user-profile">
          <img
            src="https://randomuser.me/api/portraits/med/men/75.jpg"
            alt="User"
          />
          <span>Dr. Smith</span>
        </div>
      </div>
    </div>
  );
};

export default TopNav;
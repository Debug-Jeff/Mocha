import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Logo from '../../Assets/Blue phoenix esport mascot logo.jpeg';
import './index.scss';

const Sidebar = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const location = useLocation();

  const menuItems = [
    { path: '/', icon: 'bx bx-home', label: 'Home' },
    { path: '/about', icon: 'bx bx-user-circle', label: 'About' },
    { path: '/projects', icon: 'bx bx-code-alt', label: 'Projects' },
    { path: '/events', icon: 'bx bx-calendar-event', label: 'Events' },
    { path: '/testimonials', icon: 'bx bx-conversation', label: 'Testimonials' },
    { path: '/contact', icon: 'bx bxs-contact', label: 'Contact' }
  ];

  useEffect(() => {
    const handleMouseMove = (e) => {
      const threshold = 50;
      if (e.clientX <= threshold) {
        setIsExpanded(true);
      }
    };

    document.addEventListener('mousemove', handleMouseMove);
    return () => document.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const handleMouseLeave = () => {
    setIsExpanded(false);
  };

  return (
    <div 
      className={`nav-bar ${isExpanded ? 'expanded' : ''}`}
      onMouseLeave={handleMouseLeave}
    >
      <div className="hover-trigger" />
      
      <div className="sidebar-content">
        <div className="logo-name">
          <div className="name">
            <img src={Logo} alt="Mocha Logo" />
            <h2>Mocha</h2>
          </div>
          <span className="subtitle">Coffee website</span>
        </div>

        <nav className="sidebar">
          <ul>
            {menuItems.map((item) => (
              <li key={item.path}>
                <Link 
                  to={item.path} 
                  className={location.pathname === item.path ? 'active' : ''}
                >
                  <i className={item.icon}></i>
                  <span className="link-text">{item.label}</span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="sidebar-footer">
          <span className="version">v1.0.0</span>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
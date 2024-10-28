// Components/Layout/index.js
// Layout component that wraps all pages and includes the sidebar
// Provides consistent structure across all pages
import React from 'react';
import Sidebar from '../Sidebar';
import './index.scss';

const Layout = ({ children }) => {
  return (
    <div className="layout">
      {/* Sidebar is consistently shown across all pages */}
      <Sidebar />
      {/* Main content area where page components are rendered */}
      <main className="content">
        {children}
      </main>
    </div>
  );
};

export default Layout;

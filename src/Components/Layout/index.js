// Components/Layout/index.js
// Layout component that wraps all pages and includes the sidebar
// Provides consistent structure across all pages
import React, {useEffect} from 'react';
import Sidebar from '../Sidebar';
import './index.scss';

const Layout = ({ children }) => {
  useEffect(() => {
    const handlePointerMove = (e) => {
      const { currentTarget: el, clientX: x, clientY: y } =e;
      const { top: t, left: l, width: w, height: h } = el.getBoundingClientRect();
      el.style.setProperty('--posX', x - l - w / 2);
      el.style.setProperty('--posY', y - t - h / 2);
    };

    document.body.addEventListener('pointermove', handlePointerMove);

    //Cleanup on component unmount
    return () => {
      document.body.removeEventListener('pointermove', handlePointerMove);
    };
  }, []);

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

// Components/Sidebar/index.js
// Navigation sidebar component
// Contains links to all main pages of the application
import React from 'react';
import { Link } from 'react-router-dom';
import './index.scss';
import Logo from'../../Assets/Blue phoenix esport mascot logo.jpeg'

const Sidebar = () => {
  return (
    <div className='Nav-bar'>
      <div className='logo-name'>
        <div className="name">
          <img src={Logo}></img>
          <h2>MOCHA!</h2>
        </div>
        <span>Coffee website</span>
      </div>
      <nav className="sidebar">
        {/* Navigation links using React Router's Link component */}
        <ul>
          <li><Link to="/"><i class='bx bx-home'></i>Home</Link></li>
          <li><Link to="/about"><i class='bx bx-user-circle'></i>About</Link></li>
          <li><Link to="/projects"><i class='bx bx-code-alt' ></i>Projects</Link></li>
          <li><Link to="/events"><i class='bx bx-calendar-event' ></i>Events</Link></li>
          <li><Link to="/testimonials"><i class='bx bx-conversation' ></i>Testimonials</Link></li>
          <li><Link to="/contact"><i class='bx bxs-contact'></i>Contact</Link></li>
        </ul>
      </nav>
    </div>
    
  );
};

export default Sidebar;

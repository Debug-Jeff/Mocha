import React from 'react';
import { Link } from 'react-router-dom';
import img1 from '../../Assets/home-image.jpg';
import './index.scss';

const Home = () => {
  const socialLinks = [
    { icon: "facebook", url: "#" },
    { icon: "twitter", url: "#" },
    { icon: "instagram", url: "#" },
    { icon: "linkedin", url: "#" },
    { icon: "youtube", url: "#" }
  ];

  return (
    <div className="home">
      <div className="home-content">
        <div className="writing">
          <h1 className="animate__fadeIn">
            Welcome to <span className="highlight">Orion</span>
          </h1>
          <p className="subtitle animate__fadeIn animate__delay-1s">
            We are a digital agency specializing in innovative solutions.
          </p>
          
          <div className="home-btn animate__fadeIn animate__delay-2s">
            <Link to="/explore" className="btn btn-primary">
              <span>EXPLORE MORE</span>
              <i className="fas fa-arrow-right"></i>
            </Link>
            <Link to="/contact" className="btn btn-secondary">
              <span>CONTACT US</span>
              <i className="fas fa-envelope"></i>
            </Link>
          </div>

          <div className="home-social animate__fadeIn animate__delay-3s">
            {socialLinks.map((social, index) => (
              <a 
                key={index} 
                href={social.url} 
                className="home-social-icon"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className={`fab fa-${social.icon}`}></i>
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="home-img animate__fadeInRight">
        <div className="image-container">
          <img src={img1} alt="Orion Digital Agency" />
          <div className="image-overlay">
            <div className="box-img">
              <span>MORE</span>
              <i className="fas fa-chevron-right"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;


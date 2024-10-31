import React from 'react';
import './index.scss';
import image from '../../Assets/5-Coffee.jpg'

const ProjectsItem = ({ id, title, image, price, badges, rarity, totalSupply }) => (
  <div className="Projects-item">
    <div className="item-image">
      <img src={image} alt={title} />
    </div>
    <div className="item-details">
      <div className="item-title">
        <span>#{id}</span>
        <span>{title}</span>
      </div>
      <div className="item-badges">
        {badges.map((badge, index) => (
          <span key={index} className={`badge ${badge.toLowerCase()}`}>
            {badge}
          </span>
        ))}
      </div>
      <div className="item-footer">
        <div className="price">
          <i className="eth-icon">Ξ</i>
          <span>{price} wETH</span>
        </div>
        <div className="supply">
          {rarity} / {totalSupply}
        </div>
        <button className="buy-button">
          <i className="bx bx-cart"></i>
        </button>
      </div>
    </div>
  </div>
);

const Projects = () => {
  const categories = [
    { id: 1, name: 'Newest items' },
    { id: 2, name: 'Latest sales' },
    { id: 3, name: 'Latest listings' },
    { id: 4, name: 'Parcels and Estates' }
  ];

  const items = [
    {
      id: '7297',
      title: 'HAND-DRAWN APES',
      image: '../../Assets/10-Coffee.jpg',
      price: '0.1',
      badges: ['EPIC'],
      rarity: '18',
      totalSupply: '50'
    },
    {
      id: '1245',
      title: 'JELLYDEEP OCEA',
      image: '../../Assets/11-Coffee.jpg',
      price: '0.152',
      badges: ['EPIC'],
      rarity: '15',
      totalSupply: '30'
    },
    {
      id: '1245',
      title: 'JELLYDEEP OCEA',
      image: '../../Assets/12-Coffee.jpg',
      price: '0.152',
      badges: ['EPIC'],
      rarity: '15',
      totalSupply: '30'
    },
    {
      id: '1245',
      title: 'JELLYDEEP OCEA',
      image: '../../Assets/13-Coffee.jpg',
      price: '0.152',
      badges: ['EPIC'],
      rarity: '15',
      totalSupply: '30'
    },
    // Add more items as needed
  ];

  return (
    <div className="Projects-container">
      <header className="Projects-header">
        <h1>Projects</h1>
        <p>
          Welcome to the virtual world's one-stop-shop for the very best digital assets. 
          Here you can search and buy creator's ASSETS with $AND to incorporate them into your LAND
        </p>
      </header>

      <div className="category-filters">
        {categories.map(category => (
          <button 
            key={category.id} 
            className="category-button"
          >
            {category.name}
          </button>
        ))}
      </div>

      <div className="Projects-grid">
        {items.map(item => (
          <ProjectsItem 
            key={item.id}
            {...item}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
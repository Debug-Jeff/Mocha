//Update contact.js
// Components/Contact/index.js
import React, { useState } from 'react';
import axios from 'axios';
import './index.scss';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState({
    type: '',
    message: ''
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ type: 'loading', message: 'Sending...' });
    
    try {
      await axios.post('http://localhost:5000/api/contact', formData);
      setStatus({
        type: 'success',
        message: 'Message sent successfully!'
      });
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      setStatus({
        type: 'error',
        message: error.response?.data?.error || 'Something went wrong'
      });
    }
  };

  return (
    <div className="contact">
      <h1>Contact Us</h1>
      {status.message && (
        <div className={`alert alert-${status.type}`}>
          {status.message}
        </div>
      )}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          value={formData.name}
          onChange={(e) => setFormData({...formData, name: e.target.value})}
          required
        />
        <input
          type="email"
          placeholder="Email"
          value={formData.email}
          onChange={(e) => setFormData({...formData, email: e.target.value})}
          required
        />
        <textarea
          placeholder="Message"
          value={formData.message}
          onChange={(e) => setFormData({...formData, message: e.target.value})}
          required
        />
        <button type="submit" disabled={status.type === 'loading'}>
          {status.type === 'loading' ? 'Sending...' : 'Send'}
        </button>
      </form>
    </div>
  );
};

export default Contact;







































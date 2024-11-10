// App.js
// Main application component that sets up routing and overall structure
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './Components/Layout';
import Home from './Components/Home';
import About from './Components/About';
import Contact from './Components/Contact';
import Projects from './Components/Projects';
import Events from './Components/Events';
import Testimonials from './Components/Testimonials';
import './App.css';

// Root component that wraps thhe entire application
// Sets up routing and layout structure
function App() {
  return (
    <Router>
      <Layout>
        {/* Define all application routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/events" element={<Events />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;

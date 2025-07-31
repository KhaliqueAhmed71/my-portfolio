import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './assets/components/Navbar';
import Footer from './assets/components/Footer';
import About from './assets/pages/About';
import Contact from './assets/pages/Contact';
import Home from './assets/pages/Home';
import Projects from './assets/pages/Projects';
import Skills from './assets/pages/Skills';
const App = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />

        {/* Page Content */}
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>

        {/* Footer */}
        <Footer />
      </div>
    </Router>
  );
};

export default App;

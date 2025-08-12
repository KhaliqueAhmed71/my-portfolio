import React from 'react'
import { Routes, Route, useLocation } from 'react-router-dom';
import Home from "./assets/pages/Home.jsx";
import About from './assets/pages/About';
import Projects from './assets/pages/Projects';
import Contact from './assets/pages/Contact';
import Skills from './assets/pages/Skills';
import Navbar from './assets/components/Navbar';
import Footer from './assets/components/Footer';


// Page Transition Component
function PageWrapper({ children }) {
  return (
    <div className="animate-fadeIn min-h-[70vh]">
      {children}
    </div>
  );
}

export default function App() {
  const location = useLocation();

  return (
    <div>
      <Navbar />
      <main className="container mx-auto px-5 py-10 transition-all duration-300">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<PageWrapper><Home /></PageWrapper>} />
          <Route path="/about" element={<PageWrapper><About /></PageWrapper>} />
          <Route path="/projects" element={<PageWrapper><Projects /></PageWrapper>} />
          <Route path="/skills" element={<PageWrapper><Skills /></PageWrapper>} /> {/* Skills page */}
          <Route path="/contact" element={<PageWrapper><Contact /></PageWrapper>} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

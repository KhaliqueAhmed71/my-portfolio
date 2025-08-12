import React from 'react'
import { Routes, Route, useLocation } from 'react-router-dom';
import Home from "./pages/Home.jsx";
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Skills from './pages/Skills';
import Navbar from './components/Navbar';
import Footer from './components/Footer';


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

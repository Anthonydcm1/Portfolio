import React, { useLayoutEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MyNavbar from './components/MyNavbar';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Curriculum from './pages/Curriculum';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './App.css';

function App() {
  useLayoutEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-in-out',
    });
  }, []);

  return (
    <Router>
      <div className="min-vh-100">
        <MyNavbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/curriculum" element={<Curriculum />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;

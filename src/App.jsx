import React, { useLayoutEffect } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import MyNavbar from './components/MyNavbar';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Curriculum from './pages/Curriculum';
import ContactModal from './components/ContactModal';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './App.css';

function App() {
  const [showModal, setShowModal] = React.useState(false);

  const toggleModal = () => setShowModal(!showModal);

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
        <MyNavbar onContactClick={toggleModal} />
        <main>
          <Routes>
            <Route path="/" element={<Home onContactClick={toggleModal} />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/curriculum" element={<Curriculum />} />
          </Routes>
        </main>
        <ContactModal show={showModal} handleClose={toggleModal} />
      </div>
    </Router>
  );
}

export default App;

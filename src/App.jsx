import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MyNavbar from './components/MyNavbar';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Curriculum from './pages/Curriculum';
import './App.css';

function App() {
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

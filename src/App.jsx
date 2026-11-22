import { useEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';

import About from './pages/About';
import Arsenal from './pages/Arsenal';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Missions from './pages/Missions';

import Atmosphere from './components/Atmosphere';
import Footer from './components/Footer';
import MusicPlayer from './components/MusicPlayer';
import Navbar from './components/Navbar';
import ScrollProgress from './components/ScrollProgress';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [pathname]);

  return null;
}

export default function App() {
  return (
    <div className="site-shell">
      <ScrollToTop />
      <Atmosphere />
      <ScrollProgress />
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/arsenal" element={<Arsenal />} />
        <Route path="/missions" element={<Missions />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Home />} />
      </Routes>

      <Footer />
      <MusicPlayer />
    </div>
  );
}

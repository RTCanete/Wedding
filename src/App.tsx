import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import SchedulePage from './pages/SchedulePage';
import EntouragePage from './pages/EntouragePage';
import GalleryPage from './pages/GalleryPage';
import GuestListPage from './pages/GuestListPage';
import './styles.css'; // Import styles

const App: React.FC = () => {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/schedule" element={<SchedulePage />} />
          <Route path="/entourage" element={<EntouragePage />} />
          <Route path="/guest-list" element={<GuestListPage />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/" element={<MainContent />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Main from './components/Main';
import Gallery from './components/Gallery';
import Footer from './components/Footer';
import Resorts from './components/Resorts';
import Contact from './components/Contact';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path='/gallery' element={<Gallery />} />
        <Route path='/resorts' element={<Resorts />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;

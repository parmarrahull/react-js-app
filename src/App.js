import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import React from 'react';
import NavBar from './components/NavBar';
import Product from './components/Product';
import About from './components/About';


const App = () => {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Product />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
};

export default App;

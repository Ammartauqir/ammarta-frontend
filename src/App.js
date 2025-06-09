import logo from './logo.svg';
import { useEffect, useState } from "react";
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import AboutMe from './components/Aboutme.jsx';
import AboutPage from './components/AboutPage.jsx';

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("http://localhost:5000/api/info")
      .then((res) => res.json())
      .then((data) => setData(data.message));
  }, []);

  return (
    <Router>
      <div className="bg-white dark:bg-black text-gray-950 dark:text-white duration-300">
        <Header />
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <AboutMe />

            </>
          } />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

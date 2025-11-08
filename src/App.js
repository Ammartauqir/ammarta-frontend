import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import AboutMe from './components/Aboutme.jsx';
import AboutPage from './components/AboutPage.jsx';
import BlogPage from './components/BlogPage.jsx';
import Projects from './components/Projects.jsx';
import ProjectsPage from './components/ProjectsPage.jsx';
import ContactPage from './components/ContactPage.jsx';
import GitHubSection from './components/GitHubSection.jsx';
import Footer from './components/Footer.jsx';
import BlogPost from './components/BlogPost.jsx';
import SandboxPage from './components/SandboxPage.jsx';

function App() {

  return (
    <Router>
      <div className="bg-white dark:bg-black text-gray-950 dark:text-white duration-300">
        <Header />
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <AboutMe />
              <Projects />
              <GitHubSection />
            </>
          } />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/blog/agentic-ai" element={<BlogPost />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/sandbox" element={<SandboxPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

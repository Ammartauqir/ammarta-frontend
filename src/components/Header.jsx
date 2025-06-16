import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";

const Header = () => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleHomeClick = (e) => {
    e.preventDefault();
    if (window.location.pathname === '/') {
      // If already on home page, scroll to top
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      // If on another page, navigate to home
      navigate('/');
    }
    setIsMenuOpen(false);
  };

  const handleAboutClick = () => {
    // First navigate to home if we're not there
    navigate('/');
    // Then scroll to about section after a small delay to ensure the page has loaded
    setTimeout(() => {
      const element = document.getElementById('about');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
    setIsMenuOpen(false);
  };

  const handleProjectsClick = () => {
    navigate('/');
    setTimeout(() => {
      const element = document.getElementById('projects');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
    setIsMenuOpen(false);
  };

  const handleBlogClick = () => {
    navigate('/blog');
    setIsMenuOpen(false);
  };

  const handleContactClick = () => {
    navigate('/contact');
    setIsMenuOpen(false);
  };

  const handleSandboxClick = () => {
    navigate('/sandbox');
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 w-full shadow z-50 duration-300 backdrop-blur-sm bg-white/80 dark:bg-zinc-900/80">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="text-xl font-bold hover:text-gray-600 dark:hover:text-gray-300">
          Muhammad Ammar Tauqir | Portfolio
        </Link>
        
        {/* Hamburger Menu Button */}
        <button
          className="md:hidden p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-zinc-800 transition-colors"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-4">
          <button onClick={handleHomeClick} className="hover:underline">
            Home
          </button>
          <span className="text-gray-300 dark:text-gray-600">|</span>
          <button onClick={handleAboutClick} className="hover:underline">
            About me
          </button>
          <span className="text-gray-300 dark:text-gray-600">|</span>
          <button onClick={handleProjectsClick} className="hover:underline">
            Projects
          </button>
          <span className="text-gray-300 dark:text-gray-600">|</span>
          <button onClick={handleBlogClick} className="hover:underline">
            Blog
          </button>
          <span className="text-gray-300 dark:text-gray-600">|</span>
          <button onClick={handleSandboxClick} className="hover:underline">
            Sandbox
          </button>
          <span className="text-gray-300 dark:text-gray-600">|</span>
          <button onClick={handleContactClick} className="hover:underline">
            Contact
          </button>
          <span className="text-gray-300 dark:text-gray-600">|</span>
          <ThemeToggle />
        </nav>

        {/* Mobile Navigation */}
        <div
          className={`md:hidden fixed top-[72px] left-0 w-full bg-white/95 dark:bg-zinc-900/95 backdrop-blur-sm shadow-lg transition-all duration-300 ease-in-out ${
            isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
          }`}
        >
          <nav className="flex flex-col p-4 space-y-2">
            <button onClick={handleHomeClick} className="hover:underline text-left py-1">
              Home
            </button>
            <div className="h-px bg-gray-200 dark:bg-gray-700"></div>
            <button onClick={handleAboutClick} className="hover:underline text-left py-1">
              About me
            </button>
            <div className="h-px bg-gray-200 dark:bg-gray-700"></div>
            <button onClick={handleProjectsClick} className="hover:underline text-left py-1">
              Projects
            </button>
            <div className="h-px bg-gray-200 dark:bg-gray-700"></div>
            <button onClick={handleBlogClick} className="hover:underline text-left py-1">
              Blog
            </button>
            <div className="h-px bg-gray-200 dark:bg-gray-700"></div>
            <button onClick={handleSandboxClick} className="hover:underline text-left py-1">
              Sandbox
            </button>
            <div className="h-px bg-gray-200 dark:bg-gray-700"></div>
            <button onClick={handleContactClick} className="hover:underline text-left py-1">
              Contact
            </button>
            <div className="h-px bg-gray-200 dark:bg-gray-700"></div>
            <div className="pt-1">
              <ThemeToggle />
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
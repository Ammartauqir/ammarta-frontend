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
        <nav className="hidden md:flex space-x-8">
          <button onClick={handleHomeClick} className="hover:underline">
            Home
          </button>
          <button onClick={handleAboutClick} className="hover:underline">
            About me
          </button>
          <button onClick={handleProjectsClick} className="hover:underline">
            Projects
          </button>
          <button onClick={handleBlogClick} className="hover:underline">
            Blog
          </button>
          <button onClick={handleContactClick} className="hover:underline">
            Contact
          </button>
          <ThemeToggle />
        </nav>

        {/* Mobile Navigation */}
        <div
          className={`md:hidden fixed top-[72px] left-0 w-full bg-white/95 dark:bg-zinc-900/95 backdrop-blur-sm shadow-lg transition-all duration-300 ease-in-out ${
            isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
          }`}
        >
          <nav className="flex flex-col p-4 space-y-4">
            <button onClick={handleHomeClick} className="hover:underline text-left">
              Home
            </button>
            <button onClick={handleAboutClick} className="hover:underline text-left">
              About me
            </button>
            <button onClick={handleProjectsClick} className="hover:underline text-left">
              Projects
            </button>
            <button onClick={handleBlogClick} className="hover:underline text-left">
              Blog
            </button>
            <button onClick={handleContactClick} className="hover:underline text-left">
              Contact
            </button>
            <div className="pt-2">
              <ThemeToggle />
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
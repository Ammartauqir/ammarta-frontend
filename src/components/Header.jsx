import React from "react";
import { Link, useNavigate } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";

const Header = () => {
  const navigate = useNavigate();

  const handleHomeClick = (e) => {
    e.preventDefault();
    if (window.location.pathname === '/') {
      // If already on home page, scroll to top
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      // If on another page, navigate to home
      navigate('/');
    }
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
  };

  return (
    <header className="fixed top-0 w-full shadow z-50 duration-300 backdrop-filter backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="text-xl font-bold hover:text-gray-600 dark:hover:text-gray-300">
          Muhammad Ammar Tauqir | Portfolio
        </Link>
        <nav className="space-x-8">
          <button onClick={handleHomeClick} className="hover:underline">
            Home
          </button>
          <button
            onClick={handleAboutClick} 
            className="hover:underline"
          >
            About me
          </button>
          <button
            onClick={() => {
              navigate('/');
              setTimeout(() => {
                const element = document.getElementById('projects');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }, 100);
            }}
            className="hover:underline"
          >
            Projects
          </button>
          <Link to="/blog" className="hover:underline">Blog</Link>
          <Link to="/contact" className="hover:underline">Contact</Link>
          <ThemeToggle />
        </nav>
      </div>
    </header>
  );
};

export default Header;
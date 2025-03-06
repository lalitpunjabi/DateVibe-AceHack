import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Heart, Menu, X, Moon, Sun, Wine, Music, LogIn, UserPlus } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  return (
    <nav className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-md shadow-sm sticky top-0 z-50">
      <div className="container-custom py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="relative">
              <Heart className="h-8 w-8 text-primary-600 transform group-hover:scale-110 transition-transform duration-300" fill="#ec4899" />
              <Wine className="h-4 w-4 text-secondary-500 absolute -bottom-1 -right-1 transform group-hover:rotate-12 transition-transform duration-300" />
              <Music className="h-4 w-4 text-secondary-500 absolute -top-1 -right-1 transform group-hover:-rotate-12 transition-transform duration-300" />
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-cursive font-bold text-primary-600 leading-none">DateVibe</span>
              <span className="text-xs text-gray-500 dark:text-gray-400">Perfect Moments</span>
            </div>
          </Link>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="font-medium hover:text-primary-600 transition-colors">Home</Link>
            <Link to="/venues" className="font-medium hover:text-primary-600 transition-colors">Venues</Link>
            <button 
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
              aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              {theme === 'dark' ? (
                <Sun className="h-5 w-5 text-yellow-400" />
              ) : (
                <Moon className="h-5 w-5 text-gray-600" />
              )}
            </button>
            <div className="flex items-center space-x-4">
              <Link to="/login" className="flex items-center font-medium hover:text-primary-600 transition-colors">
                <LogIn className="h-5 w-5 mr-1" />
                Log In
              </Link>
              <Link to="/signup" className="btn-primary flex items-center">
                <UserPlus className="h-5 w-5 mr-1" />
                Sign Up
              </Link>
            </div>
          </div>
          
          <div className="md:hidden flex items-center space-x-4">
            <button 
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
              aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              {theme === 'dark' ? (
                <Sun className="h-5 w-5 text-yellow-400" />
              ) : (
                <Moon className="h-5 w-5 text-gray-600" />
              )}
            </button>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
        
        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 py-4 border-t border-gray-200 dark:border-gray-700">
            <div className="flex flex-col space-y-4">
              <Link 
                to="/" 
                className="font-medium hover:text-primary-600 transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                to="/venues" 
                className="font-medium hover:text-primary-600 transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Venues
              </Link>
              <Link 
                to="/login" 
                className="font-medium hover:text-primary-600 transition-colors py-2 flex items-center"
                onClick={() => setIsMenuOpen(false)}
              >
                <LogIn className="h-5 w-5 mr-2" />
                Log In
              </Link>
              <Link 
                to="/signup" 
                className="btn-primary text-center flex items-center justify-center"
                onClick={() => setIsMenuOpen(false)}
              >
                <UserPlus className="h-5 w-5 mr-2" />
                Sign Up
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
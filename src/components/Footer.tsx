import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, Mail, Phone, Instagram, Facebook, Twitter, Wine, Music } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-50 dark:bg-gray-800 pt-12 pb-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <Link to="/" className="flex items-center space-x-3 group">
              <div className="relative">
                <Heart className="h-6 w-6 text-primary-600 transform group-hover:scale-110 transition-transform duration-300" fill="#ec4899" />
                <Wine className="h-3 w-3 text-secondary-500 absolute -bottom-1 -right-1 transform group-hover:rotate-12 transition-transform duration-300" />
                <Music className="h-3 w-3 text-secondary-500 absolute -top-1 -right-1 transform group-hover:-rotate-12 transition-transform duration-300" />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-cursive font-bold text-primary-600 leading-none">DateVibe</span>
                <span className="text-xs text-gray-500 dark:text-gray-400">Perfect Moments</span>
              </div>
            </Link>
            <p className="mt-4 text-sm text-gray-600 dark:text-gray-300">
              Creating unforgettable romantic experiences in Jaipur since 2023.
            </p>
            <div className="mt-6 flex space-x-4">
              <a href="#" className="text-gray-500 hover:text-primary-600 transition-colors">
                <Instagram size={20} />
                <span className="sr-only">Instagram</span>
              </a>
              <a href="#" className="text-gray-500 hover:text-primary-600 transition-colors">
                <Facebook size={20} />
                <span className="sr-only">Facebook</span>
              </a>
              <a href="#" className="text-gray-500 hover:text-primary-600 transition-colors">
                <Twitter size={20} />
                <span className="sr-only">Twitter</span>
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-900 dark:text-white">
              Quick Links
            </h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link to="/" className="text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/venues" className="text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                  Venues
                </Link>
              </li>
              <li>
                <a href="#" className="text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-900 dark:text-white">
              Legal
            </h3>
            <ul className="mt-4 space-y-2">
              <li>
                <a href="#" className="text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                  Cancellation Policy
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-900 dark:text-white">
              Contact Us
            </h3>
            <ul className="mt-4 space-y-2">
              <li className="flex items-start space-x-2">
                <Phone size={18} className="flex-shrink-0 mt-1 text-primary-600" />
                <span className="text-gray-600 dark:text-gray-300">+91 98765 43210</span>
              </li>
              <li className="flex items-start space-x-2">
                <Mail size={18} className="flex-shrink-0 mt-1 text-primary-600" />
                <span className="text-gray-600 dark:text-gray-300">contact@datevibe.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
          <p className="text-center text-sm text-gray-500 dark:text-gray-400">
            &copy; {new Date().getFullYear()} DateVibe. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
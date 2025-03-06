import React from 'react';
import { Link } from 'react-router-dom';

const Hero: React.FC = () => {
  return (
    <div className="relative bg-gradient-to-r from-primary-600 to-secondary-600 text-white">
      <div className="absolute inset-0 bg-black opacity-30"></div>
      <div className="container-custom relative py-20 md:py-32 flex flex-col items-center text-center">
        <h1 className="font-cursive text-4xl md:text-6xl lg:text-7xl mb-6">
          Create Unforgettable Moments
        </h1>
        <p className="text-lg md:text-xl max-w-2xl mb-8">
          Discover and book the most romantic venues in Jaipur. Customize your date experience and make memories that last a lifetime.
        </p>
        <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
          <Link to="/venues" className="btn bg-white text-primary-600 hover:bg-cream-50 hover:text-primary-700">
            Explore Venues
          </Link>
          <Link to="/venues" className="btn bg-transparent border-2 border-white hover:bg-white/10">
            Book Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
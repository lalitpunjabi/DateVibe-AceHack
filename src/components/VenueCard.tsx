import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Star, Leaf, Drumstick } from 'lucide-react';
import { Venue } from '../types';

interface VenueCardProps {
  venue: Venue;
}

const VenueCard: React.FC<VenueCardProps> = ({ venue }) => {
  return (
    <div className="card group">
      <div className="relative overflow-hidden h-48">
        <img 
          src={venue.images[0]} 
          alt={venue.name} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute top-2 right-2 bg-white dark:bg-gray-800 rounded-full px-2 py-1 flex items-center text-sm font-medium">
          <Star className="h-4 w-4 text-yellow-400 mr-1" fill="#facc15" />
          <span>{venue.rating}</span>
        </div>
        <div className="absolute top-2 left-2 flex gap-2">
          {venue.dietaryOptions.veg && (
            <div className="bg-green-500 text-white rounded-full p-1" title="Vegetarian">
              <Leaf className="h-4 w-4" />
            </div>
          )}
          {venue.dietaryOptions.nonVeg && (
            <div className="bg-red-500 text-white rounded-full p-1" title="Non-Vegetarian">
              <Drumstick className="h-4 w-4" />
            </div>
          )}
          {venue.dietaryOptions.vegan && (
            <div className="bg-emerald-500 text-white rounded-full p-1" title="Vegan">
              <Leaf className="h-4 w-4" fill="currentColor" />
            </div>
          )}
        </div>
      </div>
      <div className="p-4">
        <h3 className="font-serif text-xl font-semibold mb-2">{venue.name}</h3>
        <p className="text-gray-600 dark:text-gray-300 text-sm mb-3 line-clamp-2">{venue.description}</p>
        
        <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-2">
          <MapPin className="h-4 w-4 mr-1" />
          <a 
            href={venue.mapLink} 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:text-primary-600 transition-colors"
          >
            View on map
          </a>
        </div>
        
        <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-3">
          <Phone className="h-4 w-4 mr-1" />
          <a 
            href={`tel:${venue.phone}`}
            className="hover:text-primary-600 transition-colors"
          >
            {venue.phone}
          </a>
        </div>
        
        <div className="flex items-center justify-between">
          <span className="text-primary-600 font-medium">
            ₹{venue.averagePrice} avg
          </span>
          <Link to={`/booking/${venue.id}`} className="btn-primary py-1.5 px-3">
            Book Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default VenueCard;
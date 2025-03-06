import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import BookingForm from '../components/BookingForm';
import { venues } from '../data/venues';

const BookingPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const venue = venues.find(v => v.id === id);
  
  if (!venue) {
    return (
      <div className="section">
        <div className="container-custom text-center">
          <h2 className="heading-2 mb-4">Venue Not Found</h2>
          <p className="mb-6">The venue you're looking for doesn't exist or has been removed.</p>
          <Link to="/venues" className="btn-primary">
            Browse All Venues
          </Link>
        </div>
      </div>
    );
  }
  
  return (
    <div className="section">
      <div className="container-custom">
        <Link to={`/venues/${id}`} className="inline-flex items-center text-primary-600 hover:text-primary-700 mb-6">
          <ArrowLeft className="h-4 w-4 mr-1" />
          Back to Venue
        </Link>
        
        <h1 className="heading-1 mb-8">Book Your Date at {venue.name}</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <BookingForm venue={venue} />
          </div>
          
          <div className="lg:col-span-1">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden sticky top-24">
              <img 
                src={venue.images[0]} 
                alt={venue.name} 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h2 className="font-serif text-xl font-semibold mb-2">{venue.name}</h2>
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">{venue.location}</p>
                
                <div className="space-y-3 mb-6">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600 dark:text-gray-400">Base Price:</span>
                    <span>₹{venue.averagePrice}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600 dark:text-gray-400">Serves Alcohol:</span>
                    <span>{venue.servesAlcohol ? 'Yes' : 'No'}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600 dark:text-gray-400">Opening Hours:</span>
                    <span>{venue.openingHours}</span>
                  </div>
                </div>
                
                <div className="border-t border-gray-200 dark:border-gray-700 pt-4">
                  <h3 className="font-medium mb-2">Booking Policy:</h3>
                  <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
                    <li>• Advance booking required</li>
                    <li>• Free cancellation 24 hours before</li>
                    <li>• Special requests subject to availability</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingPage;
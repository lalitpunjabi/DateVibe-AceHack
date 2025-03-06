import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Star, Clock, Calendar, Leaf, Drumstick } from 'lucide-react';
import { venues } from '../data/venues';

const VenuePage: React.FC = () => {
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
    <div>
      {/* Hero Section */}
      <div className="relative h-80 md:h-96">
        <img 
          src={venue.images[0]} 
          alt={venue.name} 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
          <div className="container-custom">
            <h1 className="text-white text-3xl md:text-4xl font-serif font-bold mb-2">
              {venue.name}
            </h1>
            <div className="flex items-center text-white mb-2">
              <Star className="h-5 w-5 text-yellow-400 mr-1" fill="#facc15" />
              <span className="mr-2">{venue.rating}</span>
              <span className="text-gray-200">({venue.reviews} reviews)</span>
            </div>
            <div className="flex items-center text-white">
              <MapPin className="h-5 w-5 mr-1" />
              <span>{venue.location}</span>
            </div>
          </div>
        </div>
      </div>
      
      <div className="section">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              {/* Description */}
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-8">
                <h2 className="heading-3 mb-4">About {venue.name}</h2>
                <p className="text-gray-700 dark:text-gray-300 mb-6">
                  {venue.fullDescription || venue.description}
                </p>
                
                {/* Dietary Options */}
                <div className="flex gap-4 mb-6">
                  {venue.dietaryOptions.veg && (
                    <div className="flex items-center">
                      <div className="w-10 h-10 rounded-full bg-green-100 dark:bg-green-900 flex items-center justify-center mr-3">
                        <Leaf className="h-5 w-5 text-green-600" />
                      </div>
                      <div>
                        <p className="font-medium">Vegetarian</p>
                        <p className="text-sm text-gray-500">Options Available</p>
                      </div>
                    </div>
                  )}
                  
                  {venue.dietaryOptions.nonVeg && (
                    <div className="flex items-center">
                      <div className="w-10 h-10 rounded-full bg-red-100 dark:bg-red-900 flex items-center justify-center mr-3">
                        <Drumstick className="h-5 w-5 text-red-600" />
                      </div>
                      <div>
                        <p className="font-medium">Non-Vegetarian</p>
                        <p className="text-sm text-gray-500">Options Available</p>
                      </div>
                    </div>
                  )}
                  
                  {venue.dietaryOptions.vegan && (
                    <div className="flex items-center">
                      <div className="w-10 h-10 rounded-full bg-emerald-100 dark:bg-emerald-900 flex items-center justify-center mr-3">
                        <Leaf className="h-5 w-5 text-emerald-600" fill="currentColor" />
                      </div>
                      <div>
                        <p className="font-medium">Vegan</p>
                        <p className="text-sm text-gray-500">Options Available</p>
                      </div>
                    </div>
                  )}
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-primary-100 dark:bg-primary-900 flex items-center justify-center mr-3">
                      <Clock className="h-5 w-5 text-primary-600" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 dark:text-gray-400">Opening Hours</p>
                      <p className="font-medium">{venue.openingHours}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-primary-100 dark:bg-primary-900 flex items-center justify-center mr-3">
                      <Phone className="h-5 w-5 text-primary-600" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 dark:text-gray-400">Phone</p>
                      <a href={`tel:${venue.phone}`} className="font-medium hover:text-primary-600">
                        {venue.phone}
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-primary-100 dark:bg-primary-900 flex items-center justify-center mr-3">
                      <Mail className="h-5 w-5 text-primary-600" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 dark:text-gray-400">Email</p>
                      <a href={`mailto:${venue.email}`} className="font-medium hover:text-primary-600">
                        {venue.email}
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-primary-100 dark:bg-primary-900 flex items-center justify-center mr-3">
                      <Calendar className="h-5 w-5 text-primary-600" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 dark:text-gray-400">Average Price</p>
                      <p className="font-medium">₹{venue.averagePrice} per couple</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Gallery */}
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-8">
                <h2 className="heading-3 mb-4">Gallery</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {venue.images.map((image, index) => (
                    <div key={index} className="aspect-square overflow-hidden rounded-lg">
                      <img 
                        src={image} 
                        alt={`${venue.name} - Image ${index + 1}`} 
                        className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Map */}
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
                <h2 className="heading-3 mb-4">Location</h2>
                <div className="aspect-video bg-gray-200 dark:bg-gray-700 rounded-lg overflow-hidden mb-4">
                  <iframe 
                    src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&q=${encodeURIComponent(venue.name + ' ' + venue.location)}`}
                    width="100%" 
                    height="100%" 
                    style={{ border: 0 }} 
                    allowFullScreen 
                    loading="lazy"
                    title={`Map of ${venue.name}`}
                  ></iframe>
                </div>
                <p className="text-gray-700 dark:text-gray-300">
                  {venue.location}
                </p>
                <a 
                  href={venue.mapLink} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="inline-block mt-2 text-primary-600 hover:text-primary-700 font-medium"
                >
                  Get Directions
                </a>
              </div>
            </div>
            
            {/* Booking Card */}
            <div className="lg:col-span-1">
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 sticky top-24">
                <h2 className="heading-3 mb-4">Book This Venue</h2>
                <p className="text-gray-700 dark:text-gray-300 mb-6">
                  Customize your date experience and create unforgettable memories at {venue.name}.
                </p>
                
                <div className="mb-6 p-4 bg-cream-50 dark:bg-gray-700 rounded-lg">
                  <div className="flex justify-between items-center">
                    <span className="font-medium">Starting from:</span>
                    <span className="text-xl font-bold text-primary-600">₹{venue.averagePrice}</span>
                  </div>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
                    Price per couple, excluding customizations
                  </p>
                </div>
                
                <Link 
                  to={`/booking/${venue.id}`} 
                  className="w-full btn-primary py-3 text-center block"
                >
                  Book Now
                </Link>
                
                <div className="mt-6 text-sm text-gray-500 dark:text-gray-400">
                  <p className="mb-2">• No payment required to book</p>
                  <p className="mb-2">• Free cancellation 24 hours before your date</p>
                  <p>• Customizable options available</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VenuePage;
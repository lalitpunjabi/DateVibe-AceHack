import React, { useState, useEffect } from 'react';
import { format } from 'date-fns';
import { Calendar, Clock, Music, Utensils, Wine, Coffee, Sparkles } from 'lucide-react';
import { Venue } from '../types';

interface BookingFormProps {
  venue: Venue;
}

interface BookingOptions {
  date: string;
  time: string;
  musicGenre: string;
  foodType: string;
  decoration: string;
  drinks: string;
  diningStyle: string;
  tableType: string;
}

const BookingForm: React.FC<BookingFormProps> = ({ venue }) => {
  const [bookingOptions, setBookingOptions] = useState<BookingOptions>({
    date: format(new Date(), 'yyyy-MM-dd'),
    time: '19:00',
    musicGenre: 'Romantic',
    foodType: 'Indian',
    decoration: 'Candles',
    drinks: venue.servesAlcohol ? 'Alcoholic' : 'Non-Alcoholic',
    diningStyle: 'Indoor',
    tableType: 'Couple Table',
  });
  
  const [totalPrice, setTotalPrice] = useState(venue.averagePrice);
  
  // Calculate price based on selections
  useEffect(() => {
    let price = venue.averagePrice;
    
    // Add costs for different options
    if (bookingOptions.musicGenre === 'Live Band') price += 1000;
    if (bookingOptions.decoration === 'Themed Decor') price += 1500;
    else if (bookingOptions.decoration === 'Flowers') price += 800;
    else if (bookingOptions.decoration === 'Balloons') price += 500;
    
    if (bookingOptions.drinks === 'Alcoholic' && venue.servesAlcohol) price += 1200;
    
    if (bookingOptions.diningStyle === 'Private Cabin') price += 2000;
    else if (bookingOptions.diningStyle === 'Rooftop') price += 1000;
    
    if (bookingOptions.tableType === 'Private Booth') price += 800;
    
    setTotalPrice(price);
  }, [bookingOptions, venue.averagePrice, venue.servesAlcohol]);
  
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>) => {
    const { name, value } = e.target;
    setBookingOptions(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Booking submitted successfully! We will contact you shortly to confirm your reservation.');
  };
  
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
      <h2 className="font-serif text-2xl font-semibold mb-6">Customize Your Date</h2>
      
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Date & Time */}
          <div>
            <label htmlFor="date" className="block text-sm font-medium mb-2 flex items-center">
              <Calendar className="h-4 w-4 mr-2" />
              Date
            </label>
            <input
              type="date"
              id="date"
              name="date"
              value={bookingOptions.date}
              onChange={handleChange}
              min={format(new Date(), 'yyyy-MM-dd')}
              className="input"
              required
            />
          </div>
          
          <div>
            <label htmlFor="time" className="block text-sm font-medium mb-2 flex items-center">
              <Clock className="h-4 w-4 mr-2" />
              Time
            </label>
            <select
              id="time"
              name="time"
              value={bookingOptions.time}
              onChange={handleChange}
              className="select"
              required
            >
              {['17:00', '17:30', '18:00', '18:30', '19:00', '19:30', '20:00', '20:30', '21:00', '21:30'].map(time => (
                <option key={time} value={time}>{time}</option>
              ))}
            </select>
          </div>
          
          {/* Music & Food */}
          <div>
            <label htmlFor="musicGenre" className="block text-sm font-medium mb-2 flex items-center">
              <Music className="h-4 w-4 mr-2" />
              Music Genre
            </label>
            <select
              id="musicGenre"
              name="musicGenre"
              value={bookingOptions.musicGenre}
              onChange={handleChange}
              className="select"
            >
              {['Romantic', 'Jazz', 'Pop', 'Live Band'].map(genre => (
                <option key={genre} value={genre}>{genre}</option>
              ))}
            </select>
          </div>
          
          <div>
            <label htmlFor="foodType" className="block text-sm font-medium mb-2 flex items-center">
              <Utensils className="h-4 w-4 mr-2" />
              Food Type
            </label>
            <select
              id="foodType"
              name="foodType"
              value={bookingOptions.foodType}
              onChange={handleChange}
              className="select"
            >
              {['Indian', 'Italian', 'Continental'].map(type => (
                <option key={type} value={type}>{type}</option>
              ))}
            </select>
          </div>
          
          {/* Decoration & Drinks */}
          <div>
            <label htmlFor="decoration" className="block text-sm font-medium mb-2 flex items-center">
              <Sparkles className="h-4 w-4 mr-2" />
              Decoration
            </label>
            <select
              id="decoration"
              name="decoration"
              value={bookingOptions.decoration}
              onChange={handleChange}
              className="select"
            >
              {['Candles', 'Flowers', 'Balloons', 'Themed Decor'].map(decor => (
                <option key={decor} value={decor}>{decor}</option>
              ))}
            </select>
          </div>
          
          <div>
            <label htmlFor="drinks" className="block text-sm font-medium mb-2 flex items-center">
              {bookingOptions.drinks === 'Alcoholic' ? (
                <Wine className="h-4 w-4 mr-2" />
              ) : (
                <Coffee className="h-4 w-4 mr-2" />
              )}
              Drinks
            </label>
            <select
              id="drinks"
              name="drinks"
              value={bookingOptions.drinks}
              onChange={handleChange}
              className="select"
              disabled={!venue.servesAlcohol}
            >
              <option value="Non-Alcoholic">Non-Alcoholic</option>
              {venue.servesAlcohol && (
                <option value="Alcoholic">Alcoholic</option>
              )}
            </select>
            {!venue.servesAlcohol && (
              <p className="text-xs text-gray-500 mt-1">This venue doesn't serve alcohol</p>
            )}
          </div>
          
          {/* Dining Style & Table Type */}
          <div>
            <label htmlFor="diningStyle" className="block text-sm font-medium mb-2">
              Dining Style
            </label>
            <select
              id="diningStyle"
              name="diningStyle"
              value={bookingOptions.diningStyle}
              onChange={handleChange}
              className="select"
            >
              {['Indoor', 'Rooftop', 'Garden', 'Private Cabin'].map(style => (
                <option key={style} value={style}>{style}</option>
              ))}
            </select>
          </div>
          
          <div>
            <label htmlFor="tableType" className="block text-sm font-medium mb-2">
              Table Type
            </label>
            <select
              id="tableType"
              name="tableType"
              value={bookingOptions.tableType}
              onChange={handleChange}
              className="select"
            >
              {['Couple Table', 'Sofa Seating', 'Private Booth'].map(type => (
                <option key={type} value={type}>{type}</option>
              ))}
            </select>
          </div>
        </div>
        
        {/* Price Summary */}
        <div className="mt-8 p-4 bg-cream-50 dark:bg-gray-700 rounded-lg">
          <div className="flex justify-between items-center">
            <span className="font-medium">Total Price:</span>
            <span className="text-xl font-bold text-primary-600">₹{totalPrice}</span>
          </div>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
            Includes venue charges, customizations, and taxes
          </p>
        </div>
        
        <button type="submit" className="mt-6 w-full btn-primary py-3">
          Confirm Booking
        </button>
      </form>
    </div>
  );
};

export default BookingForm;
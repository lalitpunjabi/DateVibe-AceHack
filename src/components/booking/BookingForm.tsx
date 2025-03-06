import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { User, Mail, Phone, Calendar, Clock, Users, MessageSquare } from 'lucide-react';
import { BookingFormData, Venue } from '../../types';

interface BookingFormProps {
  venue: Venue;
}

const BookingForm: React.FC<BookingFormProps> = ({ venue }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState<BookingFormData>({
    name: '',
    email: '',
    phone: '',
    age: 0,
    date: '',
    time: '',
    numberOfGuests: 2,
    specialRequests: ''
  });

  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    // Basic validation
    if (!formData.name || !formData.email || !formData.phone || !formData.date || !formData.time) {
      setError('Please fill in all required fields');
      return;
    }

    try {
      // Here you would typically make an API call to create the booking
      // For now, we'll just simulate success and navigate to the confirmation page
      const bookingId = 'BOOK' + Math.random().toString(36).substr(2, 9).toUpperCase();
      navigate('/booking/confirmation', { 
        state: { 
          booking: {
            ...formData,
            id: bookingId,
            venue,
            totalAmount: venue.averagePrice * formData.numberOfGuests,
            status: 'confirmed',
            createdAt: new Date().toISOString()
          }
        }
      });
    } catch (err) {
      setError('Failed to create booking. Please try again.');
    }
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
      <h2 className="heading-3 mb-6">Book Your Experience</h2>

      {error && (
        <div className="bg-red-50 dark:bg-red-900/50 text-red-600 dark:text-red-200 p-3 rounded-md mb-6">
          {error}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium mb-2">
              Full Name *
            </label>
            <div className="relative">
              <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                required
                id="name"
                name="name"
                type="text"
                value={formData.name}
                onChange={handleChange}
                className="input pl-10"
                placeholder="Enter your full name"
              />
            </div>
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-2">
              Email Address *
            </label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                required
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                className="input pl-10"
                placeholder="Enter your email"
              />
            </div>
          </div>

          <div>
            <label htmlFor="phone" className="block text-sm font-medium mb-2">
              Phone Number *
            </label>
            <div className="relative">
              <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                required
                id="phone"
                name="phone"
                type="tel"
                value={formData.phone}
                onChange={handleChange}
                className="input pl-10"
                placeholder="Enter your phone number"
              />
            </div>
          </div>

          <div>
            <label htmlFor="age" className="block text-sm font-medium mb-2">
              Age *
            </label>
            <input
              required
              id="age"
              name="age"
              type="number"
              value={formData.age}
              onChange={handleChange}
              className="input"
              placeholder="Enter your age"
              min="18"
            />
          </div>

          <div>
            <label htmlFor="date" className="block text-sm font-medium mb-2">
              Date *
            </label>
            <div className="relative">
              <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                required
                id="date"
                name="date"
                type="date"
                value={formData.date}
                onChange={handleChange}
                className="input pl-10"
                min={new Date().toISOString().split('T')[0]}
              />
            </div>
          </div>

          <div>
            <label htmlFor="time" className="block text-sm font-medium mb-2">
              Time *
            </label>
            <div className="relative">
              <Clock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                required
                id="time"
                name="time"
                type="time"
                value={formData.time}
                onChange={handleChange}
                className="input pl-10"
              />
            </div>
          </div>

          <div>
            <label htmlFor="numberOfGuests" className="block text-sm font-medium mb-2">
              Number of Guests
            </label>
            <div className="relative">
              <Users className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <select
                id="numberOfGuests"
                name="numberOfGuests"
                value={formData.numberOfGuests}
                onChange={handleChange}
                className="input pl-10"
              >
                {[2, 3, 4, 5, 6].map(num => (
                  <option key={num} value={num}>{num} guests</option>
                ))}
              </select>
            </div>
          </div>
        </div>

        <div>
          <label htmlFor="specialRequests" className="block text-sm font-medium mb-2">
            Special Requests
          </label>
          <div className="relative">
            <MessageSquare className="absolute left-3 top-3 text-gray-400" size={20} />
            <textarea
              id="specialRequests"
              name="specialRequests"
              value={formData.specialRequests}
              onChange={handleChange}
              className="input pl-10 h-32 resize-none"
              placeholder="Any special requests or preferences?"
            />
          </div>
        </div>

        <div className="bg-cream-50 dark:bg-gray-700 p-4 rounded-lg">
          <div className="flex justify-between items-center">
            <span className="font-medium">Total Amount:</span>
            <span className="text-xl font-bold text-primary-600">
              ₹{venue.averagePrice * formData.numberOfGuests}
            </span>
          </div>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
            * Final amount may vary based on additional services and customizations
          </p>
        </div>

        <button type="submit" className="w-full btn-primary py-3">
          Confirm Booking
        </button>
      </form>
    </div>
  );
};

export default BookingForm; 
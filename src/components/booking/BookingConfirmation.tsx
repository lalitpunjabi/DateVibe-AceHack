import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import { Check, Calendar, Clock, Users, MapPin, Phone, Mail, Download } from 'lucide-react';

const BookingConfirmation: React.FC = () => {
  const location = useLocation();
  const { booking } = location.state || {};

  if (!booking) {
    return (
      <div className="section">
        <div className="container-custom text-center">
          <h2 className="heading-2 mb-4">Booking Not Found</h2>
          <p className="mb-6">We couldn't find the booking details you're looking for.</p>
          <Link to="/venues" className="btn-primary">
            Browse Venues
          </Link>
        </div>
      </div>
    );
  }

  const handleDownloadReceipt = () => {
    // In a real application, this would generate a PDF receipt
    // For now, we'll just log the booking details
    console.log('Downloading receipt for booking:', booking);
  };

  return (
    <div className="section bg-cream-50 dark:bg-gray-900">
      <div className="container-custom max-w-3xl">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
          {/* Header */}
          <div className="bg-primary-600 text-white p-6 text-center">
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
              <Check className="h-8 w-8 text-primary-600" />
            </div>
            <h2 className="text-2xl font-bold mb-2">Booking Confirmed!</h2>
            <p>Your romantic experience has been successfully booked</p>
          </div>

          {/* Booking Details */}
          <div className="p-6">
            <div className="mb-8">
              <div className="flex justify-between items-center mb-4">
                <h3 className="heading-3">Booking Details</h3>
                <span className="text-sm bg-green-100 text-green-800 px-3 py-1 rounded-full">
                  {booking.status}
                </span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-start space-x-3">
                  <Calendar className="h-5 w-5 text-primary-600 flex-shrink-0" />
                  <div>
                    <p className="font-medium">Date</p>
                    <p className="text-gray-600 dark:text-gray-300">{booking.date}</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Clock className="h-5 w-5 text-primary-600 flex-shrink-0" />
                  <div>
                    <p className="font-medium">Time</p>
                    <p className="text-gray-600 dark:text-gray-300">{booking.time}</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Users className="h-5 w-5 text-primary-600 flex-shrink-0" />
                  <div>
                    <p className="font-medium">Number of Guests</p>
                    <p className="text-gray-600 dark:text-gray-300">{booking.numberOfGuests} guests</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <MapPin className="h-5 w-5 text-primary-600 flex-shrink-0" />
                  <div>
                    <p className="font-medium">Booking ID</p>
                    <p className="text-gray-600 dark:text-gray-300">{booking.id}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Venue Details */}
            <div className="mb-8">
              <h3 className="heading-3 mb-4">Venue Information</h3>
              <div className="bg-cream-50 dark:bg-gray-700 rounded-lg p-4">
                <h4 className="font-serif text-xl font-semibold mb-2">{booking.venue.name}</h4>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{booking.venue.description}</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-center space-x-2">
                    <MapPin className="h-5 w-5 text-primary-600" />
                    <span>{booking.venue.location}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Phone className="h-5 w-5 text-primary-600" />
                    <span>{booking.venue.phone}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Customer Details */}
            <div className="mb-8">
              <h3 className="heading-3 mb-4">Customer Information</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-start space-x-3">
                  <Users className="h-5 w-5 text-primary-600 flex-shrink-0" />
                  <div>
                    <p className="font-medium">Name</p>
                    <p className="text-gray-600 dark:text-gray-300">{booking.name}</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Mail className="h-5 w-5 text-primary-600 flex-shrink-0" />
                  <div>
                    <p className="font-medium">Email</p>
                    <p className="text-gray-600 dark:text-gray-300">{booking.email}</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Phone className="h-5 w-5 text-primary-600 flex-shrink-0" />
                  <div>
                    <p className="font-medium">Phone</p>
                    <p className="text-gray-600 dark:text-gray-300">{booking.phone}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Payment Details */}
            <div className="mb-8">
              <h3 className="heading-3 mb-4">Payment Summary</h3>
              <div className="bg-cream-50 dark:bg-gray-700 rounded-lg p-4">
                <div className="flex justify-between items-center mb-2">
                  <span>Base Price (per person)</span>
                  <span>₹{booking.venue.averagePrice}</span>
                </div>
                <div className="flex justify-between items-center mb-2">
                  <span>Number of Guests</span>
                  <span>× {booking.numberOfGuests}</span>
                </div>
                <div className="border-t border-gray-200 dark:border-gray-600 my-2 pt-2">
                  <div className="flex justify-between items-center text-lg font-semibold">
                    <span>Total Amount</span>
                    <span className="text-primary-600">₹{booking.totalAmount}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={handleDownloadReceipt}
                className="btn-outline flex-1 flex items-center justify-center"
              >
                <Download className="h-5 w-5 mr-2" />
                Download Receipt
              </button>
              <Link to="/venues" className="btn-primary flex-1 text-center">
                Book Another Venue
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingConfirmation; 
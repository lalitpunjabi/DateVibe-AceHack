import React from 'react';
import { Link } from 'react-router-dom';
import { Star, Heart, Clock, Calendar, Sparkles, Utensils, Music, Gift } from 'lucide-react';
import Hero from '../components/Hero';
import VenueCard from '../components/VenueCard';
import { venues } from '../data/venues';

const HomePage: React.FC = () => {
  // Get top 6 venues by rating
  const topVenues = [...venues]
    .sort((a, b) => b.rating - a.rating)
    .slice(0, 6);
  
  return (
    <div>
      <Hero />
      
      {/* Features Section */}
      <section className="section bg-cream-50 dark:bg-gray-900">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="heading-2 mb-4">Why Choose DateVibe?</h2>
            <p className="max-w-2xl mx-auto text-gray-600 dark:text-gray-300">
              We curate the most romantic venues in Jaipur and help you customize your date experience to create unforgettable memories.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md transform hover:-translate-y-2 transition-transform duration-300">
              <div className="w-16 h-16 mx-auto mb-4 bg-primary-100 dark:bg-primary-900 rounded-full flex items-center justify-center">
                <Heart className="h-8 w-8 text-primary-600" />
              </div>
              <h3 className="font-serif text-xl font-semibold mb-2">Curated Selection</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Handpicked romantic venues that guarantee a perfect ambiance for your special moments.
              </p>
            </div>
            
            <div className="text-center p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md transform hover:-translate-y-2 transition-transform duration-300">
              <div className="w-16 h-16 mx-auto mb-4 bg-primary-100 dark:bg-primary-900 rounded-full flex items-center justify-center">
                <Sparkles className="h-8 w-8 text-primary-600" />
              </div>
              <h3 className="font-serif text-xl font-semibold mb-2">Special Touches</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Add personalized decorations, music, and surprises to make your date truly unique.
              </p>
            </div>
            
            <div className="text-center p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md transform hover:-translate-y-2 transition-transform duration-300">
              <div className="w-16 h-16 mx-auto mb-4 bg-primary-100 dark:bg-primary-900 rounded-full flex items-center justify-center">
                <Clock className="h-8 w-8 text-primary-600" />
              </div>
              <h3 className="font-serif text-xl font-semibold mb-2">Easy Booking</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Simple and quick reservation process with instant confirmation and reminders.
              </p>
            </div>
            
            <div className="text-center p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md transform hover:-translate-y-2 transition-transform duration-300">
              <div className="w-16 h-16 mx-auto mb-4 bg-primary-100 dark:bg-primary-900 rounded-full flex items-center justify-center">
                <Gift className="h-8 w-8 text-primary-600" />
              </div>
              <h3 className="font-serif text-xl font-semibold mb-2">Special Offers</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Exclusive deals and packages to make your romantic experience even more special.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Top Venues Section */}
      <section className="section">
        <div className="container-custom">
          <div className="flex justify-between items-center mb-12">
            <div>
              <h2 className="heading-2 mb-2">Top Romantic Venues</h2>
              <p className="text-gray-600 dark:text-gray-300">
                Discover our highest-rated romantic destinations
              </p>
            </div>
            <Link to="/venues" className="btn-outline">
              View All Venues
            </Link>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {topVenues.map(venue => (
              <VenueCard key={venue.id} venue={venue} />
            ))}
          </div>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <section className="section bg-gradient-to-br from-primary-600 to-secondary-600 text-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="heading-2 mb-4">Love Stories</h2>
            <p className="max-w-2xl mx-auto">
              Hear from couples who created their perfect moments with DateVibe
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-md p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <img
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330"
                  alt="Profile"
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-semibold">Priya & Rahul</h4>
                  <div className="flex items-center">
                    <Star className="h-4 w-4 text-yellow-400" fill="#facc15" />
                    <Star className="h-4 w-4 text-yellow-400" fill="#facc15" />
                    <Star className="h-4 w-4 text-yellow-400" fill="#facc15" />
                    <Star className="h-4 w-4 text-yellow-400" fill="#facc15" />
                    <Star className="h-4 w-4 text-yellow-400" fill="#facc15" />
                  </div>
                </div>
              </div>
              <p className="italic">
                "DateVibe helped us plan the perfect anniversary dinner. The venue was exactly what we wanted, and the special decorations made it magical!"
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-md p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d"
                  alt="Profile"
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-semibold">Arjun & Nisha</h4>
                  <div className="flex items-center">
                    <Star className="h-4 w-4 text-yellow-400" fill="#facc15" />
                    <Star className="h-4 w-4 text-yellow-400" fill="#facc15" />
                    <Star className="h-4 w-4 text-yellow-400" fill="#facc15" />
                    <Star className="h-4 w-4 text-yellow-400" fill="#facc15" />
                    <Star className="h-4 w-4 text-yellow-400" fill="#facc15" />
                  </div>
                </div>
              </div>
              <p className="italic">
                "The booking process was so smooth, and the venue exceeded our expectations. It was the perfect setting for our first date!"
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-md p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <img
                  src="https://images.unsplash.com/photo-1463453091185-61582044d556"
                  alt="Profile"
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-semibold">Vikram & Meera</h4>
                  <div className="flex items-center">
                    <Star className="h-4 w-4 text-yellow-400" fill="#facc15" />
                    <Star className="h-4 w-4 text-yellow-400" fill="#facc15" />
                    <Star className="h-4 w-4 text-yellow-400" fill="#facc15" />
                    <Star className="h-4 w-4 text-yellow-400" fill="#facc15" />
                    <Star className="h-4 w-4 text-yellow-400" fill="#facc15" />
                  </div>
                </div>
              </div>
              <p className="italic">
                "Thanks to DateVibe, I found the perfect spot to propose. The staff helped me plan everything, and it was absolutely perfect!"
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="section bg-cream-50 dark:bg-gray-900">
        <div className="container-custom text-center">
          <h2 className="heading-2 mb-6">Ready to Create Your Perfect Date?</h2>
          <p className="text-lg max-w-2xl mx-auto mb-8 text-gray-600 dark:text-gray-300">
            Discover the most romantic venues in Jaipur and create memories that will last a lifetime.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/venues" className="btn-primary">
              Browse Venues
            </Link>
            <Link to="/venues" className="btn-outline">
              Learn More
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
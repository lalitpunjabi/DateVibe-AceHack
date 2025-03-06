import React, { useState, useEffect } from 'react';
import VenueCard from '../components/VenueCard';
import FilterSidebar from '../components/FilterSidebar';
import { venues } from '../data/venues';
import { Venue } from '../types';

const ListingPage: React.FC = () => {
  const [filters, setFilters] = useState({
    alcohol: 'all',
    rating: 0,
    dietary: 'all'
  });
  
  const [sortBy, setSortBy] = useState('popularity');
  const [filteredVenues, setFilteredVenues] = useState<Venue[]>(venues);
  
  useEffect(() => {
    let result = [...venues];
    
    // Apply filters
    if (filters.alcohol !== 'all') {
      result = result.filter(venue => 
        filters.alcohol === 'yes' ? venue.servesAlcohol : !venue.servesAlcohol
      );
    }
    
    if (filters.rating > 0) {
      result = result.filter(venue => venue.rating >= filters.rating);
    }

    // Apply dietary filters
    if (filters.dietary !== 'all') {
      result = result.filter(venue => venue.dietaryOptions[filters.dietary as keyof typeof venue.dietaryOptions]);
    }
    
    // Apply sorting
    switch (sortBy) {
      case 'priceAsc':
        result.sort((a, b) => a.averagePrice - b.averagePrice);
        break;
      case 'priceDesc':
        result.sort((a, b) => b.averagePrice - a.averagePrice);
        break;
      case 'rating':
        result.sort((a, b) => b.rating - a.rating);
        break;
      case 'proximity':
        // In a real app, this would use geolocation
        // For now, we'll just use a random order as a placeholder
        result.sort(() => Math.random() - 0.5);
        break;
      case 'popularity':
      default:
        // Assuming popularity is based on a combination of rating and reviews
        result.sort((a, b) => b.rating * b.reviews - a.rating * a.reviews);
        break;
    }
    
    setFilteredVenues(result);
  }, [filters, sortBy]);
  
  return (
    <div className="section bg-gray-50 dark:bg-gray-900">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <FilterSidebar 
              filters={filters} 
              setFilters={setFilters}
              sortBy={sortBy}
              setSortBy={setSortBy}
            />
          </div>
          
          {/* Venue Grid */}
          <div className="lg:col-span-3">
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {filteredVenues.map(venue => (
                <VenueCard key={venue.id} venue={venue} />
              ))}
            </div>
            
            {filteredVenues.length === 0 && (
              <div className="text-center py-12">
                <h3 className="text-xl font-semibold mb-2">No venues found</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Try adjusting your filters to see more options
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListingPage;
import React from 'react';
import { Star } from 'lucide-react';

interface FilterSidebarProps {
  filters: {
    alcohol: string;
    rating: number;
    dietary: string;
  };
  setFilters: React.Dispatch<React.SetStateAction<{
    alcohol: string;
    rating: number;
    dietary: string;
  }>>;
  sortBy: string;
  setSortBy: React.Dispatch<React.SetStateAction<string>>;
}

const FilterSidebar: React.FC<FilterSidebarProps> = ({ 
  filters, 
  setFilters, 
  sortBy, 
  setSortBy 
}) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
      <h2 className="text-xl font-semibold mb-6">Filters</h2>
      
      {/* Dietary Preferences */}
      <div className="mb-8">
        <h3 className="font-medium mb-3">Dietary Preferences</h3>
        <div className="space-y-2">
          <label className="flex items-center">
            <input
              type="radio"
              name="dietary"
              value="all"
              checked={filters.dietary === 'all'}
              onChange={(e) => setFilters(prev => ({ ...prev, dietary: e.target.value }))}
              className="mr-2"
            />
            <span>All</span>
          </label>
          <label className="flex items-center">
            <input
              type="radio"
              name="dietary"
              value="veg"
              checked={filters.dietary === 'veg'}
              onChange={(e) => setFilters(prev => ({ ...prev, dietary: e.target.value }))}
              className="mr-2"
            />
            <span>Vegetarian</span>
          </label>
          <label className="flex items-center">
            <input
              type="radio"
              name="dietary"
              value="nonVeg"
              checked={filters.dietary === 'nonVeg'}
              onChange={(e) => setFilters(prev => ({ ...prev, dietary: e.target.value }))}
              className="mr-2"
            />
            <span>Non-Vegetarian</span>
          </label>
          <label className="flex items-center">
            <input
              type="radio"
              name="dietary"
              value="vegan"
              checked={filters.dietary === 'vegan'}
              onChange={(e) => setFilters(prev => ({ ...prev, dietary: e.target.value }))}
              className="mr-2"
            />
            <span>Vegan</span>
          </label>
        </div>
      </div>
      
      {/* Alcohol Serving */}
      <div className="mb-8">
        <h3 className="font-medium mb-3">Alcohol Serving</h3>
        <div className="space-y-2">
          <label className="flex items-center">
            <input
              type="radio"
              name="alcohol"
              value="all"
              checked={filters.alcohol === 'all'}
              onChange={(e) => setFilters(prev => ({ ...prev, alcohol: e.target.value }))}
              className="mr-2"
            />
            <span>All</span>
          </label>
          <label className="flex items-center">
            <input
              type="radio"
              name="alcohol"
              value="yes"
              checked={filters.alcohol === 'yes'}
              onChange={(e) => setFilters(prev => ({ ...prev, alcohol: e.target.value }))}
              className="mr-2"
            />
            <span>Serves Alcohol</span>
          </label>
          <label className="flex items-center">
            <input
              type="radio"
              name="alcohol"
              value="no"
              checked={filters.alcohol === 'no'}
              onChange={(e) => setFilters(prev => ({ ...prev, alcohol: e.target.value }))}
              className="mr-2"
            />
            <span>No Alcohol</span>
          </label>
        </div>
      </div>
      
      {/* Sort By */}
      <div className="mb-6">
        <label htmlFor="sortBy" className="block text-sm font-medium mb-2">
          Sort By
        </label>
        <select
          id="sortBy"
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          className="select"
        >
          <option value="popularity">Popularity</option>
          <option value="priceAsc">Price: Low to High</option>
          <option value="priceDesc">Price: High to Low</option>
          <option value="rating">Rating</option>
          <option value="proximity">Proximity</option>
        </select>
      </div>
      
      {/* Rating Filter */}
      <div>
        <h3 className="font-medium mb-3">Minimum Rating</h3>
        <div className="space-y-2">
          {[0, 3, 3.5, 4, 4.5].map((rating) => (
            <label key={rating} className="flex items-center">
              <input
                type="radio"
                name="rating"
                value={rating}
                checked={filters.rating === rating}
                onChange={(e) => setFilters(prev => ({ ...prev, rating: Number(e.target.value) }))}
                className="mr-2"
              />
              <span className="flex items-center">
                {rating === 0 ? (
                  'All'
                ) : (
                  <>
                    {rating}+ <Star className="h-4 w-4 text-yellow-400 ml-1" fill="#facc15" />
                  </>
                )}
              </span>
            </label>
          ))}
        </div>
      </div>
      
      <button 
        onClick={() => {
          setFilters({ alcohol: 'all', rating: 0, dietary: 'all' });
          setSortBy('popularity');
        }}
        className="mt-6 w-full btn-outline"
      >
        Reset Filters
      </button>
    </div>
  );
};

export default FilterSidebar;
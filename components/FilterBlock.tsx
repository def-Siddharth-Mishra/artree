import React from 'react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
// import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';

// Define props interface for FilterBlock
interface FilterBlockProps {
  onCategoryChange: (category: string) => void;
  onLocationChange: (location: string) => void;
  onPriceChange: (price: string) => void;
  onClearFilters: () => void;
  selectedCategory: string;
  selectedLocation: string;
  selectedPrice: string;
}

/**
 * FilterBlock component for filtering artist listings.
 * Provides dropdowns for category, location, price, and a clear filters button.
 *
 * @param {FilterBlockProps} props - Props for the FilterBlock component.
 * @returns {JSX.Element} The FilterBlock component.
 */
export function FilterBlock({
  onCategoryChange,
  onLocationChange,
  onPriceChange,
  onClearFilters,
  selectedCategory,
  selectedLocation,
  selectedPrice,
}: FilterBlockProps) {
  // Define static options for filters
  const categories = ['All', 'Singer', 'Dancer', 'DJ', 'Speaker'];
  const locations = ['All', 'New York, USA', 'Los Angeles, USA', 'London, UK', 'Sydney, Australia', 'Berlin, Germany', 'Paris, France', 'Tokyo, Japan', 'Toronto, Canada'];
  const priceRanges = ['All', '$100 - $500', '$500 - $1000', '$1000 - $2000', '$2000+'];

  return (
    <div className="bg-white p-6 rounded-lg shadow-md flex flex-col md:flex-row gap-4 items-end">
      {/* Category Filter */}
      <div className="flex-1 w-full">
        <Label htmlFor="category-filter" className="mb-2 block text-gray-700 font-medium">Category</Label>
        <Select onValueChange={onCategoryChange} value={selectedCategory}>
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Select Category" id="category-filter" />
          </SelectTrigger>
          <SelectContent>
            {categories.map((category) => (
              <SelectItem key={category} value={category}>
                {category}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {/* Location Filter (using Input for broader flexibility, though a Select could also work) */}
      <div className="flex-1 w-full">
        <Label htmlFor="location-filter" className="mb-2 block text-gray-700 font-medium">Location</Label>
        <Select onValueChange={onLocationChange} value={selectedLocation}>
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Select Location" id="location-filter" />
          </SelectTrigger>
          <SelectContent>
            {locations.map((location) => (
              <SelectItem key={location} value={location}>
                {location}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {/* Price Range Filter */}
      <div className="flex-1 w-full">
        <Label htmlFor="price-filter" className="mb-2 block text-gray-700 font-medium">Price Range</Label>
        <Select onValueChange={onPriceChange} value={selectedPrice}>
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Select Price Range" id="price-filter" />
          </SelectTrigger>
          <SelectContent>
            {priceRanges.map((price) => (
              <SelectItem key={price} value={price}>
                {price}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {/* Clear Filters Button */}
      <Button
        onClick={onClearFilters}
        className="w-full md:w-auto bg-gray-200 text-gray-800 hover:bg-gray-300 rounded-md py-2 px-4 shadow-sm transition-colors duration-200"
      >
        Clear Filters
      </Button>
    </div>
  );
}

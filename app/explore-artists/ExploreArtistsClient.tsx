"use client";
import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { Header } from '@/components/Header';
import { ArtistCard } from '@/components/ArtistCard';
import { FilterBlock } from '@/components/FilterBlock';
import artists from '@/data/artists.json';
import Head from 'next/head';

export default function ExploreArtistsClient() {
  const searchParams = useSearchParams();
  const initialCategory = searchParams.get('category') || 'All';
  const [selectedCategory, setSelectedCategory] = useState(initialCategory);
  const [selectedLocation, setSelectedLocation] = useState('All');
  const [selectedPrice, setSelectedPrice] = useState('All');

  useEffect(() => {
    setSelectedCategory(searchParams.get('category') || 'All');
  }, [searchParams]);

  const handleCategoryChange = (value: string) => setSelectedCategory(value);
  const handleLocationChange = (value: string) => setSelectedLocation(value);
  const handlePriceChange = (value: string) => setSelectedPrice(value);
  const handleClearFilters = () => {
    setSelectedCategory('All');
    setSelectedLocation('All');
    setSelectedPrice('All');
  };

  const filteredArtists = artists.filter((artist) => {
    const matchCategory = selectedCategory === 'All' || artist.category === selectedCategory;
    const matchLocation = selectedLocation === 'All' || artist.location === selectedLocation;
    const matchPrice = selectedPrice === 'All' || artist.priceRange === selectedPrice;
    return matchCategory && matchLocation && matchPrice;
  });

  return (
    <>
      <Head>
        <title>Explore Artists | Artree</title>
        <meta name="description" content="Filter and explore artists by category, location, and price. Find the perfect talent for your event." />
      </Head>
      <Header />
      <main className="container mx-auto py-12 px-4">
        <h1 className="text-3xl md:text-4xl font-bold mb-8 text-center">Explore Artists</h1>
        <FilterBlock
          selectedCategory={selectedCategory}
          onCategoryChange={handleCategoryChange}
          selectedLocation={selectedLocation}
          onLocationChange={handleLocationChange}
          selectedPrice={selectedPrice}
          onPriceChange={handlePriceChange}
          onClearFilters={handleClearFilters}
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-8">
          {filteredArtists.map((artist) => (
            <ArtistCard key={artist.id} artist={artist} />
          ))}
        </div>
      </main>
    </>
  );
}

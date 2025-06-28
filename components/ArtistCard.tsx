"use client";
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { useShortlist } from '@/context/ShortlistContext';

// Define the interface for Artist data
interface Artist {
  id: string;
  name: string;
  category: string;
  priceRange: string;
  location: string;
  bio: string;
  languages: string[];
  profileImageUrl: string;
}

/**
 * ArtistCard component displays information about a single artist.
 *
 * @param {Artist} artist - The artist data to display.
 * @returns {JSX.Element} The ArtistCard component.
 */
export function ArtistCard({ artist }: { artist: Artist }) {
  const { addArtist, isHydrated } = useShortlist();
  if (!isHydrated) {
    return (
      <div className="bg-white border border-gray-200 rounded-lg shadow-md p-6 flex flex-col items-center text-center animate-pulse min-h-[320px]">
        <div className="w-32 h-32 rounded-full bg-gray-200 mb-4" />
        <div className="h-6 w-24 bg-gray-200 rounded mb-2" />
        <div className="h-4 w-32 bg-gray-100 rounded mb-1" />
        <div className="h-4 w-28 bg-gray-100 rounded mb-1" />
        <div className="h-4 w-24 bg-gray-100 rounded mb-4" />
        <div className="h-10 w-full bg-gray-200 rounded" />
      </div>
    );
  }
  return (
    <div className="bg-white border border-gray-200 rounded-lg shadow-md p-6 flex flex-col items-center text-center transition-transform transform hover:scale-105 duration-300">
      {/* Artist Profile Image */}
      <div className="relative w-32 h-32 mb-4">
        <Image
          src={artist.profileImageUrl}
          alt={`Profile of ${artist.name}`}
          width={128}
          height={128}
          className="rounded-full object-cover border-4 border-blue-500 shadow-lg"
          unoptimized
          onError={undefined}
        />
      </div>

      {/* Artist Name */}
      <h3 className="text-xl font-semibold text-gray-800 mb-2">{artist.name}</h3>

      {/* Artist Details */}
      <p className="text-gray-600 text-sm mb-1">
        <span className="font-medium">Category:</span> {artist.category}
      </p>
      <p className="text-gray-600 text-sm mb-1">
        <span className="font-medium">Price:</span> {artist.priceRange}
      </p>
      <p className="text-gray-600 text-sm mb-4">
        <span className="font-medium">Location:</span> {artist.location}
      </p>

      {/* Ask for Quote Button */}
      <Button
        className="w-full bg-blue-600 hover:bg-blue-700 text-white rounded-md py-2 px-4 shadow-md transition-colors duration-200"
        onClick={() => addArtist(artist)}
        aria-label={`Add ${artist.name} to shortlist`}
      >
        Add to Shortlist
      </Button>
    </div>
  );
}

import Image from 'next/image';
import { Button } from '@/components/ui/button'; // Import Button component from ShadCN UI

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
          // Fallback for image loading errors
          onError={(e) => { e.currentTarget.src = 'https://placehold.co/128x128/ccc/000?text=No+Image'; }}
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
      {/* Using asChild to allow the Button component to render a custom element (here, an anchor tag) */}
      <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white rounded-md py-2 px-4 shadow-md transition-colors duration-200">
        Ask for Quote
      </Button>
    </div>
  );
}

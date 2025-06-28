import Link from 'next/link';
import { Button } from '@/components/ui/button';

/**
 * Header component for the Artree application.
 * Provides navigation links to the home page, artist listings, and onboarding form.
 *
 * @returns {JSX.Element} The Header component.
 */
export function Header() {
  return (
    <header className="bg-white dark:bg-gray-900 shadow-sm py-4 px-6 md:px-12 rounded-b-lg">
      <nav className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        {/* Logo/Brand Name */}
        <Link href="/" className="text-2xl font-bold text-gray-800 dark:text-white mb-4 md:mb-0">
          Artree
        </Link>

        {/* Navigation Links */}
        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-8 items-center">
          <Link href="/" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors duration-200">
            Home
          </Link>
          <Link href="/artists" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors duration-200">
            Artists
          </Link>
          {/* Call to Action Button */}
          <Button asChild className="bg-blue-600 hover:bg-blue-700 text-white rounded-md px-6 py-2 transition-colors duration-200 shadow-md">
            <Link href="/onboard-artist">Join Now</Link>
          </Button>
        </div>
      </nav>
    </header>
  );
}

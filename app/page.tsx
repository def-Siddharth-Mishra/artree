
import { Header } from '@/components/Header';
import { CategoryCard } from '@/components/CategoryCard';
import { Music, Disc3, Mic2, PersonStanding } from 'lucide-react';

export default function HomePage() {
  return (
    <>
      <Header />
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-white py-16 px-4 md:px-0 text-center">
        <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 mb-4">Discover & Book Top Talent</h1>
        <p className="text-lg md:text-2xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Find singers, dancers, DJs, and speakers for your next event. Curated, verified, and ready to perform.
        </p>
        <a href="/artists" className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-md px-8 py-3 shadow-lg transition-colors duration-200">Explore Artists</a>
      </section>

      {/* Category Cards */}
      <section className="container mx-auto py-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        <CategoryCard title="Singer" icon={<Music />} href="/explore-artists?category=Singer" />
        <CategoryCard title="Dancer" icon={<PersonStanding />} href="/explore-artists?category=Dancer" />
        <CategoryCard title="DJ" icon={<Disc3 />} href="/explore-artists?category=DJ" />
        <CategoryCard title="Speaker" icon={<Mic2 />} href="/explore-artists?category=Speaker" />
      </section>
    </>
  );
}

import { Header } from '@/components/Header';
import { ArtistCard } from '@/components/ArtistCard';
import artists from '@/data/artists.json';
import Head from 'next/head';

export default function DJPage() {
  const djArtists = artists.filter((artist: any) => artist.category === 'DJ');
  return (
    <>
      <Head>
        <title>Book Top DJs in Your City | Artree</title>
        <meta name="description" content="Find and book the best DJs for your event. Browse top DJs, view prices, and request a quote." />
      </Head>
      <Header />
      <main className="container mx-auto py-12 px-4">
        <h1 className="text-3xl md:text-4xl font-bold mb-8 text-center">Book Top DJs in Your City</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {djArtists.map((artist: any) => (
            <ArtistCard key={artist.id} artist={artist} />
          ))}
        </div>
      </main>
    </>
  );
}

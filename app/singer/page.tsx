import { Header } from '@/components/Header';
import { ArtistCard } from '@/components/ArtistCard';
import artists from '@/data/artists.json';
import Head from 'next/head';

export default function SingerPage() {
  const singerArtists = artists.filter((artist) => artist.category === 'Singer');
  return (
    <>
      <Head>
        <title>Book Top Singers in Your City | Artree</title>
        <meta name="description" content="Find and book the best singers for your event. Browse top vocalists, view prices, and request a quote." />
      </Head>
      <Header />
      <main className="container mx-auto py-12 px-4">
        <h1 className="text-3xl md:text-4xl font-bold mb-8 text-center">Book Top Singers in Your City</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {singerArtists.map((artist) => (
            <ArtistCard key={artist.id} artist={artist} />
          ))}
        </div>
      </main>
    </>
  );
}

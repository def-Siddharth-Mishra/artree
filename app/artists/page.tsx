import { Header } from '@/components/Header';
import { ArtistCard } from '@/components/ArtistCard';
import artists from '@/data/artists.json';
import Head from 'next/head';

export default function ArtistsPage() {
  return (
    <>
      <Head>
        <title>All Artists | Artree</title>
        <meta name="description" content="Browse all artists available for booking on Artree. Singers, dancers, DJs, speakers, and more." />
      </Head>
      <Header />
      <main className="container mx-auto py-12 px-4">
        <h1 className="text-3xl md:text-4xl font-bold mb-8 text-center">All Artists</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {artists.map((artist) => (
            <ArtistCard key={artist.id} artist={artist} />
          ))}
        </div>
      </main>
    </>
  );
}

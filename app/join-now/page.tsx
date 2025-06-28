import { Header } from '@/components/Header';
import Head from 'next/head';

export default function JoinNowPage() {
  return (
    <>
      <Head>
        <title>Join Now as an Artist | Artree</title>
        <meta name="description" content="Sign up to join Artree as an artist and get discovered by event organizers." />
      </Head>
      <Header />
      <main className="container mx-auto py-12 px-4">
        <h1 className="text-3xl md:text-4xl font-bold mb-8 text-center">Join Now as an Artist</h1>
        <div className="bg-white rounded-lg shadow-md p-8 text-center text-gray-500">
          Ready to showcase your talent? <br />
          <a href="/onboard-artist" className="inline-block mt-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-md px-8 py-3 shadow-lg transition-colors duration-200">Onboard as Artist</a>
        </div>
      </main>
    </>
  );
}

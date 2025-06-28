import { Header } from '@/components/Header';
import Head from 'next/head';
import { JoinNowForm } from '@/components/JoinNowForm';

export default function OnboardArtistPage() {
  return (
    <>
      <Head>
        <title>Join Now as an Artist | Artree</title>
        <meta name="description" content="Join Artree as an artist. Fill out the onboarding form to get listed and start receiving bookings." />
      </Head>
      <Header />
      <main className="container mx-auto py-12 px-4">
        <JoinNowForm />
      </main>
    </>
  );
}

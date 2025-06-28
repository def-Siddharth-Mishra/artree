import { Header } from '@/components/Header';
import { Table, TableColumn } from '@/components/Table';
import { useShortlist } from '@/context/ShortlistContext';
import Head from 'next/head';

export default function DashboardPage() {
  const { artists, removeArtist, clearShortlist } = useShortlist();

  const columns: TableColumn<typeof artists[0]>[] = [
    { key: 'name', label: 'Name' },
    { key: 'category', label: 'Category' },
    { key: 'location', label: 'City' },
    { key: 'priceRange', label: 'Price' },
  ];

  return (
    <>
      <Head>
        <title>Manager Dashboard | Artree</title>
        <meta name="description" content="View and manage shortlisted artists on Artree." />
      </Head>
      <Header />
      <main className="container mx-auto py-12 px-4">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-3xl md:text-4xl font-bold">Manager Dashboard</h1>
          <button
            onClick={clearShortlist}
            className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md text-sm"
          >
            Clear All
          </button>
        </div>
        <Table
          columns={columns}
          data={artists}
          actions={(artist) => (
            <button
              onClick={() => removeArtist(artist.id)}
              className="bg-gray-200 hover:bg-gray-300 text-gray-800 px-3 py-1 rounded-md text-xs"
            >
              Remove
            </button>
          )}
        />
        {artists.length === 0 && (
          <div className="text-center text-gray-500 mt-8">No shortlisted artists yet.</div>
        )}
      </main>
    </>
  );
}

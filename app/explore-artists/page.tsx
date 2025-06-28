
import dynamic from 'next/dynamic';
const ExploreArtistsClient = dynamic(() => import('./ExploreArtistsClient'), { ssr: false });

export default function ExploreArtistsPage() {
  return <ExploreArtistsClient />;
}

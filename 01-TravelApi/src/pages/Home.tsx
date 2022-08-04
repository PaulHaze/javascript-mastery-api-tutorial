import { Header, List, Map, PlaceDetails } from 'components';

export function Home() {
  return (
    <div className="h-[100vh] bg-gradient-to-br from-teal-700/50 to-sky-500/50 flex items-center justify-center p-md">
      <div className="flex flex-col bg-white rounded-lg shadow-2xl p-10">
        <Header />
        <List />
        <Map />
        <PlaceDetails />
      </div>
    </div>
  );
}

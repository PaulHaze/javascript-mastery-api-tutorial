import { Header, List, Map } from 'components';

export function Home() {
  return (
    <>
      <Header />
      <div className="grid grid-cols-12 gap-1 px-2 md:px-10">
        <div className="col-span-12 md:col-span-4">
          <div className="w-full p-10 bb">
            <List />
          </div>
        </div>
        <div className="col-span-12 md:col-span-8">
          <div className="w-full p-10 bb">
            <Map />
          </div>
        </div>
      </div>
    </>
  );
}

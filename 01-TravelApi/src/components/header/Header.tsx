import * as React from 'react';
import { Autocomplete } from '@react-google-maps/api';
import { SearchInput } from './SearchInput';

import './HeaderStyles.scss';

export function Header() {
  const [searchValue, setSearchValue] = React.useState('');
  return (
    <div className="w-full flex bg-gradient-to-r from-[#3f53b2] to-[#3549aa] py-4 px-8 md:px-5 lg:px-0 justify-center mb-5">
      <div className="flex w-full justify-between max-w-lg items-center">
        <div className="">
          <p className="text-white font-title text-3xl text-white/90">
            Travelator
          </p>
        </div>
        <div className="flex items-center">
          <p className="text-white/90 font-semibold text-sm hidden sm:inline-flex mr-10">
            Explore New Places
          </p>
          <SearchInput
            searchValue={searchValue}
            setSearchValue={setSearchValue}
          />
          {/* <div className=" text-white/90 text-sm">
            <Autocomplete>
              <div>Search Bar</div>
            </Autocomplete>
          </div> */}
        </div>
      </div>
    </div>
  );
}

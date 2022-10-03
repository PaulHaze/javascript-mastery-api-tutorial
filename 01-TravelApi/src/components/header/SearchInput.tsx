import { TextInput } from '@mantine/core';
import { BsSearch } from 'react-icons/bs';

export type SearchInputProps = {
  searchValue: string;
  setSearchValue: (searchValue: string) => void;
};

export function SearchInput({ searchValue, setSearchValue }: SearchInputProps) {
  return (
    <TextInput
      classNames={{ input: 'bg-blue-400' }}
      // className="bg-blue-100 rounded"
      value={searchValue}
      onChange={(event) => setSearchValue(event.currentTarget.value)}
      icon={<BsSearch size={16} />}
      placeholder="Search..."
    />
  );
}

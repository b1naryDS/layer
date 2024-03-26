import React, { useEffect, useRef, useState } from 'react';
import { useImagesStore } from '../../../stores/useImagesStore';
import { Input } from '../../../components/ui/input';
import useDebounce from '../../../hooks/useDebounce';
export const ImageSearchBar = () => {
  const [query, setQuery] = useState('');
  const debouncedSearchTerm = useDebounce(query, 400);
  const abortControllerRef = useRef<AbortController>();
  const { fetchImages, resetImages } = useImagesStore();

  const onSearch = (query: string) => {
    fetchImages(query, abortControllerRef);
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newQuery = event.target.value;
    setQuery(newQuery);
  };

  useEffect(() => {
    const search = async () => {
      if (debouncedSearchTerm) {
        onSearch(debouncedSearchTerm);
      } else {
        resetImages();
      }
    };

    search();
  }, [debouncedSearchTerm]);

  return (
    <div className="relative mb-6 w-full flex-grow">
      <div className="max-w-96 mx-auto relative">
        <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
          <SearchIcon />
        </div>
        <Input
          type="text"
          placeholder="Search images..."
          onChange={handleInputChange}
        />
      </div>
    </div>
  );
};

const SearchIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className="w-6 h-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
      />
    </svg>
  );
};

import React, { useCallback, useEffect, useRef, useState } from 'react';
import { useImagesStore } from '../../../stores/useImagesStore';
import { Input } from '../../../components/ui/input';
import useDebounce from '../../../hooks/useDebounce';
import { SearchIcon } from '../../../components/icons/search-icon';
export const ImageSearchBar = () => {
  const [query, setQuery] = useState('');
  const debouncedSearchTerm = useDebounce(query, 400);
  const abortControllerRef = useRef<AbortController>();
  const { fetchImages, resetImages } = useImagesStore();

  const onSearch = useCallback(
    (query: string) => {
      fetchImages(query, abortControllerRef);
    },
    [fetchImages]
  );

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
  }, [debouncedSearchTerm, onSearch, resetImages]);

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

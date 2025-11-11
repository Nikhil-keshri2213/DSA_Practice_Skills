import React, { useState } from 'react';
import { BsSearch, BsX } from 'react-icons/bs';  // Added clear (X) icon

const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleClear = () => {
    setSearchQuery('');
  };

  return (
    <div className="flex items-center border border-gray-300 rounded-xl w-full max-w-sm mx-auto">
      {/* Search Icon */}
      <div className="px-3">
        <BsSearch className="text-gray-500" />
      </div>

      {/* Input field */}
      <input
        type="text"
        className="w-full px-2 py-1 text-sm focus:outline-none"
        placeholder="Search..."
        value={searchQuery}
        onChange={handleChange}
        aria-label="Search input"
      />

      {/* Clear Button (only visible when there is text) */}
      {searchQuery && (
        <button
          className="px-3 py-1 text-gray-500 hover:text-gray-800 focus:outline-none"
          onClick={handleClear}
          aria-label="Clear search">
          <BsX />
        </button>
      )}
    </div>
  );
};

export default SearchBar;

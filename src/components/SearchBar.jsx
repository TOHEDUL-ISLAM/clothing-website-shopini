import React, { useState } from 'react';
import { IoSearch } from "react-icons/io5";

function NavbarSearch() {
  const [query, setQuery] = useState('');
  const [isHovered, setIsHovered] = useState(false);

  const handleSearch = () => {
    // Handle search functionality here
    console.log('Searching for:', query);
  };

  return (
    <div className="flex items-center">
      {/* Input Container */}
      <div 
        className={`relative transition-all duration-300 ease-in-out overflow-hidden bg-white rounded w-28 ${
          isHovered ? 'md:w-36' : 'md:w-28'
        }`}
        style={{ height: '25px' }}  // Adjust height here
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="w-full h-full px-3 text-gray-700 bg-transparent border-2 border-orange-500"
          placeholder="Search..."
        />
      </div>

      {/* Search Button */}
      <button 
        onClick={handleSearch} 
        className="ml-2 p-2 bg-orange-500 rounded text-black hover:bg-orange-600 transition duration-300 ease-in-out  "
        style={{ height: '25px', width: '25px' }}  // Adjust button size here
        aria-label="Search"
      >
        <IoSearch size={12} />  {/* Adjust icon size here */}
      </button>
    </div>
  );
}

export default NavbarSearch;

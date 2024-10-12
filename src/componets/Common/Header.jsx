import React from 'react';

const Header = ({ title }) => {
  return (
    <header className='bg-white backdrop-blur-md shadow-lg border-b border-border-color'>
      <div className='max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8 flex justify-between items-center'>
        {/* Title */}
        <h1 className='text-2xl text-custom-gray font-extrabold'>
          {title}
        </h1>
        
        {/* Search Bar - Hidden on small screens */}
        <div className="relative w-[300px] md:w-[480px] bg-white rounded-2xl p-1.5 transition-all duration-150 ease-in-out hover:scale-105 hover:shadow-lg hidden md:block">
          <div className="absolute inset-y-0 left-0 pl-2.5 flex items-center pointer-events-none">
            <svg
              className="h-5 w-5 text-gray-400"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                clipRule="evenodd"
              ></path>
            </svg>
          </div>
          <input
            type="text"
            className="w-full pl-8 pr-24 py-3 text-base text-gray-700 bg-transparent rounded-lg focus:outline-none"
            placeholder="Search for components..."
          />
          <button
            className="absolute right-1 top-1 bottom-1 px-6 bg-[#4880FF] text-white font-medium rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#4880FF]"
          >
            Search
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;

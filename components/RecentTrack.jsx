import React from 'react';

const RecentTrack = () => {
  return (
    <div className="container mx-auto flex flex-col md:flex-row items-center">
      <div className="flex flex-col w-full lg:w-1/2 justify-center items-start text-left">
        <h1 className="text-3xl md:text-5xl p-2 text-gray-700">
          hello
        </h1>
        {/* Corrected the structure by removing <h1> from inside <p> */}
        <p className="text-lg md:text-xl p-2 text-gray-600">
          Discover new music
        </p>
        <button className="px-4 py-2 mt-4 bg-blue-600 text-white rounded hover:bg-blue-700 transition duration-300">
          Learn More
        </button>
      </div>
      {/* Assuming you want to keep the image visible but with improved accessibility */}
      <div className="lg:w-1/2 justify-left">
        <img src="/" alt="Track image" className="w-full" /> {/* Adjusted alt text for better accessibility */}
      </div>
    </div>
  );
}

export default RecentTrack;

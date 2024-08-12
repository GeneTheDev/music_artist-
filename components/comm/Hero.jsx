import React from 'react';

const Hero = ({ heroData }) => {
  return (
    <div className="flex items-center justify-center min-h-screen relative z-10">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-center">
        <div className="flex flex-col w-full lg:w-1/2 justify-center items-start text-left">
          <h1
            className="text-3xl md:text-5xl p-2 text-[#fff] font-bold"
            style={{
              textShadow: '2px 2px 4px rgba(0, 0, 0, 0.6)', 
            }}
          >
            {heroData?.title || 'EliEzer O.R.'}
          </h1>
          <p
            className="text-lg md:text-xl p-2 text-[#fff]"
            style={{
              textShadow: '1px 1px 2px rgba(0, 0, 0, 0.6)',
            }}
          >
            {heroData?.description || 'Musician And Producer'}
          </p>
          <a
            href={`mailto:${heroData?.email || 'youremail@example.com'}`}
            className="px-4 py-2 mt-4 bg-blue-600 text-white rounded transition duration-300 ease-in-out transform hover:scale-105 hover:bg-blue-700 hover:text-gray-200"
            style={{
              background: 'linear-gradient(to right, rgba(255, 0, 0, 0.9), rgba(255, 200, 200, 0.9))',
            }}
          >
            {heroData?.buttonText || 'eliezeronrecord.com'}
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
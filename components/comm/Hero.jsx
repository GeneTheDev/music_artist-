import React, { useState, useEffect } from 'react';
import { sanityClient, urlFor } from '../lib/client';

const Hero = () => {
  const [heroData, setHeroData] = useState(null);

  useEffect(() => {
    sanityClient.fetch(`*[_type == "hero"][0]`)
      .then((data) => setHeroData(data))
      .catch((error) => {
        console.error('Error fetching hero data:', error);
      });
  }, []);

  const backgroundImage = heroData?.image?.asset
    ? `url(${urlFor(heroData.image).url()})`
    : 'none';

  return (
    <div
      className="hero bg-[#0A0C0C] py-32 px-4 relative overflow-hidden"
      style={{
        backgroundImage,
        backgroundSize: 'contain',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        minHeight: '60vh',
      }}
    >
      <div
        className="absolute top-0 left-0 right-0 bottom-0"
        style={{
          background: 'linear-gradient(to right, rgba(255, 0, 0, 0.1), rgba(0, 0, 0, 0.5)', // Adjust the overlay to blend with the image and background
        }}
      >
        <div className="flex items-center justify-center min-h-screen relative z-10">
          <div className="container mx-auto flex flex-col md:flex-row items-center justify-center">
            <div className="flex flex-col w-full lg:w-1/2 justify-center items-start text-left">
              <h1
                className="text-3xl md:text-5xl p-2 text-[#fff] font-bold"
                style={{
                  textShadow: '2px 2px 4px rgba(0, 0, 0, 0.6)', 
                }}
              >
                {heroData?.title || 'Welcome to Our Website'}
              </h1>
              <p
                className="text-lg md:text-xl p-2 text-[#fff]"
                style={{
                  textShadow: '1px 1px 2px rgba(0, 0, 0, 0.6)',
                }}
              >
                {heroData?.description || 'Discover our services and offers.'}
              </p>
              <button
                className="px-4 py-2 mt-4 bg-blue-600 text-white rounded hover:bg-blue-700 transition duration-300"
                style={{
                  background: 'linear-gradient(to right, rgba(255, 0, 0, 0.9), rgba(255, 200, 200, 0.9))',
                }}
              >
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

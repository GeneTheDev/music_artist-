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

  if (!heroData) {
    return <div>Loading...</div>;
  }

  return (
      <div
        className="hero bg-gray-200 py-32 px-4"
        style={{
          backgroundImage: heroData.image && heroData.image.asset
            ? `url(${urlFor(heroData.image).url()})`
            : 'none',
          backgroundSize: 'contain',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          minHeight: '60vh',
        }}
      >
        <div className="container mx-auto flex flex-col md:flex-row items-center">
          <div className="flex flex-col w-full lg:w-1/2 justify-center items-start text-left">
            <h1 className="text-3xl md:text-5xl p-2 text-gray-700">
              {heroData.title || 'Welcome to Our Website'}
            </h1>
            <p className="text-lg md:text-xl p-2 text-gray-600">
              {heroData.description || 'Discover our services and offers.'}
            </p>
            <button className="px-4 py-2 mt-4 bg-blue-600 text-white rounded hover:bg-blue-700 transition duration-300">
              Learn More
            </button>
          </div>
          {/* Removed the img tag since we're using the image as a background */}
        </div>
      </div>
    );
  };

export default Hero;

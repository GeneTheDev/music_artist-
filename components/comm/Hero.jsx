import React, { useMemo } from 'react';
import { urlFor } from '../../components/lib/client';

const Hero = ({ heroData = {} }) => {
  const {
    image,
    title = 'EliEzer O.R.',
    description = 'Musician And Producer',
    email = 'youremail@example.com',
    buttonText = 'eliezeronrecord.com',
  } = heroData;

  // Memoize the hero image URL to avoid recomputing on each render
  const heroImageUrl = useMemo(() => (image ? urlFor(image).url() : null), [image]);

  // Remove console statements in production
  if (process.env.NODE_ENV !== 'production') {
    console.log('Hero Data:', heroData);
    console.log('Hero Image URL:', heroImageUrl);
  }

  return (
    <div
      className="flex items-center justify-center min-h-screen relative z-10"
      style={{
        backgroundImage: heroImageUrl ? `url(${heroImageUrl})` : 'none',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-center relative z-20 p-4">
        <div className="flex flex-col w-full lg:w-1/2 justify-center items-start text-left">
          <h1
            className="text-3xl md:text-5xl p-2 text-white font-bold"
            style={{
              textShadow: '2px 2px 4px rgba(0, 0, 0, 0.6)',
            }}
          >
            {title}
          </h1>
          <p
            className="text-lg md:text-xl p-2 text-white"
            style={{
              textShadow: '1px 1px 2px rgba(0, 0, 0, 0.6)',
            }}
          >
            {description}
          </p>
          <a
            href={`mailto:${email}`}
            className="px-4 py-2 mt-4 bg-blue-600 text-white rounded transition duration-300 ease-in-out transform hover:scale-105 hover:bg-blue-700 hover:text-gray-200"
            style={{
              background: 'linear-gradient(to right, rgba(255, 0, 0, 0.9), rgba(255, 200, 200, 0.9))',
            }}
          >
            {buttonText}
          </a>
        </div>
      </div>
    </div>
  );
};

export default React.memo(Hero);

import React, { useState, useEffect } from 'react';
import { sanityClient } from '../../components/lib/client'; // Adjust this import path if necessary
import HeroComponent from '../HeroComponent/HeroComponent'; // Adjust this import path if necessary

const Hero = () => {
  const [heroData, setHeroData] = useState(null);
  const [loading, setLoading] = useState(true); // State to manage loading
  const [error, setError] = useState(null); // State to manage errors

  useEffect(() => {
    const fetchHeroData = async () => {
      const query = `*[_type == "hero"][0]{
        title,
        description,
        image,
        email
      }`;

      try {
        const data = await sanityClient.fetch(query);
        console.log('Fetched hero data:', data); // Log the fetched data
        setHeroData(data);
        setLoading(false); // Set loading to false once data is fetched
      } catch (err) {
        console.error('Error fetching hero data:', err);
        setError('Failed to load hero data.');
        setLoading(false); // Set loading to false even if there's an error
      }
    };

    fetchHeroData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return <HeroComponent heroData={heroData} />;
};

export default Hero;

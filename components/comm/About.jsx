import React, { useEffect, useState } from 'react';
import { sanityClient, urlFor } from '../../components/lib/client';

const About = () => {
  const [aboutData, setAboutData] = useState(null);

  useEffect(() => {
    sanityClient.fetch(`*[_type == "about"][0]`)
      .then((data) => setAboutData(data))
      .catch((error) => {
        console.error('Error fetching about data:', error);
      });
  }, []);

  if (!aboutData) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto p-4 pt-[120px] pb-[110px]">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
        <div className="image-container mb-4 md:mb-0 md:mr-8">
          {/* Use urlFor function to generate the image URL */}
          {aboutData.image && (
           <img 
           src={urlFor(aboutData.image).url()} 
              alt="About Us" 
              style={{ width: '100%', height: '600px', objectFit: 'cover' }}
           className="rounded-lg" 
         />
          )}
        </div>
        <div className="text-container">
          <h2 className="text-2xl font-bold mb-4">{aboutData.title || 'About Us'}</h2>
          <p className="text-lg">
            {aboutData.description || 'Description not available.'}
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;

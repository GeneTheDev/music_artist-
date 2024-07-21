import React, { useEffect, useState } from 'react';
import { sanityClient, urlFor } from '../../components/lib/client';
import Image from 'next/image';

const About = () => {
  const [aboutData, setAboutData] = useState(null);

  useEffect(() => {
    sanityClient.fetch(`*[_type == "about"][0]`)
      .then((data) => setAboutData(data))
      .catch((error) => {
        console.error('Error fetching about data:', error);
      });
  }, []);

  return (
    <div className="container mx-auto p-4 pt-[150px] pb-[110px]">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
        <div className="image-container mb-4 md:mb-0 md:mr-8">
          {/* Check if aboutData is not null and if image is present */}
          {aboutData?.image && (
            <div className="relative w-full max-w-[500px] mx-auto">
              <Image 
                src={urlFor(aboutData.image).url()} 
                alt="About Us"
                layout="responsive"
                width={1067} 
                height={1600} 
                className="rounded-[6%] w-full h-auto"
                loading="lazy"
              />
            </div>
          )}
        </div>
        <div className="text-container">
          <h2 className="text-2xl font-bold mb-4">
            {aboutData?.title || 'About Us'}
          </h2>
          <p className="text-lg">
            {aboutData?.description || 'Description not available.'}
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;

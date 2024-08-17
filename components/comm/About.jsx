import React, { useEffect, useState } from 'react';
import { sanityClient, urlFor } from '../../components/lib/client';
import Image from 'next/image';
import styles from '../../styles/about.module.css'; // Ensure this file exists in the same directory

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
          {aboutData?.image && (
            <div className="relative w-full max-w-[500px] mx-auto">
              <Image 
                src={urlFor(aboutData.image).url()} 
                alt="About Us"
                width={500}  // Specify width for responsive image
                height={750}  // Specify height for responsive image
                className="rounded-[6%] w-full h-auto"
                loading="lazy"
              />
            </div>
          )}
        </div>
        <div className="text-container">
          <h2 className="text-3xl md:text-5xl lg:text-5xl p-2 text-[#00000] font-bold">
            {aboutData?.title || 'About Us'}
          </h2>
          <p className={`text-base md:text-lg lg:text-xl ${styles.poppinsFont}`}>
            {aboutData?.description || 'Description not available.'}
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;

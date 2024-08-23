import React, { useEffect, useState } from 'react';
import { sanityClient, urlFor } from '../../components/lib/client';
import Image from 'next/image';
import styles from '../../styles/about.module.css'; 

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
    <div className="container mx-auto px-4 pt-[100px] pb-[60px] sm:pt-[120px] sm:pb-[80px]">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
        <div className="mb-4 md:mb-0">
          {aboutData?.image && (
            <div className="relative w-full max-w-[400px] sm:max-w-[450px] md:max-w-[500px] mx-auto">
              <Image 
                src={urlFor(aboutData.image).url()} 
                alt="About Us"
                width={500}  // Specify width for responsive image
                height={750}  // Specify height for responsive image
                className="rounded-[6%] w-full h-auto object-cover"
                loading="lazy"
              />
            </div>
          )}
        </div>
        <div className="text-center md:text-left">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl p-2 text-[#000000] font-bold">
            {aboutData?.title || 'About Us'}
          </h2>
          <p className={`text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed ${styles.poppinsFont}`}>
            {aboutData?.description || 'Description not available.'}
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;

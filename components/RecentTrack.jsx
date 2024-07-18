import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { sanityClient } from "../components/lib/client";


import { urlFor } from '../components/lib/client';
import Image from "next/image";

const RecentTrack = ({recentTrack}) => {
  const [recentTrackData, setRecentTrackData] = useState(null);

  useEffect(() => {
    sanityClient
      .fetch(`*[_type == "recent"][0]`)
      .then((data) => setRecentTrackData(data))
      .catch((error) => {
        console.error("Error fetching recentTrack data:", error);
      });
  }, []);

  if (!recentTrackData) {
    return <div>Loading...</div>;
  }

  const { title, subtitle, subtitle2, image } = recentTrackData;

  return (
    <div className="relative pt-[120px] pb-[110px] lg:pt-[150px] bg-[#e0e0e0]">
      <div className="container mx-auto px-10">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4 lg:w-5/12">
            <div className="hero-content">
              <motion.div
                variants={{
                  visible: { opacity: 1, y: 0 },
                  hidden: { opacity: 0, y: 75 },
                }}
                initial="hidden"
                animate="visible"
                transition={{ duration: 0.5, delay: 0.25 }}
              >
                <h1 className="text-black mb-3 font-bold leading-snug sm:text-[42px] lg:text-[40px] xl:text-[32px]">
                  {title || "Latest Track"}
                  <br />
                  <span className="sm:text-7xl text-6xl">
                    {subtitle || "Listen Now"}
                  </span>
                </h1>
                  <span className="sm:text-7xl text-6xl">
                    {subtitle2 || "Listen Now"}
                  </span>
              </motion.div>
              <motion.div
                variants={{
                  visible: { opacity: 1, x: 0 },
                  hidden: { opacity: 0, x: -75 },
                }}
                initial="hidden"
                animate="visible"
                transition={{ duration: 0.5, delay: 0.25 }}
              >
                <ul className="flex flex-wrap items-center">
                  <li>
                  <button type="button" className="px-4 py-2 mt-4 bg-blue-600 text-white rounded hover:bg-blue-700 transition duration-300" style={{
      background: 'linear-gradient(to right, rgba(255, 0, 0, 0.9), rgba(255, 200, 200, 0.9))',
    }}>
                    {recentTrack ? recentTrack.buttonText : "Play"}
                  </button>
                  </li>
                </ul>
              </motion.div>
            </div>
          </div>
          <div className="hidden px-4 lg:block lg:w-1/12"></div>
          <div className="w-full px-4 lg:w-6/12">
            <div className="lg:ml-auto lg:text-right">
              <motion.div
                variants={{
                  visible: { opacity: 1, x: 0, filter: "blur(0px)" },
                  hidden: { opacity: 0, x: 75, filter: "blur(5px)" },
                }}
                initial="hidden"
                animate="visible"
                transition={{ duration: 0.5, delay: 0.25 }}
                className="relative z-10 inline-block pt-11 lg:pt-0 mt-6"
              >
                <Image
                  src={image && urlFor(image).url()}
                  alt="hero"
                  width={1067} // Adjust based on the actual or desired width
                  height={1600} // Adjust based on the actual or desired height
                  className="max-w-full lg:ml-auto rounded-[6%] h-[300px] sm:h-[400px] lg:h-[500px]"
                  loading="lazy"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecentTrack;

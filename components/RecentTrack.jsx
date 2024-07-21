import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { sanityClient } from "../components/lib/client";
import { urlFor } from '../components/lib/client';
import Image from "next/image";

const RecentTrack = () => {
  const [recentTrackData, setRecentTrackData] = useState(null);

  useEffect(() => {
    sanityClient
      .fetch(`*[_type == "recent"][0]{title, subtitle, subtitle2, subtitle3, buttonText, image}`)
      .then((data) => setRecentTrackData(data))
      .catch((error) => {
        console.error("Error fetching recentTrack data:", error);
      });
  }, []);

  return (
    <div className="relative pt-[120px] pb-[110px] lg:pt-[150px] bg-[#fff] font-poppins">
      <div className="container mx-auto px-4 md:px-10 flex flex-wrap lg:items-start lg:text-left text-center lg:text-left">
        <div className="w-full lg:w-5/12 px-4 mb-10 lg:mb-0 flex flex-col items-center lg:items-start justify-center">
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
              <h1 className="text-black mb-3 font-bold leading-snug text-3xl sm:text-[42px] lg:text-[40px] xl:text-[32px]">
                {recentTrackData?.title || "Latest Track"}
                <br />
                <span className="text-5xl sm:text-7xl">
                  {recentTrackData?.subtitle || "Listen Now"}
                </span>
              </h1>
              <span className="text-5xl sm:text-7xl">
                {recentTrackData?.subtitle2 || "Listen Now"}
                <br />
              </span>
              <span className="text-5xl sm:text-7xl">
                {recentTrackData?.subtitle3 || "Listen Now"}
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
              <ul className="flex flex-wrap items-center justify-center lg:justify-start mt-4">
                <li>
                  <button
                    type="button"
                    className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition duration-300"
                    style={{
                      background: 'linear-gradient(to right, rgba(255, 0, 0, 0.9), rgba(255, 200, 200, 0.9))',
                    }}
                  >
                    {recentTrackData?.buttonText || "Listen Now"}
                  </button>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
        <div className="hidden lg:block lg:w-1/12"></div>
        <div className="w-full lg:w-6/12 px-4 flex justify-center lg:justify-end">
          <div className="lg:ml-auto lg:text-right">
            <motion.div
              variants={{
                visible: { opacity: 1, x: 0, filter: "blur(0px)" },
                hidden: { opacity: 0, x: 75, filter: "blur(5px)" },
              }}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.5, delay: 0.25 }}
              className="relative z-0 inline-block pt-11 lg:pt-0 mt-6"
            >
              <div className="relative w-full max-w-[500px] mx-auto">
                {recentTrackData?.image && (
                  <Image
                    src={urlFor(recentTrackData.image).url()}
                    alt="hero"
                    layout="responsive"
                    width={1067} // Specify the aspect ratio width
                    height={1600} // Specify the aspect ratio height
                    objectFit="cover"
                    className="rounded-[6%] w-full h-auto"
                    loading="lazy"
                  />
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecentTrack;

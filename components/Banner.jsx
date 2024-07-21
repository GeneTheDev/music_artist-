import React, { useEffect, useState } from "react";
import { useCursorContext } from "../context/StateContext";
import { sanityClient } from "../components/lib/client";
import Image from "next/image";
import circle from "../public/assets/attachments 2/rec.png";

const Banner = () => {
  const { setIsHovering } = useCursorContext();
  const [bannerData, setBannerData] = useState(null);

  useEffect(() => {
    sanityClient
      .fetch(`*[_type == "banner"][0]`)
      .then((data) => setBannerData(data))
      .catch((error) => {
        console.error("Error fetching banner data:", error);
      });
  }, []);

  const renderTextWithImages = () => {
    const text = "EliEzer O.R.";
    const repeatedText = new Array(15).fill(text); // Adjust the number of repetitions as needed
    return repeatedText.map((item, index) => (
      <span key={index} className="flex items-center" style={{ alignItems: 'center' }}>
        <span style={{ marginRight: '8px' }}>{item}</span> {/* Custom margin-right */}
        <Image src={circle} alt="circle" className="inline-block" style={{ marginLeft: '12px', marginRight: '50px' }} width={24} height={24} /> {/* Custom margins */}
      </span>
    ));
  };

  return (
    <div
      onMouseEnter={() => setIsHovering("Go")}
      onMouseLeave={() => setIsHovering("")}
      className="relative w-full h-24 flex items-center overflow-hidden"
      style={{
        background: 'linear-gradient(to right, rgba(255, 0, 0, 0.9), rgba(255, 200, 200, 0.4))',
      }}
    >
      <div id="first" className="track move-text text-3xl md:text-6xl font-anton font-semibold uppercase tracking-widest" style={{
        animation: "slide 20s linear infinite",
        color: "#fff",
        fontSize: "2rem",
      }}>
        {renderTextWithImages()}
        {renderTextWithImages()} {/* Duplicate for seamless loop */}
      </div>
      <style jsx>{`
        .track {
          display: flex;
          white-space: nowrap;
        }
        .move-text {
          display: flex;
          animation: slide 20s linear infinite;
        }
        @keyframes slide {
          0% { transform: translateX(0); }
          100% { transform: translateX(-100%); }
        }
      `}</style>
    </div>
  );
};

export default Banner;

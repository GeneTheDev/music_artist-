import React, { useEffect, useState } from "react";
import { useCursorContext } from "../context/StateContext";
import { sanityClient } from "../components/lib/client";

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

  return (
    <div
      onMouseEnter={() => setIsHovering("Go")}
      onMouseLeave={() => setIsHovering("")}
      className="relative w-full h-24 bg-[#ff0012] flex items-center overflow-hidden"
    >
        <h1 id="first" className="move-text text-3xl md:text-6xl font-anton font-semibold uppercase tracking-widest" style={{
            animation: "slide 6s linear infinite", // Adjust animation duration as needed
          }}>
          {bannerData ? bannerData.title : "Welcome to Our Website"}
        </h1>
      </div>
  );
};

export default Banner;

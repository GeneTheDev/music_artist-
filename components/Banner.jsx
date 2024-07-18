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
      style={{
        background: 'linear-gradient(to right, rgba(255, 0, 0, 0.9), rgba(255, 200, 200, 0.4))',
      }}
    >
        <h1 id="first" className="track move-text text-3xl md:text-6xl font-anton font-semibold uppercase tracking-widest" style={{
            animation: "slide 20s linear infinite",
          }}>
            EliEzer O.R EliEzer O.R EliEzer O.R EliEzer O.R EliEzer O.R EliEzer O.R EliEzer O.R EliEzer O.R
            EliEzer O.R EliEzer O.R EliEzer O.R EliEzer O.R EliEzer O.R EliEzer O.R EliEzer O.R EliEzer O.R
        </h1>
    </div>
  );
};

export default Banner;

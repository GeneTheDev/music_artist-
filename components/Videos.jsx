import React, { useEffect, useState } from "react";
import { sanityClient } from "../components/lib/client";

const Videos = () => {
  const [videoCards, setVideoCards] = useState(null);

  useEffect(() => {
    sanityClient
      .fetch(`*[_type == "video"]{_id, title, description, youtubeUrl}`)
      .then((data) => setVideoCards(data))
      .catch((error) => {
        console.error("Error fetching video data:", error);
      });
  }, []);

  if (!videoCards) {
    return <div>Loading...</div>;
  }

  return (
      <section id="yt_videos" className="bg-darkest text-secondary text-center py-5" style={{
        background: 'linear-gradient(to right, rgba(255, 0, 0, 0.9), rgba(255, 200, 200, 0.9))',
      }}>
        <div className="container mx-auto p-4" style={{ overflowX: "hidden" }}>
          <h1 className="text-3xl md:text-5xl p-6 text-[#fff] font-bold">Music + Videos</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-white">
            {videoCards.map((card) => (
              <div key={card._id} className="mt-4" data-aos="fade-in">
                <div className="video-container" style={{ borderRadius: '10px', overflow: 'hidden' }}>
                  <iframe
                    width="100%"
                    height="315"
                    src={card.youtubeUrl.replace("watch?v=", "embed/")}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    title={card.title}
                  ></iframe>
                </div>
                <h3 className="text-lg font-semibold mt-2">{card.title}</h3>
                <p>{card.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };

export default Videos;

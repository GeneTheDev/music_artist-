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
      <section id="yt_videos" className="bg-darkest text-secondary text-center py-5">
        <div className="container mx-auto p-4" style={{ overflowX: "hidden" }}>
          <h1 className="mt-3 text-uppercase text-black">My Youtube Channel</h1>
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

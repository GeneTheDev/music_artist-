import React from "react";
import "../styles/globals.css";
import "../styles/page.module.css";
import Navbar from "../../components/comm/Navbar";
import { CursorProvider } from "../../context/StateContext";
import Footer from "../../components/Footer";

function App({ Component, pageProps }) {
  const siteData = {
    platforms: {
      spotify:
        "https://open.spotify.com/artist/5w05TPWQDGWUOSivHsZcfw?go=1&sp_cid=0a910f8aea0271031a1ae9ed394edf5a&utm_source=embed_player_p&utm_medium=desktop&nd=1&dlsi=b2cec29933dc46e5",
      soundcloud: "https://on.soundcloud.com/NVL9cdCkGJRX4sd58",
      youtube: "https://youtube.com/channel/your-artist-id",
      apple: "https://music.apple.com/us/artist/your-artist-id",
      itunes: "https://music.apple.com/us/artist/your-artist-id",
      beatport: "https://www.beatport.com/artist/your-artist-id",
      amazon: "https://music.amazon.com/artists/your-artist-id",
      bandcamp: "https://your-artist-id.bandcamp.com",
    },
    socials: {
      instagram: "https://www.instagram.com/your-artist-id",
      facebook: "https://www.facebook.com/your-artist-id",
      twitter: "https://twitter.com/your-artist-id",
    },
  };

  console.log("Site Data in App:", siteData);

  return (
    <>
      <CursorProvider>
        <Navbar site={siteData} />
        <Component {...pageProps} />
        <Footer site={siteData} />
      </CursorProvider>
    </>
  );
}

export default App;

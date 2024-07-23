import "../styles/globals.css";
import "../styles/page.module.css";
import Navbar from "../components/comm/Navbar";
import { CursorProvider } from "../context/StateContext";
import { Footer } from "../components";

function App({ Component, pageProps }) {
  const siteData = {
    platforms: {
      spotify: "https://open.spotify.com/artist/5w05TPWQDGWUOSivHsZcfw",
      soundcloud: "https://on.soundcloud.com/NVL9cdCkGJRX4sd58",
      youtube: "https://www.youtube.com/channel/UCrjDeWhcs5_hAi719nASXXw",
      apple: "https://music.apple.com/us/artist/eliezer-o-r/1616487036",
      pandora: "https://www.pandora.com/artist/eliezer-or/ARq33rnKthwlPZm",
      deezer: "https://www.deezer.com/us/artist/164957087?app_id=140685",
      tidal: "https://tidal.com/browse/artist/31400088",
      amazon: "https://music.amazon.com/artists/B09WN8WC35/eliezer-o-r",
    },
    socials: {
      instagram: "https://instagram.com",
      facebook: "https://facebook.com",
      twitter: "https://twitter.com",
    },
  };

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

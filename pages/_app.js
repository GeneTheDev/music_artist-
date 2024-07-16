import "../styles/globals.css";
import Navbar from "../components/comm/Navbar";
import { CursorProvider } from "../context/StateContext";
import { Footer } from "../components";

function App({ Component, pageProps }) {
  const siteData = {
    platforms: {
      spotify: "https://open.spotify.com",
      soundcloud: "https://soundcloud.com",
      youtube: "https://youtube.com",
      apple: "https://music.apple.com",
      itunes: "https://itunes.apple.com",
      beatport: "https://beatport.com",
      amazon: "https://amazon.com",
      bandcamp: "https://bandcamp.com",
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
        <Navbar />
        <Component {...pageProps} />
        <Footer site={siteData} />
      </CursorProvider>
    </>
  );
}

export default App;

import "../styles/globals.css";
import Navbar from "../components/comm/Navbar";

function App({ Component, pageProps }) {

  return (
    <>
      <Navbar />
      <Component {...pageProps} />
    </>
  );
}

export default App;

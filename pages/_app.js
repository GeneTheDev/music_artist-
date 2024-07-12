import { useEffect } from "react";
import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "../components/comm/Navbar";

function App({ Component, pageProps }) {
  useEffect(() => {
    // Ensure Bootstrap JavaScript is included
    import("bootstrap/dist/js/bootstrap.bundle.min");
  }, []);

  return (
    <>
      <Navbar />
      <Component {...pageProps} />
    </>
  );
}

export default App;

import "../styles/globals.css";
import Navbar from "../components/comm/Navbar";
import { CursorProvider } from "../context/StateContext";

function App({ Component, pageProps }) {
  return (
    <>
      <CursorProvider>
        <Navbar />
        <Component {...pageProps} />
      </CursorProvider>
    </>
  );
}

export default App;

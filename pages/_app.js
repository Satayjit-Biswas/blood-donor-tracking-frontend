import Navbar from "../components/Public/Navbar";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
    return (
        <>
            <Navbar></Navbar>
            <Component {...pageProps} />
        </>
    );
}

export default MyApp;

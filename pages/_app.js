import Footer from "../components/Public/Footer";
import Navbar from "../components/Public/Navbar";
import "../styles/globals.css";
import "../styles/Helper.css";

function MyApp({ Component, pageProps }) {
    return (
        <>
            <Navbar></Navbar>
            <Component {...pageProps} />
            <Footer></Footer>
        </>
    );
}

export default MyApp;

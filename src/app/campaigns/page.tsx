import Alert from "../components/Alert";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";

export default function Campaigns() {
    return (
        <>
        <Alert />
        <NavBar />
        <div className="flex items-center justify-center min-h-screen">
            There is no campaign actually
        </div>
        <Footer />
        </>
    );
}
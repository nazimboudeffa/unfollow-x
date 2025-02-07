import Alert from "../components/Alert";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";

export default function About() {
    return (
    <>
      <Alert />
      <NavBar />
      <main className="flex flex-col items-center justify-center min-h-screen">
        <h1 className="font-bold">About</h1>
        <p>I just want to explain you something.</p>
        <p>Leave the influencers in their world and stop following them.</p>
      </main>
      <Footer />
    </>
    )
}
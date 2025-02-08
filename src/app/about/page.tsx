import Alert from "../components/Alert";
import NavBar from "../components/NavBar";

export default function About() {
    return (
    <>
      <Alert />
      <NavBar />
      <main className="flex flex-col items-center justify-center min-h-screen">
        <h1 className="font-bold text-2xl">About</h1>
        <p className="mt-3">I just want to explain you something.</p>
        <p className="mt-3">Leave the influencers in their world and stop following them.</p>
        <h1 className="font-bold mt-5">DISCLAIMER: Unfollow X is a joke to celebrate 21 years of Facebook</h1>
        <p className="mt-3">If you really want to develop it, please edit the corresponding file on GitHub</p>
        <p className="mt-3">You can also contribute by submitting a pull request</p>
      </main>
    </>
    )
}
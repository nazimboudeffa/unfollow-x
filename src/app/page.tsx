"use client";
import { useState } from "react";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Alert from "./components/Alert";

export default function Home() {
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Submitting form");
  };

  const playAudio = () => {
    const audio = new Audio("/assets/short-fart-185140.mp3");
    audio.play();
  };

  return (
    <>
    <Alert />
    <NavBar />
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-3xl sm:text-4xl text-center font-bold">
        Organise Massive Unfollow Campaigns
      </h1>
      <div className="flex flex-col items-center justify-center py-2">
        <form onSubmit={handleSubmit} className="flex flex-col gap-4 items-center sm:items-start">
          <label htmlFor="input" className="text-lg sm:text-xl">
            Explain why, how and who you want to unfollow
          </label>
          <textarea
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            id="input"
            placeholder="I want to massively unfollow Elon Musk because his latest tweets are too controversial."
            className="border border-gray-300 p-2 rounded"
            rows={4} 
            cols={50}
          >
          </textarea>
          <button
            type="submit"
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-indigo-600 text-background gap-2 hover:bg-indigo-700 text-sm sm:text-white h-10 sm:h-12 px-4 sm:px-5"
            onClick={playAudio}
          >
            Submit
          </button>
        </form>
      </div>
    </div>
    <Footer />
    </>
  );
}

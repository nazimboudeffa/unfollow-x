"use client";
import { useState } from "react";
import NavBar from "./components/NavBar";

export default function Home() {
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Submitting form");
  };

  return (
    <>
    <div className="bg-indigo-600 px-4 py-3 text-white">
      <p className="text-center text-sm font-medium">
      This site is under construction because we wonder to have a better Internet.
      </p>
    </div>
    <NavBar />
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
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
          disabled={true}
        >
        </textarea>
        <button
          type="submit"
          className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-indigo-600 text-background gap-2 hover:bg-indigo-700 text-sm sm:text-white h-10 sm:h-12 px-4 sm:px-5"
          disabled={true}
        >
          Submit
        </button>
      </form>
    </div>
    </>
  );
}

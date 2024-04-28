"use client";

import { useEffect } from "react";

const RandomQuoteGenerator = () => {
  useEffect(() => {
    const generateBtn = document.getElementById("generateQuote");
    const displayQuotes = document.getElementById("displayQuotes");
    const authorname = document.getElementById("authorname");

    const getRandonQuote = async () => {
      try {
        const response = await fetch("https://api.quotable.io/random");
        if (!response.ok) {
          throw new Error("Failed to fetch random quote");
        }
        const result = await response.json();

        // Display the quote
        displayQuotes.innerHTML = result.content;

        // Display the author name
        authorname.innerHTML = `by ➡️ ${result.author}`;
        console.table(result);
      } catch (error) {
        console.error(error);
      }
    };

    generateBtn.addEventListener("click", getRandonQuote);

    // Generate quotes after every 9 seconds
    const intervalId = setInterval(getRandonQuote, 9000);

    // Clean up event listener and interval on component unmount
    return () => {
      generateBtn.removeEventListener("click", getRandonQuote);
      clearInterval(intervalId);
    };
  }, []);

  return (
    <div className="bg-red-300 rounded-2xl p-10 m-10">
      <h2 className="text-5xl font-serif font-bold text-blue-500 p-3">
        {" "}
        Random Quotes Generator
      </h2>

      <button
        id="generateQuote"
        type="button"
        className="transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 p-5 text-bold rounded-xl m-4 font-serif text-3xl"
      >
        Generate
      </button>
      <h3 className="text-3xl text-green-500 font-mono" id="displayQuotes">
        It is the quality of our work which will please God, not the quantity.
      </h3>
      <span id="authorname" className="text-2xl  text-blue-600">
        ➡️ by UnKnown ...
      </span>
    </div>
  );
};

export default RandomQuoteGenerator;

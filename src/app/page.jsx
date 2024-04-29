"use client";

import LearnRouter from "@/components/LearnRouter";
import { useState } from "react";

export default function Home() {
  // increase and decrease number
  const [number, setNumber] = useState(0);
  const [backgroundColor, setBackgroundColor] = useState("green"); //at first bg-color is green

  //function to Increase number and set backgroundcolor to "blue"
  const IncreaseNum = () => {
    setNumber(number + 1);
    setBackgroundColor("blue");
  };

  //function to Decrease number and set backgroundcolor to "red"
  const DecreaseNum = () => {
    setNumber(number - 1);
    setBackgroundColor("red");
  };

  return (
    <>
      <h1 className="text-9xl font-bold font-serif text-sky-300 m-6 ">
        Hello Next Js{" "}
      </h1>
      {/* Counter program to count increase and decrease number */}
      <span
        className={`text-4xl text-orange-200 bg-${backgroundColor}-600 rounded p-3`}
      >
        {number}
      </span>
      <br />
      <button
        onClick={IncreaseNum}
        className="rounded text-3xl bg-blue-600 p-2 m-6"
      >
        Increase
      </button>{" "}
      <button
        onClick={DecreaseNum}
        className="rounded text-3xl bg-red-600 p-2 m-6"
      >
        Decrease
      </button>
      <LearnRouter />
    </>
  );
}

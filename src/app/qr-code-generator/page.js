"use client";

import React, { useEffect } from "react";

const QrCodeGeneratorFunc = async () => {
  useEffect(() => {
    const userInput = document.getElementById("user-input");

    const generateBtn = document.getElementById("generate-Btn");

    const displayQr = document.getElementById("displayQr");
    {
      /* //generator function to create QR code */
    }
    let generateQrfunc = async () => {
      let userval = userInput.value;

      if (userval.length > 0) {
        let apiUrl =
          await `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${userval}`;
        //display the qr image
        displayQr.src = apiUrl;
      }
    };

    generateBtn.addEventListener("click", generateQrfunc);
  }, []);

  return (
    <>
      <div id="qr-generator-div" class="bg-green-200 m-5 rounded-2xl p-3 hover:bg-red-100">
        <h1 class="text-4xl p-2 font-mono text-sky-400 font-bold">
          Generate QR code
        </h1>

        <h2 className="text-2xl text-orange-500 font-semibold">
          write Something ⬇️
        </h2>

        <input
          id="user-input"
          type="text"
          placeholder="Ex-google.com"
          className="bg-red-200 text-2xl text-green-100 rounded-s-3xl p-3 border-2  border-sky-300"
        />

        <button
          id="generate-Btn"
          className="rounded-e-3xl text-2xl p-3 bg-blue-700 border-2  border-sky-300"
        >
          generate QR
        </button>

        <br />

        <img src="" alt="" id="displayQr"  />
      </div>
    </>
  );
};

export default QrCodeGeneratorFunc;

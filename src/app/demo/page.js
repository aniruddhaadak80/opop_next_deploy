import React from "react";
import ButtonSample from "./button";

const DemoPageForColocation = () => {
  return (
    <div>
      <h1 className="text-3xl font-serif text-green-300">
        Demo Page for Colocation
      </h1>
      {/* Use button component inside page.js file */}
      <ButtonSample />
      <ButtonSample />
      <ButtonSample />
      <ButtonSample />
      <ButtonSample />
      {/* use as many times as you want . But this age will not displayed directly on browser */}
    </div>
  );
};

export default DemoPageForColocation;

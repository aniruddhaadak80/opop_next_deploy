import Link from "next/link";
import React from "react";
import Image from "next/image";
import HomeLogo from "../app/favicon.png";

const HeaderNavBar = () => {
  return (
    <>
      {/* Link for Home Logo  . But It don't work properly */}
      <Link href={"./"}>
        {/* <Image
            src={HomeLogo}
            alt="Home logo"
            width={100}
            height={50}
            className="rounded-full m-2 border-4 border-red-600 cursor-pointer hover:border-violet-600"
          />
        */}
      </Link>
      {/* For All links to navigate page to page i.e navbar header */}
      <header className="  text-2xl text-blue-300  font-serif space-x-10 m-6  ">
        {/* Home page link */}
        <Link className=" font-bold hover:text-red-600" href={"./"}>
          🏠Home
        </Link>{" "}
        {/* Random quote generator link */}
        <Link href={"./random-quote"}>Random Quote</Link>{" "}
        {/* QR code generator link */}
        <Link className=" font-mono " href={"./qr-code-generator"}>
          Generate QR
        </Link>
        {/* Demo page for colocation i.e components reusability */}
        <Link href={"./demo"}>Demo</Link>{" "}
        <Link
          className=" font-semibold hover:text-green-300"
          href={"./about-me"}
        >
          Ⓜ️About Me
        </Link>{" "}
      </header>
    </>
  );
};

export default HeaderNavBar;

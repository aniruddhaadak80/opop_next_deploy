import Link from "next/link";
import React from "react";
import Image from "next/image";
import HomeLogo from "../app/favicon.png";

const HeaderNavBar = () => {
  return (
    <>
      {/* Link for Home Logo  */}
      <Link href={"./"}>
        <Image
          src={HomeLogo}
          alt="Home logo"
          width={100}
          height={50}
          className="rounded-full m-3 border-4 border-red-600  cursor-pointer left  hover:border-violet-600 "
        />
      </Link>
      {/* For All links to navigate page to page i.e navbar header */}
      <nav className="  text-2xl text-blue-300 hover:text-pink-500 font-serif m-30">
        {" "}
        <Link href={"./random-quote"}>Random Quote</Link>
      </nav>
    </>
  );
};

export default HeaderNavBar;

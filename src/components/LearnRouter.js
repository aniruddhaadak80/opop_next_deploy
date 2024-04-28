"use client";

import { useRouter } from "next/navigation";
import React from "react";

const LearnRouter = () => {
  const router = useRouter();
  console.log(router);
  return (
    <div>
      <h1>Learn About Use Router Hooks in Next js .Sew console ... </h1>
    </div>
  );
};

export default LearnRouter;

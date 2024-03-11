"use client";

import { SignIn } from "@clerk/nextjs";

const Page = () => {
  return (
    <div className="h-screen w-full dark:bg-black bg-white  dark:bg-grid-small-white/[0.2] bg-grid-small-black/[0.2] relative flex items-center justify-center">
    <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
    <div className="">
       <SignIn signUpUrl="/sign-up" />
    </div>
  </div>
    
  );
};

export default Page;
"use client";
import { SignUp } from "@clerk/nextjs";

const Page = () => {
  return (
    <div className="bg-red-500 ">
      <SignUp signInUrl="/sign-in" />
    </div>
  );
};

export default Page;
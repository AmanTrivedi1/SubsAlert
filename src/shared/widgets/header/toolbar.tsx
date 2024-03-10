"use client";

// import { useUser } from "@clerk/nextjs";

import Image from "next/image";
import Link from "next/link";

const Toolbar = () => {
//   const { user } = useUser();

  return (
    <>
      <button  className="bg-white text-sm px-6 py-2  rounded-lg hover:opacity-90">
          Start Trial
      </button>
      {/* {user ? (
        <>
          <Link href={"/dashboard"}>
            <Image
              src={user?.imageUrl}
              alt=""
              width={40}
              height={40}
              className="rounded-full"
            />
          </Link>
        </>
      ) : (
        <Link href={"/sign-in"}>Login</Link>
      )} */}
    </>
  );
};

export default Toolbar;
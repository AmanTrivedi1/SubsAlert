"use client";

import { useUser } from "@clerk/nextjs";

import Image from "next/image";
import Link from "next/link";

const Toolbar = () => {
  const { user } = useUser();

  return (
    <div className="flex items-center flex-row-reverse gap-x-2">
      {user ? (
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
        <Link href={"/sign-in"} className="bg-white text-black px-4 py-2 rounded-lg">Login now</Link>
      )}
    </div>
  );
};

export default Toolbar;
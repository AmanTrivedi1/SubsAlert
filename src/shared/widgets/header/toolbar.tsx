"use client";

import { UserButton, useUser } from "@clerk/nextjs";
import Link from "next/link";
import { useClerk , useSignIn } from "@clerk/clerk-react";
import { useRouter } from 'next/navigation'
import { Button } from "@nextui-org/react";
const Toolbar = () => {

  const { user } = useUser();
  const { signOut } = useClerk();
  const router = useRouter()
  return (
    <div className="flex items-center flex-row-reverse gap-x-2">
      {user ? (
        <>
            <Button className="bg-white px-4 md:text-sm text-xs text-black rounded-lg py-2" onClick={() => signOut(() => router.push("/"))}>
              Sign out
            </Button>
        </>
      ) : (
        <Button className="bg-white px-4 md:text-sm text-xs text-black rounded-lg py-2">
          <Link href={"/sign-in"} className="">Login now</Link>
        </Button>
      )}
    </div>
  );
};

export default Toolbar;
"use client"

import { useUser } from "@clerk/nextjs"

const Main = () => {

    const {user} = useUser();

  return (
    <div className="text-white h-screen p-5 w-full ">
       <h1 className="text-2xl text-surface-900 font-medium">
         Hi {user?.fullName}👋
       </h1>
    </div>
  )
}

export default Main

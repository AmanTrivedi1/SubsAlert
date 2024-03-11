"use client"

import { ICONS } from "@/shared/utils/icons";
import { UserButton, useUser } from "@clerk/nextjs"
import DashboardItems from "./sidebar/dashboard.items";
import UserPlan from "./sidebar/user.plan";

const DashboardSidebar = () => {
    const {user} = useUser();
  return (

    <>
    

    <div className="h-full w-full   bg-grid-small-white/[0.2]  relative ">
      <div className=" pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
        <div className="p-2 text-white flex items-center rounded ">
           <UserButton/>
           <h5 className="pl-2 pt-1 capitalize  line-clamp-1 "> {user?.username}/Newsletter</h5>
        </div>
        <div className="">
            <DashboardItems/>
            <UserPlan/>
            <DashboardItems bottomContent={true}/>
        </div>
    </div>

    </>

    
  )
}

export default DashboardSidebar

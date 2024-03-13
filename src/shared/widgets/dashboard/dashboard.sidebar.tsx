"use client"

import { ICONS } from "@/shared/utils/icons";
import { UserButton, useUser } from "@clerk/nextjs"
import DashboardItems from "./sidebar/dashboard.items";
import UserPlan from "./sidebar/user.plan";

const DashboardSidebar = () => {
    const {user} = useUser();
  return (

    <>
    

    <div className="p-2">
      <div className="p-2 flex items-center text-white  rounded">
        {/* <span className="text-2xl">{ICONS.home}</span> */}
        <UserButton/>
        <h5 className="pl-2 pt-1 capitalize line-clamp-1">{user?.username} Newsletter</h5>
      </div>
      <div>
        <DashboardItems />
        <UserPlan />
        <DashboardItems bottomContent={true} />
      </div>
    </div>

    </>

    
  )
}

export default DashboardSidebar

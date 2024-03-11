import { sideBarBottomItems, sideBarItems } from "@/app/configs/constants";
import useRouteChange from "@/shared/hooks/useRouteChange";
import { ICONS } from "@/shared/utils/icons";
import { useClerk } from "@clerk/nextjs";
import Link from "next/link";
import { redirect, usePathname } from "next/navigation";
import SidebarFotterLogo from "./sidebar.fotter.logo";
import { useEffect } from "react";
import { Button } from "@nextui-org/react";

const DashboardItems = ({ bottomContent }: { bottomContent?: boolean }) => {
  const { activeRoute, setActiveRoute } = useRouteChange();
  const { signOut, user } = useClerk();
  const pathName = usePathname();

  const LogoutHandler = () => {
    signOut();
    redirect("/sign-in");
  };

  useEffect(() => {
    setActiveRoute(pathName);
  }, [pathName, setActiveRoute]);

  return (
    <>
      {!bottomContent ? (
        <>
          {sideBarItems.map((item: DashboardSideBarTypes, index: number) => (
            <Link
              key={index}
              href={item.url}
              className="p-2 mt-2 bg-white/5 text-white flex items-center"
            >
            <Button className="bg-transparent    text-white">
              <span
                className={`text-2xl mr-2 ${
                  item.url === activeRoute && "text-blue-700"
                }`}
              >
                {item.icon}
              </span>
              <span
                className={`text-lg mr-2 ${
                  item.url === activeRoute && "text-blue-700"
                }`}
              >
                {item.title}
              </span>
            </Button>
            </Link>
          ))}
        </>
      ) : (
        <>
          {sideBarBottomItems.map(
            (item: DashboardSideBarTypes, index: number) => (
              <Link
                key={index}
                className="p-2 text-white mt-2 bg-white/5 flex items-center"
                href={
                  item.url === "/"
                    ? `/subscribe?username=${user?.username}`
                    : item.url}>
            <Button className="bg-transparent    text-white">
                <span
                  className={`text-2xl mr-2 ${
                    item.url === activeRoute && "text-blue-700"
                  }`}
                >
                  {item.icon}
                </span>
                <span
                  className={`text-lg mr-2 ${
                    item.url === activeRoute && "text-blue-700"
                  }`}
                >
                  {item.title}
                </span>
                </Button>
              </Link>
            )
          )}
         
          <div className="absolute bottom-0">
            <div className="w-full flex justify-center cursor-pointer">
              <SidebarFotterLogo />
            </div>
             <p className="text-sm text-white/60 text-center pt-5 pb-10">
               © 2024 SubsAlert, Inc. All rights reserved.
             </p>
          </div>
          <div className="p-2 text-white mt-2 bg-white/5 flex items-center">
          <Button className="bg-transparent text-white"
             onClick={LogoutHandler}>
            <span className="text-2xl mr-2">{ICONS.logOut}</span>
            <span className="text-lg">Sign Out</span>
          </Button>
          </div>
         
        </>
      )}
    </>
  );
};

export default DashboardItems;
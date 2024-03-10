import { navItems } from "@/app/configs/constants";
import Link from "next/link";

const NavItems = () => {
  return (
    <div className="w-full hidden text-zinc-300  md:flex items-center">
      {navItems.map((i: NavItems, index: number) => (
        <Link key={index} href={"/"} className="px-5 text-sm">
          {i.title}
        </Link>
      ))}
    </div>
  );
};

export default NavItems;
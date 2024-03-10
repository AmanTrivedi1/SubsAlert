import Link from "next/link";
import React from "react";
import FooterLogo from "./footer.logo";

const Footer = () => {
  return (
    <footer className="w-full   text-white pt-10">
      <div className="w-[95%] md:flex m-auto py-5">
        <div className="w-full md:w-[40%]">
          <Link href={"/"}>
            <FooterLogo />
          </Link>
          <p className="text-2xl  py-2">
            Get SubsAlert updates delivered directly to your inbox.
          </p>
        </div>
      </div>
      <p className="text-lg text-center pb-10">
        © 2024 SubsAlert, Inc. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
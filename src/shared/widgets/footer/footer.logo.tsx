import Image from "next/image";
import React from "react";
import ImgLogo from "../../../assets/Logo.png"

const FooterLogo = () => {
  return (
    <div className='flex items-center gap-x-2 '>
           <Image className='object-contain overflow-hidden z-50' height={40} width={40 } src={ImgLogo} alt="/"/>
           <h1 className='text-zinc-100 z-50 font-semibold'>SubsAlert.io</h1>
  </div>
  );
};

export default FooterLogo;
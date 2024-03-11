
import Image from "next/image";
import Logo from "../../../../assets/Logo.png"
const SidebarFotterLogo = () => {
    return (
      <div className="  text-white flex  items-center justify-center ">
         <Image src={Logo} alt="/" width={40} height={40} />
      </div>
    );
  };
  
  export default SidebarFotterLogo;
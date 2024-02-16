import React from "react";
import figmaLogo from "@/assets/img/figmaLogo.svg";
import Image from "next/image";
import Link from "next/link";


const Navbar = () => {
  return ( 
    <div className={`w-full  flex justify-around items-center  z-10`}>
      <div className="w-[12.98rem] h-[3.81rem] flex items-center mt-8">
        <div className=" w-[9.17rem] h-[2.75rem] flex borra border-[0.13rem] border-solid border-black rounded-[100px] bg-[#F9DF2B] items-center text-[1.3rem] font-normal text-left">
          <Image
          priority
          className="w-[3.81rem] -ml-8"
          src={figmaLogo}
          alt="figma logo"
          />
          #figbruary
        </div>
      </div>
      <ul className="w-[23.27rem] flex justify-end gap-8 text-[1.38rem] font-semibold">
        <Link href="/"><li className="cursor-pointer">home</li></Link>
        <Link href="/prompts"><li className="cursor-pointer">prompts</li></Link>
        <li className="cursor-pointer">FAQs</li>
        <li className="cursor-pointer">2023</li>
      </ul>
    </div>
  );
};

export default Navbar;

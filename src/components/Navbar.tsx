"use client";
import React, { useState } from "react";
import figmaLogo from "@/assets/img/figmaLogo.svg";
import Image from "next/image";
import Link from "next/link";
import { FiMenu, FiX } from "react-icons/fi";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathName = usePathname()

  function toggleMenu() {
    setIsMenuOpen(!isMenuOpen);
  }
  return (
    <div className={` w-full flex justify-around items-center z-10 `}>
      {isMenuOpen ? (
        <div className="flex justify-center flex-col items-center w-full">
          <ul className="md:hidden gap-8 text-[1.38rem] font-semibold flex flex-col items-center">
            <Link href="/">
              <li className={`cursor-pointer ${pathName === '/' && "text-red-500"}`}>home</li>
            </Link>
            <Link href="/prompts">
              <li className={`cursor-pointer ${pathName.startsWith('/prompts') && "text-red-500"}`}>prompts</li>
            </Link>
            <Link href="/faqs">
              <li className={`cursor-pointer ${pathName === '/faqs' && "text-red-500"}`}>FAQs</li>
            </Link>
            <li>2023</li>
          </ul>
          <div className="md:hidden mt-4" onClick={toggleMenu}>
            <FiX className="text-3xl cursor-pointer" />
          </div>
        </div>
      ) : (
        <div className="flex justify-around items-center w-full">
          <div className=" w-[12.98rem] h-[3.81rem] flex items-start mt-8 ">
          <Link href="/"><div className=" w-[9.17rem] h-[2.75rem] flex border-[0.13rem] border-solid border-black rounded-[100px] bg-[#F9DF2B] items-center text-[1.3rem] font-normal text-left">
              <Image
                priority
                className="w-[3.81rem] -ml-8"
                src={figmaLogo}
                alt="figma logo"
              />
              #figbruary
            </div></Link>
          </div>
          <div className="md:hidden" onClick={toggleMenu}>
            <FiMenu className="text-2xl cursor-pointer" />
          </div>
          <ul className="hidden w-[23.27rem] md:flex justify-center items-center gap-8 text-[1.38rem] font-semibold">
            <Link href="/">
              <li className={`cursor-pointer ${pathName === '/' && "text-red-500"}`}>home</li>
            </Link>
            <Link href="/prompts">
              <li className={`cursor-pointer ${pathName.startsWith('/prompt') && "text-red-500"}`}>prompts</li>
            </Link>
            <Link href="/faqs">
              <li className={`cursor-pointer ${pathName === '/faqs' && "text-red-500"}`}>FAQs</li>
            </Link>
            <li>2023</li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;

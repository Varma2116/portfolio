"use client";

import Image from "next/image";
import React from "react";
import "./main.scss"

const Navbar: React.FC<{}> = () => {
  return (
    <div className="w-full h-[65px] bg-['#111'] fixed backdrop-blur-sm z-50 px-10">
      <div className="w-full h-full flex flex-row items-center justify-between m-auto px-[10px]">
        <a href="/" className="h-auto w-auto flex flex-row items-center">
          <Image
            className="icon"
            src="/devto.svg"
            alt="logo"
            width={60}
            height={60}
          />
        </a>

        <div className="flex flex-row gap-5">
          <div
            onClick={() => window.open("mailto:jvvprasad123@gmail.com")}
            style={{background:"#2E2E2E"}}
            className=" z-[1] bg-transparent  padding-10 cursor-pointer bg-black hover:bg-[#2E2E2E] rounded-xl  text-white  py-2 px-5"
          >
            Hire Me
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

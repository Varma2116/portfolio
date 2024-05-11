"use client";

import React from "react";
import Image from "next/image";
import './main.scss';

const Banner: React.FC<{}> = () => {
  return (
    <div className="flex flex-row items-center justify-center px-20 mt-[150px] z-[20] ">
      <div className="flex flex-col  justify-center  text-center">
        <div className="justify-center flex ">
          <Image
            priority
            src="/jvvprasad.png"
            height={300}
            width={300}
            alt="Jaladanki Venkata Vara Prasad"
            style={{borderRadius:"50%"}}
          />
        </div>

        <div className="flex flex-col gap-6 mt-6 cursor-pointer animate-bounce tracking-tighter text-7xl font-semibold text-white max-w-[600px] w-auto h-auto passionate">
          JVVPRASAD!
        </div>
        <div className="flex justify-center">
          <p className="text-2xl font-medium tracking-tighter  text-gray-300 max-w-[600px]">
            I do Code &{" "}
            <span className="text-transparent font-semibold  bg-clip-text bg-gradient-to-r from-purple-500 to-orange-400">
              Chill
            </span>
          </p>
          <Image src="/popcorn.gif" height={50} width={50} alt="chill" />
        </div>

        <p className="text-md text-gray-200 my-5 max-w-[600px] passionate">
          Passionate Software Developer with a focus on Web development,
          dedicated to crafting elegant and user-friendly Web applications.
        </p>
        <div className="text-md flex justify-center">
        <button
            onClick={() => window.open("/jvvprasad_resume.pdf")}
          style={{marginRight:"12px"}}
            className=" z-[1]     padding-20  hover:bg-white rounded-3xl  text-white font-semibold hover:text-black py-3 px-10  border-[0.1px] border-white hover:border-transparent "
          >
            Resume
          </button>
          <button
            onClick={() => window.open("mailto:jvvprasad123@gmail.com")}
            className=" z-[1]     padding-20  hover:bg-white rounded-3xl  text-white font-semibold hover:text-black py-3 px-10  border-[0.1px] border-white hover:border-transparent "
          >
            Contact Me
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;

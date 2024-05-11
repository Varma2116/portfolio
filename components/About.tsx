import React from "react";
import './main.scss';

const About: React.FC<{}> = () => {
  return (
    <section
      id="about"
      className="flex flex-col items-center justify-center h-full relative overflow-hidden pt-[35px] "
      style={{ transform: "scale(0.9" }}
    >
      <div className="flex flex-col  justify-around flex-wrap items-center   max-w-[900px]">
        <h1 className="text-white font-semibold text-6xl">ABOUT ME</h1>
        <p className=" tracking-[0.5em] text-transparent font-light pb-5  bg-clip-text bg-gradient-to-r from-purple-700 to-orange-500  text-1xl">
          EXPLORE NOW
        </p>
        <p className="text-gray-300 text-center passionate">
          As a passionate software developer, I thrive on the intricate dance
          between logic and creativity. Currently immersed in the dynamic world
          of Shopse, my expertise centers around Web Development, where I seamlessly
          blend technology with innovation.
          <br />
          <br />
          With a fervor for crafting elegant solutions, I navigate the
          ever-evolving landscape of software development. My journey involves
          translating concepts into code, creating seamless user experiences,
          and constantly pushing the boundaries of what&#39;s possible
          <br />
          <br />
          Experienced full stack developer with 4 years of full-stack development expertise. Proven ability to develop and
          maintain efficient, secure and scalable applications for businesses of all sizes. Passionate and hardworking
          with penchant for developing customized interfaces that factor in unique demands for accessibility,
          reachability and security.
        </p>
      </div>
    </section>
  );
};

export default About;

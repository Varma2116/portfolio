import React from "react";

const Experience: React.FC<{}> = () => {
  return (
    <section id="experience">
      <h1 className="text-white font-semibold text-center text-6xl   pt-[35px]">
        EXPERIENCE
      </h1>
      <p className=" tracking-[0.5em] text-center text-transparent font-light pb-5  bg-clip-text bg-gradient-to-r from-purple-700 to-orange-500  text-1xl ">
        EXPLORE NOW
      </p>
      <div className=" container mx-auto 2xl ">
        <div className="flex  flex-row justify-between pt-5">
          <p className="text-gray-300 ">
            <span className="font-semibold">Shopse /</span> Full Stack Developer
          </p>
          <p className="text-gray-300">NOVEMBER 2022 - PRESENT, Bangalore</p>
        </div>
        <p className="text-gray-300 pt-5">
          Collaborated in designing, developing, and maintaining backend services for a
          cutting-edge fintech platform facilitating transactions between banks and
          prominent brands like BlueStar, Apple. Integrated with leading banks' APIs and financial institutions to enable secure and
          efficient transaction processing and fund transfers.Conducted code reviews, provided constructive feedback, and mentored junior
          developers to maintain high code quality standards and foster continuous learning
          and improvement.
          <br />
          <br />
          In addition to my expertise in React.js, I am proficient in Java, enabling me to develop
          robust, scalable, and efficient backend solutions to complement dynamic frontend experiences.
          With a strong grasp of object-oriented principles and extensive experience in backend development,
          I excel in designing and implementing server-side logic, RESTful APIs, and database interactions.
          My proficiency in Java empowers me to create end-to-end solutions that seamlessly integrate frontend and backend components,
          ensuring optimal performance and user satisfaction. I stay updated with the latest advancements in Java development and leverage
          its rich ecosystem of frameworks and libraries to deliver high-quality, full-stack applications
        </p>
        <div className="flex-col flex sm:flex-row ">
          <div className="bg-transparent  mt-5 mr-2 cursor-pointer  rounded-3xl  text-white py-2 px-5  border border-[#2E2E2E] w-max">
            React
          </div>
          <div className="bg-transparent  mt-5  mr-2 cursor-pointer  rounded-3xl  text-white py-2 px-5  border border-[#2E2E2E] w-max">
            Next Js
          </div>
          <div className="bg-transparent  mt-5  mr-2 cursor-pointer  rounded-3xl  text-white py-2 px-5  border border-[#2E2E2E] w-max">
            JavaScript
          </div>
          <div className="bg-transparent  mt-5 cursor-pointer  rounded-3xl  text-white py-2 px-5  border border-[#2E2E2E] w-max">
            Java
          </div>
        </div>
      </div>

      <div className=" container mx-auto 2xl ">
        <div className="flex  flex-row justify-between pt-5">
          <p className="text-gray-300 ">
            <span className="font-semibold">Vedantu /</span> Full Stack Developer
          </p>
          <p className="text-gray-300">DECEMBER 2019 - NOVEMBER 2022, Bangalore</p>
        </div>
        <p className="text-gray-300 pt-5">
          Designed, developed, and maintained scalable Java applications for a high-traffic
          Edutech platform, ensuring reliability and performance. Integrated multimedia content, including videos, animations, and interactive
          quizzes, to enhance learning materials and cater to different learning styles.
          Participated in Agile development methodologies, including sprint planning, daily
          stand-ups, and retrospective meetings, to deliver features iteratively and adapt to
          changing requirements.
        </p>
        <div className="flex-col flex sm:flex-row ">
          <div className="bg-transparent  mt-5 mr-2 cursor-pointer  rounded-3xl  text-white py-2 px-5  border border-[#2E2E2E] w-max">
            React
          </div>
          <div className="bg-transparent  mt-5  mr-2 cursor-pointer  rounded-3xl  text-white py-2 px-5  border border-[#2E2E2E] w-max">
            Next Js
          </div>
          <div className="bg-transparent  mt-5  mr-2 cursor-pointer  rounded-3xl  text-white py-2 px-5  border border-[#2E2E2E] w-max">
            JavaScript
          </div>
          <div className="bg-transparent  mt-5 cursor-pointer  rounded-3xl  text-white py-2 px-5  border border-[#2E2E2E] w-max">
            Java
          </div>
          <div className="bg-transparent  mt-5 cursor-pointer  rounded-3xl  text-white py-2 px-5  border border-[#2E2E2E] w-max">
            Node JS
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;

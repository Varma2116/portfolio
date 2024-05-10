import Image from "next/image";
import Link from "next/link";
import React from "react";
import "./main.scss"

const Projects: React.FC<{}> = () => {
  return (
    <section id="projects">
      <h1 className="text-white font-semibold text-center text-6xl pt-[35px]">
        PROJECTS
      </h1>
      <p className=" tracking-[0.5em] text-center text-transparent font-light pb-5  bg-clip-text bg-gradient-to-r from-purple-700 to-orange-500  text-1xl ">
        EXPLORE NOW
      </p>
      <div className="proj-container">
        <div
          className="projects"
        >
          <Link
            href="https://smart-meet-ten.vercel.app/"
            rel="noopener noreferrer"
            target="_blank"
            className="z-[1]"
            style={{ width: "32%" }}

          >
            <div className="flex-row flex mb-5 image-cont">
              <Image
                src="/hospital.jpg"
                height={150}
                className="image"
                width={150}
                alt="Booking Application"
              />
              <div className="p-3">
                <p className="text-white font-semibold text-xl">Booking Application</p>
                <p className="text-gray-500 text-[12px] p-text">
                I developed a hospital booking system for scheduling patient appointments. 
                  The application allows new patients and hospitals to register and download reports using Next.js and Node.js.
                </p>
              </div>
            </div>
          </Link>
          <Link
            href="https://my-merch.vercel.app/"
            rel="noopener noreferrer"
            target="_blank"
            className="z-[1]"
            style={{ width: "32%" }}

          >
            <div className="flex-row flex mb-5 image-cont">
              <Image
                className="image"
                src="/online.jpg"
                height={150}
                width={150}
                alt="Ecommerce"
              />
              <div className="p-3">
                <p className="text-white font-semibold text-xl">Ecommerce Application</p>
                <p className="text-gray-500 text-[12px] p-text">
                I developed a web application for an online e-commerce platform, allowing users to purchase products. 
                I implemented a payment system using React and Java for seamless item purchase.
                </p>
              </div>
            </div>
          </Link>
        </div>
        <div className="projects">
          <Link
            href="https://github.com/Varma2116/chat-service-backend"
            rel="noopener noreferrer"
            target="_blank"
            className="z-[1]"
            style={{ width: "32%" }}
          >
            <div className="flex-row flex mb-5 image-cont">
              <Image
                className="image"
                src="/chat.jpg"
                height={150}
                width={150}
                alt="Chat Application"
              />
              <div className="p-3">
                <p className="text-white font-semibold text-xl">Chat Application</p>
                <p className="text-gray-500 text-[12px] p-text">
                I designed a Chat Service enabling real-time communication with friends,
                supporting group messages within the application. This was implemented using React and Node.js.
                </p>
              </div>
            </div>
          </Link>
          <Link
            style={{ width: "32%" }}
            href="https://github.com/Varma2116/github-Task"
            rel="noopener noreferrer"
            target="_blank"
            className="z-[1]"
          >
            <div className="flex-row flex mb-5 image-cont">
              <Image
                className="image"
                src="/GitHub_logo.webp"
                height={150}
                width={150}
                alt="HireSide"
              />
              <div className="p-3">
                <p className="text-white font-semibold text-xl">GitHub Profile</p>
                <p className="text-gray-500 text-[12px] p-text">
                I developed a web application using React.js to search all repositories on GitHub, utilizing GitHub published APIs.
                </p>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Projects;

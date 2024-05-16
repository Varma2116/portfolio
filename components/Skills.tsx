import Image from "next/image";
import Link from "next/link";
import React from "react";

const Skills: React.FC<{}> = () => {
  return (
    <section>
      <h1 className="text-white font-semibold text-center text-6xl pt-[35px]">
        SKILLS
      </h1>
      <p className=" tracking-[0.5em] text-center text-transparent font-light pb-5  bg-clip-text bg-gradient-to-r from-purple-700 to-orange-500  text-1xl " style={{ fontSize:"18px", marginTop:"18px" }}>
        KNOWN LANGUAGES
      </p>
      <div className="skill-container">
        <div className="skills" style={{ border: "2px solid #336791" }}>
          <div className="language">
            <Image
              priority
              src="/java.svg"
              height={300}
              width={300}
              alt="Jaladanki Venkata Vara Prasad"
              style={{ borderRadius: "32%", background: "unset", width: "155px", padding: "16px" }}
            />
            <div className="tab" style={{ background: "#336791", borderTop: "2px solid #336791" }}>
              Java
            </div>
          </div>
        </div>
        <div className="skills" style={{ border: "2px solid #FF0000" }}>
          <div className="language">
            <Image
              priority
              src="/redis.svg"
              height={300}
              width={300}
              alt="Jaladanki Venkata Vara Prasad"
              style={{ background: "unset", width: "92px" }}
            />
            <div className="tab" style={{ background: "#FF0000", borderTop: "2px solid #FF0000" }}>
              Redis
            </div>
          </div>
        </div>
        <div className="skills">
          <div className="language">
            <Image
              priority
              src="/next-js.svg"
              height={300}
              width={300}
              alt="Jaladanki Venkata Vara Prasad"
              style={{ borderRadius: "50%", }}
            />
            <div className="tab">
              Next
            </div>
          </div>
        </div>
        <div className="skills" style={{ border: "2px solid #00dfd8" }}>
          <div className="language">
            <Image
              priority
              src="/react.svg"
              height={300}
              width={300}
              alt="Jaladanki Venkata Vara Prasad"
              style={{ borderRadius: "50%", background: "unset", width: "70px" }}
            />
            <div className="tab" style={{ background: "#00dfd8", borderTop: "2px solid #00dfd8" }}>
              React
            </div>
          </div>
        </div>
        <div className="skills" style={{ border: "2px solid #c3b017" }}>
          <div className="language">
            <Image
              priority
              src="/js.svg"
              height={300}
              width={300}
              alt="Jaladanki Venkata Vara Prasad"
              style={{ borderRadius: "20%", background: "unset", width: "79px" }}
            />
            <div className="tab" style={{ background: "#c3b017", borderTop: "2px solid #c3b017" }}>
              Javascript
            </div>
          </div>
        </div>
        <div className="skills" style={{ border: "2px solid #e44f26" }}>
          <div className="language">
            <Image
              priority
              src="/html.svg"
              height={300}
              width={300}
              alt="Jaladanki Venkata Vara Prasad"
              style={{ borderRadius: "20%", background: "unset", width: "69px" }}
            />
            <div className="tab" style={{ background: "#e44f26", borderTop: "2px solid #e44f26" }}>
              HTML
            </div>
          </div>
        </div>
        <div className="skills" style={{ border: "2px solid #1fa3bc" }}>
          <div className="language">
            <Image
              priority
              src="/css.svg"
              height={300}
              width={300}
              alt="Jaladanki Venkata Vara Prasad"
              style={{ borderRadius: "20%", background: "unset", width: "69px" }}
            />
            <div className="tab" style={{ background: "#1fa3bc", borderTop: "2px solid #1fa3bc" }}>
              CSS
            </div>
          </div>
        </div>
        <div className="skills" style={{ border: "2px solid #7cc327" }}>
          <div className="language">
            <Image
              priority
              src="/node.svg"
              height={300}
              width={300}
              alt="Jaladanki Venkata Vara Prasad"
              style={{ borderRadius: "20%", background: "unset", width: "70px" }}
            />
            <div className="tab" style={{ background: "#7cc327", borderTop: "2px solid #7cc327" }}>
              Node
            </div>
          </div>
        </div>
        <div className="skills" style={{ border: "2px solid #009546" }}>
          <div className="language">
            <Image
              priority
              src="/mongo.svg"
              height={300}
              width={300}
              alt="Jaladanki Venkata Vara Prasad"
              style={{ borderRadius: "20%", background: "unset", width: "79px" }}
            />
            <div className="tab" style={{ background: "#009546", borderTop: "2px solid #009546" }}>
              Mongo
            </div>
          </div>
        </div>
        <div className="skills" style={{ border: "2px solid #336791" }}>
          <div className="language">
            <Image
              priority
              src="/sql.svg"
              height={300}
              width={300}
              alt="Jaladanki Venkata Vara Prasad"
              style={{ borderRadius: "20%", background: "unset", width: "79px" }}
            />
            <div className="tab" style={{ background: "#336791", borderTop: "2px solid #336791" }}>
              MYSQL
            </div>
          </div>
        </div>
      </div>

      <p className=" tracking-[0.5em] text-center text-transparent font-light pb-5  bg-clip-text bg-gradient-to-r from-purple-700 to-orange-500  text-1xl " style={{ marginTop: "48px", fontSize:"18px" }}>
        HOSTING PLATFORMS
      </p>
      <div className="skill-container">
        <div className="skills" style={{ border: "2px solid #797979" }}>
          <div className="language">
            <Image
              priority
              src="/github.svg"
              height={300}
              width={300}
              alt="Jaladanki Venkata Vara Prasad"
              style={{ borderRadius: "50%", background: "#fff", width: "79px" }}
            />
            <div className="tab" style={{ background: "#797979", borderTop: "2px solid #797979" }}>
              Github
            </div>
          </div>
        </div>
        <div className="skills" style={{ border: "2px solid #232f3e" }}>
          <div className="language">
            <Image
              priority
              src="/aws.svg"
              height={300}
              width={300}
              alt="Jaladanki Venkata Vara Prasad"
              style={{ borderRadius: "50%", background: "unset", width: "79px" }}
            />
            <div className="tab" style={{ background: "#232f3e", borderTop: "2px solid #232f3e" }}>
              AWS
            </div>
          </div>
        </div>
        <div className="skills" style={{ border: "2px solid #797979" }}>
          <div className="language">
            <Image
              priority
              src="/vercel.png"
              height={300}
              width={300}
              alt="Jaladanki Venkata Vara Prasad"
              style={{ borderRadius: "50%", background: "unset", width: "79px" }}
            />
            <div className="tab" style={{ background: "#797979", borderTop: "2px solid #797979" }}>
              Vercel
            </div>
          </div>
        </div>
        <div className="skills" style={{ border: "2px solid #e95420" }}>
          <div className="language">
            <Image
              priority
              src="/ubuntu.svg"
              height={300}
              width={300}
              alt="Jaladanki Venkata Vara Prasad"
              style={{ borderRadius: "50%", background: "unset", width: "79px" }}
            />
            <div className="tab" style={{ background: "#e95420", borderTop: "2px solid #e95420" }}>
              Ubuntu
            </div>
          </div>
        </div>
        <div className="skills" style={{ border: "2px solid #fcca3f" }}>
          <div className="language">
            <Image
              priority
              src="/firebase.svg"
              height={300}
              width={300}
              alt="Jaladanki Venkata Vara Prasad"
              style={{ borderRadius: "50%", background: "unset", width: "58px" }}
            />
            <div className="tab" style={{ background: "#fcca3f", borderTop: "2px solid #fcca3f" }}>
              Firebase
            </div>
          </div>
        </div>
      </div>

      <p className=" tracking-[0.5em] text-center text-transparent font-light pb-5  bg-clip-text bg-gradient-to-r from-purple-700 to-orange-500  text-1xl " style={{ marginTop: "48px", fontSize:"18px" }}>
        TOOLS
      </p>

      <div className="skill-container">
        <div className="skills" style={{ border: "2px solid #0075b7" }}>
          <div className="language">
            <Image
              priority
              src="/vscode.svg"
              height={300}
              width={300}
              alt="Jaladanki Venkata Vara Prasad"
              style={{ borderRadius: "unset", background: "unset", width: "50px", marginBottom:"20px", marginTop:"30px"}}
            />
            <div className="tab" style={{ background: "#0075b7", borderTop: "2px solid #0075b7" }}>
              VS Code
            </div>
          </div>
        </div>
        <div className="skills" style={{ border: "2px solid #9d5025" }}>
          <div className="language">
            <Image
              priority
              src="/postman.svg"
              height={300}
              width={300}
              alt="Jaladanki Venkata Vara Prasad"
              style={{ borderRadius: "50%", background: "unset", width: "79px" }}
            />
            <div className="tab" style={{ background: "#9d5025", borderTop: "2px solid #9d5025" }}>
              Postman
            </div>
          </div>
        </div>
        <div className="skills" style={{ border: "2px solid #39adbb" }}>
          <div className="language">
            <Image
              priority
              src="/intellij.svg"
              height={300}
              width={300}
              alt="Jaladanki Venkata Vara Prasad"
              style={{ borderRadius: "50%", background: "unset", width: "79px" }}
            />
            <div className="tab" style={{ background: "#39adbb", borderTop: "2px solid #39adbb" }}>
              Intellij
            </div>
          </div>
        </div>
        <div className="skills" style={{ border: "2px solid #7928ca" }}>
          <div className="language">
            <Image
              priority
              src="/figma.svg"
              height={300}
              width={300}
              alt="Jaladanki Venkata Vara Prasad"
              style={{ borderRadius: "50%", background: "unset", width: "79px" }}
            />
            <div className="tab" style={{ background: "#7928ca", borderTop: "2px solid #7928ca" }}>
              Figma
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;

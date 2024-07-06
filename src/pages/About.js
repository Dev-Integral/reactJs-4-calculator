import React from "react";
import Name from "../components/Name";
import TopLine from "../components/TopLine";
import {
  FaGithub,
  FaLinkedinIn,
  FaStackOverflow,
  FaTwitter,
} from "react-icons/fa";
import { Header } from "../components/Header";
import VerticalName from "../components/VerticalName";

function About() {
  return (
    <div className="flex h-screen">
      <div className="flex flex-col justify-between">
        <div>
          <TopLine className={"bg-ta-green h-4"} />
          <Header />
        </div>
        <div className="relative">
          <div className="flex flex-col">
            <div className="mr-24">
              <p className="bg-ta-blue text-white font-hammersmith px-24 text-[70px] rounded-tr-[35px] rounded-br-[35px]">
                ABOUT ME
              </p>
            </div>
            <div className="px-24 text-xl flex flex-col gap-4 py-6">
              <p>
                Hello! I'm Taiwo, a seasoned software engineer specializing in
                frontend and backend development. With a Bachelor's degree in
                Mathematics, I bring a solid foundation and a passion for
                cutting-edge technology to every project.
              </p>

              <p>
                Over the past three years, I've honed my skills in building
                robust and user-centric applications. My journey began as a
                software engineer, where I crafted intuitive user interfaces
                with JavaScript, React, and CSS. Transitioning into backend
                development, I have successfully architected scalable systems
                using Node.js, Express, and PostgreSQL, ensuring seamless
                integration and performance.
              </p>

              <p>
                Currently, I’m working at Verdant Devcore Technologies as a
                Backend Engineer, where I led the setup of new projects,
                including deployment on platforms like Render, and developed
                comprehensive unit tests to enhance product reliability. Prior
                to this, I led a frontend team at Gladefinance, contributing to
                the creation of key fintech features like account management,
                transfers, and payroll systems.
              </p>

              <p>
                I thrive in collaborative environments, consistently
                contributing to team success and continuously learning new
                technologies. Whether I’m developing a feature-rich application
                or mentoring aspiring developers, my goal is to create solutions
                that are both innovative and user-friendly.
              </p>

              <p>
                When I’m not coding, you’ll find me exploring new tech trends,
                participating in community-driven projects, or simply enjoying a
                good book.
              </p>

              <p>Let’s build something amazing together!</p>
            </div>
          </div>
        </div>
        <div className="relative flex items-center justify-between px-24 py-12 gap-6">
          <div className="font-poppins text-xl">&copy;2024</div>
          <div className="h-1 bg-ta-blue w-full"></div>
          <div className="flex gap-3">
            <p className="h-12 w-12 rounded-full bg-ta-blue flex items-center justify-center text-white text-xl cursor-pointer">
              <a href="https://www.linkedin.com/in/taiwo-ayoola-39239012a">
                <FaLinkedinIn />
              </a>
            </p>
            <p className="h-12 w-12 rounded-full bg-ta-green flex items-center justify-center text-white text-xl cursor-pointer">
              <a href="https://github.com/dev-integral">
                <FaGithub />
              </a>
            </p>
            <p className="h-12 w-12 rounded-full bg-ta-purple flex items-center justify-center text-white text-xl cursor-pointer">
              <a href="https://stackoverflow.com/users/11214588/dev-integral">
                <FaStackOverflow />
              </a>
            </p>
            <p className="h-12 w-12 rounded-full bg-ta-red flex items-center justify-center text-white text-xl cursor-pointer">
              <a href="https://x.com/Dev_Integral">
                <FaTwitter />
              </a>
            </p>
          </div>
        </div>
      </div>
      <div className="">
        <div className="flex h-full justify-end">
          <div className="writing-mode-vertical-lr p-4 text-white bg-ta-blue text-[35px] text-center font-hammersmith">
            TAIWO MORUFF AYOOLA
          </div>
        </div>
        {/* <div><span className="text-xl writing-mode-vertical-rl">Your Name</span></div> */}
      </div>
    </div>
  );
}

export default About;

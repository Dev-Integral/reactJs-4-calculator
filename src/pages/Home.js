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
function Home() {
  return (
    <div className="h-screen flex flex-col justify-between">
      <div>
        <TopLine className={"bg-ta-purple h-4"} />
        <Header />
      </div>
      <div className="relative flex flex-col justify-between px-24 gap-8">
        <div className="mb-8">
          <div className="flex h-full gap-3 justify-end">
            <p className="w-[150px] h-1 bg-ta-green"></p>
          </div>
          <div className="flex h-full gap-6 justify-end">
            <p className="w-[150px] h-1.5 bg-ta-green mr-[50px] mt-1"></p>
          </div>
        </div>
        <Name />
        <div className="mt-8">
          <div className="flex h-full">
            <p className="w-[150px] h-1.5 bg-ta-purple mr-20"></p>
          </div>
          <div className="flex h-full gap-6">
            <p className="w-[150px] h-1 bg-ta-purple ml-[50px] mt-1"></p>
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
  );
}

export default Home;

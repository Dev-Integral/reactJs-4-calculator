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
import Footer from "../components/Footer";
function Home() {
  return (
    <div className="h-screen flex flex-col justify-between">
      <div>
        <TopLine className={"bg-ta-purple h-4"} />
        <Header />
      </div>
      <div className="relative flex flex-col justify-between px-12 md:px-24 gap-8">
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
      <Footer />
    </div>
  );
}

export default Home;

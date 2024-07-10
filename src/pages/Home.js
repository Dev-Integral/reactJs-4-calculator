import React from "react";
import Name from "../components/Name";
import TopLine from "../components/TopLine";
import { Header } from "../components/Header";
import Footer from "../components/Footer";
function Home() {
  return (
    <div className="h-screen flex flex-col justify-between">
      <div data-aos="fade-up" data-aos-anchor-placement="top-bottom">
        <TopLine className={"bg-ta-purple h-4"} />
        <Header />
      </div>
      <div className="relative flex flex-col justify-between px-12 md:px-24 gap-8">
        <div data-aos="fade-left" className="mb-8">
          <div className="flex h-full gap-3 justify-end">
            <p className="w-[150px] h-1 bg-ta-green"></p>
          </div>
          <div className="flex h-full gap-6 justify-end">
            <p className="w-[150px] h-1.5 bg-ta-green mr-[50px] mt-1"></p>
          </div>
        </div>
        <div data-aos="flip-left">
          <Name />
        </div>
        <div data-aos="fade-right" className="mt-8">
          <div className="flex h-full">
            <p className="w-[150px] h-1.5 bg-ta-purple mr-20"></p>
          </div>
          <div className="flex h-full gap-6">
            <p className="w-[150px] h-1 bg-ta-purple ml-[50px] mt-1"></p>
          </div>
        </div>
      </div>
      <div data-aos="fade-up" data-aos-anchor-placement="top-bottom">
        <Footer />
      </div>
    </div>
  );
}

export default Home;

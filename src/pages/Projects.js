import React from "react";
import TopLine from "../components/TopLine";
import { Header } from "../components/Header";
import Footer from "../components/Footer";
import SimpleSlider from "../components/SimpleSlider";

function Projects() {
  return (
    <div className="h-screen">
      <div className="flex flex-col justify-between h-full">
        <div data-aos="fade-up" data-aos-anchor-placement="top-bottom">
          <TopLine className={"bg-ta-blue h-4"} />
          <Header />
        </div>
        <div className="relative">
          <div>
            <p
              data-aos="fade-right"
              className="text-center text-[30px] md:text-[60px] text-ta-blue font-hammersmith leading-none"
            >
              FEATURED WORK
            </p>
            <div className="px-12 md:px-24 py-3" data-aos="flip-right">
              <SimpleSlider />
            </div>
          </div>
        </div>
        <div data-aos="fade-up" data-aos-anchor-placement="top-bottom">
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default Projects;

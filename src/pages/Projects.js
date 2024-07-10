import React from "react";
import TopLine from "../components/TopLine";
import { Header } from "../components/Header";
import Footer from "../components/Footer";
import SimpleSlider from "../components/SimpleSlider";


function Projects() {
  return (
    <div className="h-screen">
      <div className="flex flex-col justify-between h-full">
        <div>
          <TopLine className={"bg-ta-blue h-4"} />
          <Header />
        </div>
        <div className="relative">
          <div className="">
            <p className="text-center text-[60px] text-ta-blue font-hammersmith leading-none">
              FEATURED WORK
            </p>
            <div className="px-24 py-3">
             <SimpleSlider />
            </div>
            {/* <div className="flex gap-3">
              <div>
                <img
                  src={glade}
                  alt="Gladefinance shot"
                  className="h-[200px]"
                />
                <p>Gladefinance -</p>
              </div>
              <img src={glade} alt="Gladefinance shot" className="h-[200px]" />
              <img src={glade} alt="Gladefinance shot" className="h-[200px]" />
              <img src={glade} alt="Gladefinance shot" className="h-[200px]" />
              <img src={glade} alt="Gladefinance shot" className="h-[200px]" />
            </div> */}
          </div>
        </div>
        <div>
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default Projects;

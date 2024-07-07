import React from "react";
import TopLine from "../components/TopLine";
import { Header } from "../components/Header";
import Footer from "../components/Footer";
import ContactForm from "../components/ContactForm";
import { IoCall } from "react-icons/io5";
import { MdEmail } from "react-icons/md";

function Projects() {
  return (
    <div className="h-screen">
      <div className="flex flex-col justify-between h-full">
        <div>
          <TopLine className={"bg-ta-blue h-4"} />
          <Header />
        </div>
        <div className="relative">
          <div className="flex flex-col md:flex-col items-center ">
            <p className="text-[60px] text-ta-blue font-hammersmith leading-none">FEATURED WORK</p>
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

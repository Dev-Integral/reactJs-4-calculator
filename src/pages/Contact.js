import React from "react";
import TopLine from "../components/TopLine";
import { Header } from "../components/Header";
import Footer from "../components/Footer";
import ContactForm from "../components/ContactForm";
import { IoCall } from "react-icons/io5";
import { MdEmail } from "react-icons/md";

function Contact() {
  return (
    <div className="h-screen">
      <div className="flex flex-col justify-between h-full">
        <div data-aos="fade-up" data-aos-anchor-placement="top-bottom">
          <TopLine className={"bg-ta-purple h-4"} />
          <Header />
        </div>
        <div className="relative">
          <div className="flex flex-col md:flex-row items-center ">
            <div className="mr-24 w-full md:w-1/2" data-aos="zoom-in">
              <div className="bg-ta-purple text-white py-4 px-12 md:px-24 text-[30px] md:text-[70px] rounded-tr-[35px] rounded-br-[35px] shadow-lg">
                <p className="px-12 md:px-0 font-hammersmith leading-none">
                  Let’s <br /> Connect
                </p>
              </div>
            </div>
            <div className="w-full px-12 md:px-0 md:w-1/3" data-aos="flip-up">
              <div className="flex gap-4 items-center justify-between py-6 md:py-0">
                <div className="flex gap-4 items-center justify-between">
                  <div className="text-5xl text-ta-blue">
                    <IoCall />
                  </div>
                  <div>
                    <p className="font-bold text-ta-blue">Call / Whatsapp</p>
                    <p>+234 814 942 9711</p>
                  </div>
                </div>
                <div className="flex gap-4 items-center">
                  <div className="text-5xl text-ta-green">
                    <MdEmail />
                  </div>
                  <div>
                    <p className="font-bold text-ta-green">Email</p>
                    <p>tayoola13@yahoo.com</p>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-6">
                <p className="h-1 border-b w-full"></p>
                <p className="font-bold text-3xl text-ta-red">or</p>
                <p className="h-1 border-b w-full"></p>
              </div>
              <ContactForm />
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

export default Contact;

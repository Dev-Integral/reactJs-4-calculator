import React from "react";
import TopLine from "../components/TopLine";
import { Header } from "../components/Header";
import VerticalName from "../components/VerticalName";
import Footer from "../components/Footer";

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
              <p className="bg-ta-blue text-white font-hammersmith px-12 md:px-24 text-[30px] md:text-[70px] rounded-tr-[35px] rounded-br-[35px]">
                ABOUT ME
              </p>
            </div>
            <div className="px-12 md:px-24 text-xl flex flex-col gap-4 py-6 text-justify">
              <p>
                I’m a software engineer with a strong foundation in both
                frontend and backend development, holding a Bachelor's degree in
                Mathematics. Over the past three years, I’ve honed my skills in
                creating user-centric web applications, utilizing technologies
                like React, Node.js, and Express to build scalable and
                responsive solutions.
              </p>

              <p>
                In my professional journey, I have successfully led the
                development of complex features for fintech platforms and
                contributed to a variety of projects across the technology
                stack. My ability to integrate frontend interfaces with backend
                systems has been pivotal in delivering cohesive, intuitive user
                experiences. I have also demonstrated proficiency in setting up
                projects, optimizing performance, and writing unit tests to
                ensure robust, maintainable code.
              </p>

              <p>
                Passionate about leveraging technology to solve real-world
                problems, I continuously seek to stay updated with the latest
                trends and innovations in software development. I am dedicated
                to driving impactful projects and collaborating effectively
                within dynamic teams to deliver high-quality software solutions.
              </p>

              <p>Let’s build something amazing together!</p>
            </div>
          </div>
        </div>
        <div>
          <Footer />
        </div>
      </div>
      <VerticalName />
    </div>
  );
}

export default About;

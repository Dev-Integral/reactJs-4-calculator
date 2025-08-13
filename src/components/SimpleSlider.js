import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import glade from "../assets/images/glade.png";
import flostev from "../assets/images/flostev.png";
import radioo from "../assets/images/radioo.png";
import nuprex from "../assets/images/nuprex.png";
import web from "../assets/images/web.gif";

export default function SimpleSlider() {
  var settings = {
    dots: true,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true,
    autoplaySpeed: 2500,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const projects = [
    {
      name: "Flostev School",
      image: flostev,
      description:
        "Designed and developed a responsive school website using React and TailwindCSS. The site features an intuitive user interface with sections for academic programs, news updates, gallery and contact information. Focused on delivering a clean, modern design with smooth navigation.",
      link: "https://flostevschool.com",
    },
    {
      name: "Gladefinance",
      image: glade,
      description:
        "GladeFinance is a fintech platform that helps businesses manage payments, invoices, and expenses efficiently. Built with Next.js, React, and TailwindCSS, the platform delivers a fast, responsive, and intuitive user experience through a robust web dashboard tailored for business finance management.",
      link: "https://gladefinance.co",
    },
    {
      name: "Radio O",
      image: radioo,
      description:
        "Built a modern and responsive website for an online radio station using React and TailwindCSS. The platform showcases live audio streaming and real-time updates. Emphasized user experience with a sleek UI, fast load times, and seamless navigation across desktop and mobile devices.",
      link: "https://www.app.getcligohr.com",
    },
    {
      name: "Nuprex",
      image: nuprex,
      description:
        "Nuprex is a logistics platform that allows users to easily send and receive packages within Lagos. Through the Nuprex web application, customers can request deliveries, track packages, and manage their logistics seamlessly. Built using react and tailwindCss",
      link: "https://nuprex.com.ng",
    },
    
  ];
  return (
    <Slider {...settings}>
      {projects.map((project, key) => (
        <div key={key} className="p-4">
          <img
            src={project.image}
            alt="Gladefinance shot"
            className="rounded-tl-md rounded-tr-md shadow"
          />
          <div className="bg-slate-100 p-3 shadow rounded-md">
            <div className="flex items-center justify-between">
              <p className="text-xl p-1 font-bold">{project.name}</p>
              <a href={project.link} target="_blank" rel="noreferrer" className="h-6 w-6 cursor-pointer">
                <img src={web} alt="web" />
              </a>
            </div>
            <p className="text-lg text-justify p-1">{project.description}</p>
          </div>
        </div>
      ))}
    </Slider>
  );
}

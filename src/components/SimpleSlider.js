import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import glade from "../assets/images/glade.png";
import cligohr from "../assets/images/cligohr.png";
import transit from "../assets/images/transit.png";
import portfolio from "../assets/images/portfolio.png";
import myxellia from "../assets/images/myxellia.png";
import web from "../assets/images/web.gif";

export default function SimpleSlider() {
  var settings = {
    dots: true,
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
      name: "Gladefinance",
      image: glade,
      description:
        "Simplified payments and invoice management in one place. Thousands of businesses using Gladefinance to scale their businesses.",
      link: "https://gladefinance.co",
    },
    {
      name: "Cligohr",
      image: cligohr,
      description:
        "A human resource platform that allows applicant the opportunity to support their applications with a video clip to recruiters",
      link: "https://www.app.getcligohr.com",
    },
    {
      name: "Transit",
      image: transit,
      description:
        "A bus hailing service that allows users to navigate laagos easily while conserving resources.",
      link: "https://transitonline.app",
    },
    {
      name: "Portfolio",
      image: portfolio,
      description:
        "Taiwo Ayoola - A passionate Software Engineer, specializing in creating innovative and user-friendly solutions",
      link: "https://taiwoayoola.netlify.app",
    },
    {
      name: "Myxellia",
      image: myxellia,
      description:
        "An ever-evolving tech of interconnected apps & services, built to make real estate work better for all.",
      link: "https://www.myxellia.io",
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
          <div className="bg-slate-100 p-3 md:h-[85px] shadow rounded-md">
            <div className="flex items-center justify-between">
              <p className="text-xl p-1 font-bold">{project.name}</p>
              <a href={project.link} className="h-6 w-6 cursor-pointer">
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

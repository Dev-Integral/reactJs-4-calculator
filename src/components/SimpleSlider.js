import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import glade from "../assets/images/glade.png";
import cligohr from "../assets/images/cligohr.png";
import transit from "../assets/images/transit.png";
import portfolio from "../assets/images/portfolio.png";
import myxellia from "../assets/images/myxellia.png";

export default function SimpleSlider() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true
  };
  const projects = [
    {
      name: "Gladefinance",
      image: glade,
      description: "A web app for managing finances",
      link: "https://gladefinance.herokuapp.com",
    },
    {
      name: "Cligohr",
      image: cligohr,
      description: "A web app for managing finances",
      link: "https://cligohr.herokuapp.com",
    },
    {
      name: "Transit Online",
      image: transit,
      description: "A web app for managing finances",
      link: "https://transit-online.herokuapp.com",
    },
    {
      name: "Portfolio",
      image: portfolio,
      description: "A web app for managing finances",
      link: "jdsk",
    },
    {
      name: "Myxellia",
      image: myxellia,
      description: "A web app for managing finances",
      link: "https://transit-online.herokuapp.com",
    },
  ];
  return (
    <Slider {...settings}>
      {projects.map((project, key) => (
        <div key={key} className="p-4">
          <img src={project.image} alt="Gladefinance shot" className="border" />
          <div className="bg-slate-100 p-2">
            <p className="text-xl p-1">{project.name}</p>
            <p>{project.description}</p>
          </div>
        </div>
      ))}
    </Slider>
  );
}

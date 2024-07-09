import React from "react";
import TopLine from "../components/TopLine";
import { Header } from "../components/Header";
// import glade from "../assets/images/glade.png";
import Footer from "../components/Footer";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

function Projects() {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };

  return (
    <div className="h-screen">
      <div className="flex flex-col justify-between h-full">
        <div>
          <TopLine className={"bg-ta-blue h-4"} />
          <Header />
        </div>
        <div className="relative">
          <div className="flex flex-col md:flex-col items-center ">
            <p className="text-[60px] text-ta-blue font-hammersmith leading-none">
              FEATURED WORK
            </p>
            <div>
              <Carousel
                swipeable={false}
                draggable={false}
                showDots={true}
                responsive={responsive}
                ssr={true} // means to render carousel on server-side.
                infinite={true}
                // autoPlay={this.props.deviceType !== "mobile" ? true : false}
                autoPlaySpeed={1000}
                keyBoardControl={true}
                customTransition="all .5"
                transitionDuration={500}
                containerClass="carousel-container"
                removeArrowOnDeviceType={["tablet", "mobile"]}
                // deviceType={this.props.deviceType}
                dotListClass="custom-dot-list-style"
                itemClass="carousel-item-padding-40-px"
              >
                <div>Item 1</div>
                <div>Item 2</div>
                <div>Item 3</div>
                <div>Item 4</div>
              </Carousel>
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

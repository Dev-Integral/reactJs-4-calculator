import React, { Component } from 'react';

//import projects images
import naija from '../images/projects/9ja-small.png';
import naijaBig from '../images/projects/9ja-big.png';
import calculator from '../images/projects/calc-small.png';
import calculatorBig from '../images/projects/calc-big.png';
import clock from '../images/projects/clock-small.png';
import clockBig from '../images/projects/clock-big.png';
import portfolio from '../images/projects/portfolio-small.png';
import portfolioBig from '../images/projects/portfolio-big.png';
import miniflix from '../images/projects/miniflix-small.png';
import miniflixBig from '../images/projects/miniflix-big.png';
import scBig from '../images/projects/sc-big.png';
import sc from '../images/projects/sc-small.png';

const projects = [
  { image: naija, biggerImage: naijaBig, title: 'Webpage for Nigeria', paragraph: 'Out of love for my country, I hope to depict her beauty in culture and diversity with a website - Built using HTML, CSS and Javascript.', linkToWebpage: '#' },
  { image: calculator, biggerImage: calculatorBig, title: 'clock design', paragraph: 'A calculator for basic arithmetics - Designed using React', linkToWebpage: '#' },
  { image: clock, biggerImage: clockBig, title: 'Javascript Clock', paragraph: 'A clock page designed using react', linkToWebpage: '#' },
  { image: portfolio, biggerImage: portfolioBig, title: 'My Portfolio', paragraph: 'Built using ', linkToWebpage: '#' },
  { image: miniflix, biggerImage: miniflixBig, title: 'Miniflix', paragraph: 'A Website designed to mock Netflix - Built usin Angular framework.', linkToWebpage: '#' },
  { image: sc, biggerImage: scBig, title: 'Soul-connect', paragraph: 'A social dating application - Built using angular framework', linkToWebpage: '#' },

]
class Projects extends Component {
  render() {
    return (
      <div className="slide" id="4">
        <div className="content fourth-content">
          <div className="container-fluid">
            <div className="row">
              {projects.map((project, i) => {
                return (
                  <div className="col-md-4 col-sm-6" {...project} key={i}>
                    <div className="item">
                      <div className="thumb">
                        <a href={project.biggerImage} data-lightbox="image-1">
                          <div className="hover-effect">
                            <div className="hover-content">
                              <h2>{project.title}</h2>
                              <p>{project.paragraph}</p>
                            </div>
                          </div>
                        </a>
                        <div className="image">
                          <img src={project.image} alt="" />
                        </div>
                        <div>
                        <a rel="nofollow" href="https://www.linkedin.com/in/taiwo-ayoola-39439012a" target="_blank">View LinkedIn profile<i className='fa fa-likedin'></i></a>
                        </div>
                      </div>
                    </div>
                  </div>
                )
              })}


            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Projects;
import React, { Component } from 'react';

//import images
import angularLogo from '../images/skills/angular.png';
import htmlLogo from '../images/skills/html logo.png';
import cssLogo from '../images/skills/css3 logo.jpg';
import jsLogo from '../images/skills/js logo.png';
import jqueryLogo from '../images/skills/jquery.png';
import bootstrapLogo from '../images/skills/bootstrap logo.png';
import expressLogo from '../images/skills/express.png';
import loopbackLogo from '../images/skills/loopback.png';
import mongodbLogo from '../images/skills/mongodb.jpg';
import nodeLogo from '../images/skills/node logo.jpg'
import reactLogo from '../images/skills/react logo.png';
import reduxLogo from '../images/skills/redux.png';


class Skills extends Component {
  render() {
    return (
      <div className="slide" id="3">
        <div className="content third-content">
          <div className="container-fluid">
            <div className="col-md-12">
              <div className="row">

                <div className="second-section">
                  <div className="container-fluid">
                    <div className="row">
                      <div className="col-md-6">
                        <div className="left-image">
                        <div><h2>Soft Skills</h2></div>
                          <img src="img/second_service.jpg" alt="second service" />
                          <div className="left-content"><p></p>
                            <p>Soft skill sets includes each of the following but not limited to:</p>
                            <p>
                              <ul>
                                <li>Good communication and writing skills.</li>
                                <li>Critical thinking and analytics.</li>
                                <li>Highly resourceful, diplomatic and perceptive.</li>
                              </ul>
                            </p>
                          </div>        
                        </div>
                      </div>
                      <div className="col-md-6">
                      <div><h2>Technical Skills</h2></div>
                        <div className="right-content">
                          <div className="flex row">
                            <div>
                              <div className="left-content .skillsList">
                                <div className="skills_logo col-md-4" >
                                  <div className="box">
                                    <img src={htmlLogo} alt="html logo" />
                                  </div>
                                </div>
                                <div className="skills_logo col-md-4" >
                                  <div className="box">
                                    <img src={cssLogo} alt="css3 logo" />
                                  </div>
                                </div>
                                <div className="skills_logo col-md-4" >
                                  <div className="box">
                                    <img src={jsLogo} alt="js logo" />
                                  </div>
                                </div>
                                <div className="skills_logo col-md-4" >
                                  <div className="box">
                                    <img src={bootstrapLogo} alt="bootstrap logo" />
                                  </div>
                                </div>
                                <div className="skills_logo col-md-4" >
                                  <div className="box">
                                    <img src={angularLogo} alt="angular logo" />
                                  </div>
                                </div>
                                <div className="skills_logo col-md-4" >
                                  <div className="box">
                                    <img src={reactLogo} alt="react logo" />
                                  </div>
                                </div>
                                <div className="skills_logo col-md-4" >
                                  <div className="box">
                                    <img src={jqueryLogo} alt="jquery logo" />
                                  </div>
                                </div>
                                <div className="skills_logo col-md-4" >
                                  <div className="box">
                                    <img src={expressLogo} alt="express logo" />
                                  </div>
                                </div>
                                <div className="skills_logo col-md-4" >
                                  <div className="box">
                                    <img src={nodeLogo} alt="node logo" />
                                  </div>
                                </div>
                                <div className="skills_logo col-md-4" >
                                  <div className="box">
                                    <img src={reduxLogo} alt="redux logo" />
                                  </div>
                                </div>
                                <div className="skills_logo col-md-4" >
                                  <div className="box">
                                    <img src={loopbackLogo} alt="loopback logo" />
                                  </div>
                                </div>
                                <div className="skills_logo col-md-4" >
                                  <div className="box">
                                    <img src={mongodbLogo} alt="mongodb logo" />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Skills;
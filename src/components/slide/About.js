import React, { Component } from 'react';
import DownloadFile from '../common/DownloadFile';

class About extends Component {
    render() {
        return (
            <div>
                <div className="slide" id="2">
                    <div className="content second-content">
                        <div className="container-fluid">
                            <div className="col-md-6">
                                <div className="left-content">
                                    <h2>About Me</h2>
                                    <p>
                                        I am an accomplished mathematician with keen interest in blending the Art and Mathematical science 
                                        through programming.This has led me to the path of becoming a software engineer. Over time, I've 
                                        acquainted myself with cutting edge technological tools and languages. <br />
                                        More details in the file below.
                                    </p>
                                    <div>
                                        <DownloadFile />
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="right-image">
                                    <img src="img/about_image.jpg" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default About;
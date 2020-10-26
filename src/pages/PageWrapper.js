import React, { Component } from 'react';
import Slides from '../components/Slides';
import Footer from '../components/Footer';
import miniLogo from '../components/images/mini_logo.png';
import logo from '../components/images/logo.png';

class PageWrapper extends Component {
    render() {
        return (
            <div>
                <nav>
                    <div className="logo">
                        <img src={logo} alt="" />
                    </div>
                    <div className="mini-logo">
                        <img src={miniLogo} alt="" />
                    </div>
                    <ul>
                        <li><a href="#1"><i className="fa fa-home"></i> <em>Home</em></a></li>
                        <li><a href="#2"><i className="fa fa-id-card"></i> <em>About</em></a></li>
                        <li><a href="#3"><i className="fa fa-tasks"></i> <em>Skills</em></a></li>
                        <li><a href="#4"><i className="fa fa-image"></i> <em>Projects</em></a></li>
                        <li><a href="#5"><i className="fa fa-envelope"></i> <em>Contact</em></a></li>
                    </ul>
                </nav>
                <Slides />
                <Footer />
                {this.props.children}
            </div>
        )
    }
};
export default PageWrapper;
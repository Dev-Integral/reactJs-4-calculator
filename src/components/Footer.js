import React, { Component } from "react";
import {
	FaGithub,
	FaLinkedinIn,
	FaStackOverflow,
	FaTwitter,
  } from "react-icons/fa";

class Footer extends Component {
  render() {
    return (
      <footer>
        <div className="relative flex items-center justify-between px-24 py-12 gap-6">
          <div className="font-poppins text-xl">&copy;{new Date().getFullYear()}</div>
          <div className="h-1 bg-ta-blue w-full"></div>
          <div className="flex gap-3">
            <p className="h-12 w-12 rounded-full bg-ta-blue flex items-center justify-center text-white text-xl cursor-pointer">
              <a href="https://www.linkedin.com/in/taiwo-ayoola-39239012a">
                <FaLinkedinIn />
              </a>
            </p>
            <p className="h-12 w-12 rounded-full bg-ta-green flex items-center justify-center text-white text-xl cursor-pointer">
              <a href="https://github.com/dev-integral">
                <FaGithub />
              </a>
            </p>
            <p className="h-12 w-12 rounded-full bg-ta-purple flex items-center justify-center text-white text-xl cursor-pointer">
              <a href="https://stackoverflow.com/users/11214588/dev-integral">
                <FaStackOverflow />
              </a>
            </p>
            <p className="h-12 w-12 rounded-full bg-ta-red flex items-center justify-center text-white text-xl cursor-pointer">
              <a href="https://x.com/Dev_Integral">
                <FaTwitter />
              </a>
            </p>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;

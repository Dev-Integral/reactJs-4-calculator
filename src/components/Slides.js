import React, { Component } from 'react';
import Home from './slide/Home';
import About from './slide/About';
import Skills from './slide/Skills';
import Projects from './slide/Projects';
import Contact from './slide/Contact';

class Slides extends Component {
  render() {
    return (
      <div className="slides">
        <Home />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </div>
    )
  }
};

export default Slides;
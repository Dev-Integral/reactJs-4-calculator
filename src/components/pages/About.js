import React, { Component } from 'react';
import Header from '../common/Header';
import image from '../assets/img/about.png'
import Timeline from '../common/Timeline'
import Team from '../common/Team';

class About extends Component{
    render(){
        return(
           <div>
               <Header
                showButton={false}
                image={image}
                title={'We Dope Like That!'}
                subtitle={"Care to join us?"} 
                />
                <Timeline />
                <Team />
           </div> 
        )
    }
}

export default About
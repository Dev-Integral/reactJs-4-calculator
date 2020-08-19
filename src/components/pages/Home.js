import React, { Component } from 'react';
import Header from '../common/Header';
import image from '../assets/img/header-bg.jpg';

import Portfolio from '../common/Portfolio';
import Services from '../common/Services';

class Home extends Component{
    render(){
        return(
            <div>
                <Header
                    showButton={true}
                    image={image}
                    title={'Welcome To Our Studio!'}
                    subtitle={"Its's nice to meet you."} 
                    link={"/#services"}
                    buttonText={'Tell Me More'}
                />
                <Services />
                <Portfolio />
            </div>
        )
    }
}

export default Home;
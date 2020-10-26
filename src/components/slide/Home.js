import React, { Component } from 'react';
import author from '../images/integral.jpg'
class Home extends Component {
    render() {
        return (
            <div className="slide" id="1">
                <div className="content first-content">
                    <div className="container-fluid">
                        <div className="col-md-3">
                            <div className="author-image"><img src={author} alt="Author's Image" /></div>
                        </div>
                        <div className="col-md-9">
                            <h2>AYOOLA TAIWO MORUFF</h2>
                            <p>
                                A fullstack javascript developer with keen interest in web development and designs. 

                            </p>
                            <div className="fb-btn"><a rel="nofollow" href="https://www.linkedin.com/in/taiwo-ayoola-39439012a" target="_blank">View LinkedIn profile<i className='fa fa-likedin'></i></a></div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Home;
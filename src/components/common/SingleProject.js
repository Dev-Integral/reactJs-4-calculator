import React, {Component} from 'react';

class SingleProject extends Component{
    render(){
        return(
                <div className="col-md-4 col-sm-6">
                  <div className="item">
                    <div className="thumb">
                      <a href={this.props.image} data-lightbox="image-1">
                        <div className="hover-effect">
                          <div className="hover-content">
                            <h2>{this.props.title} </h2>
                            <p>{this.props.paragraph}</p>
                          </div>
                        </div>
                      </a>
                      <div className="image">
                        <img src={this.props.biggerImage} alt="" />
                      </div>
                    </div>
                  </div>
                </div>
        )
    }
}

export default SingleProject;
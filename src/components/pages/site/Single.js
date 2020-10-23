import React, { Component } from 'react';
import { connect } from 'react-redux';
import CommentBuilder from '../../common/CommentBuilder';
import Header from '../../common/Header';
import API from '../../../utils/api';
import * as siteActions from '../../../store/actions/siteActions';
import {Link} from 'react-router-dom';

class Single extends Component{

    componentDidMount() {
        this.props.getSinglePost(this.props.match.params.slug, this.props.auth.token )
    }
    render(){
        return(
            <div>
                <Header 
                    showButton={false}
                    image={
                        this.props.site.post.PostImage?
                        this.props.site.post.PostImage.length > 0  ?
                            API.makeFileUrl(this.props.site.post.PostImage[0].url, null)
                            :null
                            : ''
                        }
                    title=''
                    subtitle={this.props.site.post.title}
                />
                <div className="container">
                    <div className="row">
                        <div className="col-md-9">
                            <div className="post-content" dangerouslySetInnerHTML = {{__html: this.props.site.post.content}}></div>
                        </div>
                    </div>
                

                <div className="row">
                    <div className="col-md-12">
                        <h3>Comments</h3>
                        {this.props.auth.token ?
                        <CommentBuilder />
                        : <p>Post a comment? <Link to="/signup">Signup</Link></p>
                        }
                    </div>
                </div>
                <div className="row">
                    {
                        this.props.site.post.Comment ?
                            this.props.site.post.Comment.length > 0 ?
                            this.props.site.post.Comment.map((comment, i)=> {
                                return (
                                    <div className="col-md-12" key={i}>
                                        <h6>{comment.Profile ? comment.Profile.name : ''}</h6>
                                        <p>{comment.content}</p>
                                    </div>
                                )
                            })
                            :null
                        :null
                    }
                </div>
                </div>        
            </div>
        )
    }
}

const mapStateToProps = state => ({
    auth: state.auth,
    site: state.site
});
const mapDispatchToProps = dispatch => ({
    getSinglePost: (slug, token) => {
        dispatch(siteActions.getSinglePostBySlug(slug, token));
    }
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Single);
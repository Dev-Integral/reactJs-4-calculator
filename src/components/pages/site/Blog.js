import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Header from '../../common/Header';
import image from '../../assets/img/about.jpg';
import BlogItem from '../../common/BlogItem';

import * as siteActions from '../../../store/actions/siteActions';

class Blog extends Component {
    componentDidMount() {
        this.props.getPosts(0);
        this.props.getPostsCount();
    };
    render() {
        return (
            <div>
                <Header
                    showButton={false}
                    image={image}
                    title={"Blog"}
                    subtitle={"Read all of our stories"}
                />
                <section className="page-section bg-light">
                    <div className="container">
                        <div className="row">
                            {this.props.site.posts ?
                                this.props.site.posts.length > 0 ?
                                    this.props.site.posts.map((post, postIndex) => {
                                        return (
                                            <BlogItem
                                                post={post}
                                                key={postIndex}
                                            />
                                        )
                                    })
                                    : <p>No post</p>
                                : null
                            }
                        </div>
                        <div className="row">
                            <div className="col-md-12">
                                <div className="text-center">
                                    {
                                        this.props.site.postsCount.count > this.props.site.posts.length ?
                                        <button onClick={e=> {
                                            this.props.getPosts(this.props.site.posts.length);
                                        }} className="btn btn-default">
                                            Load more
                                        </button>
                                        : null
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    site: state.site
});
const mapDispatchToProps = dispatch => ({
    getPosts: (skip) => {
        dispatch(siteActions.getPosts(skip));
    },
    getPostsCount: () => {
        dispatch(siteActions.getPostsCount());
    }
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(withRouter(Blog));
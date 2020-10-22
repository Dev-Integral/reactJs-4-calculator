import React, {Component} from 'react';
import * as SiteActions from '../../store/actions/siteActions';
import {connect} from 'react-redux';
import {withFormik} from 'formik';
import * as Yup from 'yup';
import Field from './Field';

const fields = {name: 'content', elementName: 'input', type: 'text', placeholder:'Write your comment'};

class CommentBuilder extends Component{
    render(){
        return(
            <div>
                <form onSubmit={e=>{
                    e.preventDefault();
                    const comment ={
                        postId: this.props.site.post.id,
                        userId: this.props.auth.user.id,
                        profileId: this.props.auth.profile.id,
                        content: this.props.values.content
                    }
                    this.props.postComment(comment, this.props.auth.token);
                    
                }}>
            <Field
                {...fields} 
                value={this.props.values[fields.name]}
                name={fields.name}
                onChange={this.props.handleChange}
                onBlur={this.props.handleBlur}
                touched={(this.props.touched[fields.name])}
                errors={this.props.errors[fields.name]}
                />
                <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    auth: state.auth,
    site: state.site
});
const mapDispatchToProps = dispatch => ({
    postComment: (comment, token) => {
        dispatch(SiteActions.postComment(comment, token));
    }
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(withFormik({
    mapPropsToValues: () => ({
        content: ''
    }),
    validationSchema: Yup.object().shape({
        content: Yup.string()
            .required('Your comment needs to have a text!')
    }),
    handleSubmit: (values, {props, setSubmitting}) => {
        const comment ={
            postId: props.site.post.id,
            userId: props.auth.user.id,
            profileId: props.auth.profile.id,
            content: values.content
        }
        
        props.postComment(comment, props.auth.token);
    }
})(CommentBuilder));

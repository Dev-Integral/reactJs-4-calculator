import React, {Component} from 'react';

// ReactQuill Text-Editor
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';


// material ui-imports
import Paper from '@material-ui/core/Paper';
import {withStyles} from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';
import {FormikTextField, FormikSelectField} from 'formik-material-fields';
import Button from '@material-ui/core/Button'
import SaveIcon from '@material-ui/icons/Save';
import ImageIcon from '@material-ui/icons/Image';

// form handling
import {withFormik, Form} from 'formik';
import * as Yup from 'yup';
import {connect} from 'react-redux';
import * as AdminActions from '../../../store/actions/adminActions';
import {withRouter} from 'react-router-dom';
import API from '../../../utils/api';

/* global $ */
const styles = theme => ({
    container: {
        margin: theme.spacing(3),
        display: 'flex',
        flexDirection: 'row wrap'

    },
    formControl: {
        margin: theme.spacing()
    },
    leftSide: {
        flex:2,
        height: '100%',
        margin: theme.spacing(1),
        padding: theme.spacing(3)
    },
    rightSide: {
        flex:1,
        height: '100%',
        margin: theme.spacing(1),
        padding: theme.spacing(3)
    },
    save: {
        marginBottom: theme.spacing(3)
    },
    postImage: { 
        width: '100%'
    }

});

class AddPost extends Component{
    componentDidMount(props, state) {
        if(this.props.match.params.view === 'edit' && this.props.match.params.id){
            this.props.getSinglePost(this.props.match.params.id, this.props.auth.token);
        }
        if(this.props.admin.post && this.props.match.params.view==='add') {
            this.props.setValues({title:'',slug:'',content:'',status:false});
        }
    }
    componentDidUpdate(props, state){
        // When redux is updated and route view === add
        if(this.props.match.params.view ==='add' && this.props.admin.posts.filter(p => p.title ===this.props.values.title)>0){
             const post = this.props.admin.posts.filter(p=> p.title === this.props.values.title)[0];
             this.props.history.push('/admin/posts/edit/'+ post.id);
        }
        if(this.props.admin.post.id !== props.admin.post.id){
            this.props.setValues(this.props.admin.post);
        }
    }
    modules= {
        toolbar:[
            ['bold','italic', 'underline', 'strike'],
            [{'header': 1}, {'header' : 2}],
            [{'list': 'ordered'}, {'list': 'bullet'}],
            [{'indent' : '-1'}, {'indent': '-1'}],
            [{'size': ['small', 'medium', 'large', 'huge']}],
            [{'color':[]}, {'background': []}],
            ['image'],
            ['clean']

        ]
    }
    formats = [
        "header",
        'bold', 'italic', 'underline', 'strike', 'blockquote', 'script',
        'list', 'bullet','indent',
        'link', 'image', 'color', 'code-block'
    ]
    uploadImage = (e) => {
        console.log(e.target.files[0]);
        const data = new FormData();
        data.append('file', e.target.files[0], new Date().getTime().toString() + e.target.files[0].name );
        console.log(this.props.auth.user.userId);
        this.props.uploadImage(data, this.props.auth.token, this.props.admin.post.id, this.props.auth.user.userId)
    }
    render(){
        let pageTitle = '';
        if(this.props.match.params.view==='add') {
            pageTitle = 'Add';
        }else{
            pageTitle = 'Edit';
        }

        const {classes} = this.props;
        return(
            <div>
                <h1>{pageTitle} Post</h1>
                <Divider />
                <Form className={classes.container}>
                    <Paper className={classes.leftSide}>
                        <FormikTextField 
                            name = 'title'
                            label='Title'
                            margin='normal'
                            fullWidth
                            onChange={e => 
                                this.props.setFieldValue('slug', e.target.value.toLowerCase().replace(/ /g, '_'))}
                            />
                        <FormikTextField 
                            name = 'slug'
                            label='Slug'
                            margin='normal'
                            />
                        <ReactQuill
                             value={this.props.values.content}
                             modules={this.modules}
                             formats={this.formats}
                             placeholder="Write some cool stuff"
                             onChange={e => {
                                 this.props.setFieldValue('content', e)
                             }}
                        />
                    </Paper>
                    <Paper className={classes.rightSide}>
                        <FormikSelectField 
                            name='status'
                            label='Status'
                            margin='normal'
                            options={[
                              {label: 'unpublished', value: false},
                              {label: 'published', value: true}  
                            ]}
                            fullWidth
                        />
                        <div className={classes.save}>
                            <Button 
                            variant="contained"
                            color="secondary"
                            onClick={e=>{this.props.handleSubmit()}}>
                                <SaveIcon /> Save
                            </Button>
                        </div>
                        {
                            this.props.admin.post.PostImage ?
                            this.props.admin.post.PostImage.length > 0 ?
                            <img src={API.makeFileUrl(this.props.admin.post.PostImage[0].url, this.props.auth.token)} className={classes.postImage} alt="" />
                            : null
                            : null
                        }
                        <div>
                            <Button 
                            variant="contained"
                            color="primary"
                            onClick={e=>{
                                $('.myFile').trigger('click');
                            }}
                            >
                            <ImageIcon />
                            Upload Post Image
                            </Button>
                        </div>
                        <input type="file" style={{display: 'none'}} className='myFile' onChange={this.uploadImage} />
                    </Paper>
                    
                </Form>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        auth: state.auth,
        admin: state.admin
    }
}
const mapDispatchToProps = (dispatch) => ({
    addPost: (post, postId, token) => {
        dispatch(AdminActions.addPost(post, postId, token));
    },
    getSinglePost: (postId, token) => {
        dispatch(AdminActions.getSinglePost(postId, token));
    },
    updatePost(post, postId, token){
        dispatch(AdminActions.updatePost(post, postId, token));
    },
    uploadImage(data, token, userId){
        dispatch(AdminActions.uploadImage(data, token, userId));
    }
});

export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
)(withFormik({
    mapPropsToValues: (props) => ({
        title: props.admin.post.title || '',
        slug: props.admin.post.slug || '',
        createdAt: props.admin.post.createdAt || '',
        content: props.admin.post.content || '',
        status: props.admin.post.status || false
    }),
    validationSchema: Yup.object().shape({
        title: Yup.string().required('Title is Required'),
        slug: Yup.string().required(),
        content: Yup.string().required('Input your message')
    }),
    handleSubmit: (values, {setSubmitting, props}) => {
            if (props.match.params.view === 'edit'){
                console.log(props.admin.post.id);
                props.updatePost(values, props.admin.post.id, props.auth.token);
            }
            else{
                props.addPost(values, props.auth.token);
            }
    }
})(withStyles(styles)(AddPost))));
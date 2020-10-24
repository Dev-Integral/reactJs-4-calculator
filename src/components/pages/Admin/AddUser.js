import React, { Component } from 'react';
//matrial-ui
import Divider from '@material-ui/core/Divider';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import SaveIcon from '@material-ui/icons/Save';
import {withStyles} from '@material-ui/core/styles';

// form handling, connection and DOM
import { Form, withFormik } from "formik";
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import * as Yup from 'yup';
import { FormikTextField } from 'formik-material-fields';
import * as adminActions from '../../../store/actions/adminActions';

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


class AddUser extends Component{
    componentDidMount(props, state) {
        console.log({props: this.props});
        if(this.props.match.params.view === 'edit' && this.props.match.params.id){
            this.props.getSingleUser(this.props.match.params.id, this.props.auth.token);
        }
        if(this.props.admin.user && this.props.match.params.view === 'add'){
            this.props.setValues({name: '', email: '', password: ''});
        }
    }
    componentDidUpdate(props, state) {
        if(this.props.match.params.view ==='add' && this.props.admin.users.filter(u => u.name ===this.props.values.name)>0){
            const user = this.props.admin.user.filter(u=> u.name === this.props.values.name)[0];
            this.props.history.push('/admin/users/edit/'+ user.id);
       }if(this.props.admin.user.id !== props.admin.user.id){
           this.props.setValues(this.props.admin.user);
       }
    }
    render(){
        const {classes} = this.props
        let submitText = 'Save'
        const fields = [
            {name:'name', label: 'name', margin: 'normal', type: 'text'},
            {name:'email', label: 'email', margin: 'normal', type: 'email'},
            {name: 'password', label: 'password', margin: 'normal', type: 'password'},
            {name: 'confirmPassword', label: 'Confirm password', margin: 'normal', type: 'password'}
        ]
        let pageTitle = '';
        
        if (this.props.match.params.view==='add') {
            pageTitle = 'Add';
        }else{
            pageTitle = 'Edit';
        }
        return(
            <div style={{background: '#f1f1f1', padding: '10px'}}>
                <h1>{pageTitle} User</h1>
                <Divider />
                <Form className={classes.container}>
                    <Paper className={classes.leftSide}>
                        {fields.map((field, i) => {
                            return(
                                <div key={i}>
                                    <FormikTextField
                                    {...field}
                                    name={field.name}
                                    type={field.type}
                                    label={field.label}
                                    margin={field.margin}
                                    fullwidth="true"
                                     />
                                </div>
                            )
                        })
                        }
                        <div>
                        <Button
                        variant="contained"
                        color="secondary"
                        onClick={e=>{this.props.handleSubmit()}}>
                            >
                            <SaveIcon /> {submitText}
                        </Button>
                        </div>
                    </Paper>
                </Form>
            </div>
        )
    }
};

const mapStateToProps= (state) => {
    return {
        auth: state.auth,
        admin: state.admin
    }
};
const mapDispatchToProps = (dispatch) => ({
        addUser: (newUserData, token) => {
            dispatch(adminActions.addUser(newUserData, token));
        },
        getSingleUser: (userId, token)=> {
            dispatch(adminActions.getSingleUser(userId, token));
        },
        updateUser: (updatedData, userId, token)=>{
            dispatch(adminActions.updateUser(updatedData, userId, token));
        }
    });

export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
)(withFormik({
mapPropsToValues: (props) => ({
    name: props.admin.user.name || '',
    email: props.admin.user.email || '',
    password: props.admin.user.password || '',
    confirmPassword: props.admin.user.password || ''
}),
validationSchema: Yup.object().shape({
    name: Yup.string().required('Your name is Required'),
    email: Yup.string().email('Supply a valid email').required('Email is required'),
    password: Yup.string().min(8, 'Minimum of 8 Characters').required('Input your message'),
    confirmPassword: Yup.string().required('You need to enter password again').test('pass match', "passwords don't match", function(value){
        const {password} = this.parent;
        return password === value;
    })
}), 
handleSubmit: (values, {setSubmitting, props}) => {
        
        if(props.match.params.view === 'edit'){
            const updatedData = {
                name:values.name, 
                email:values.email, 
                password:values.password
            };
            console.log(updatedData);
            props.updateUser(updatedData, props.admin.user.id, props.auth.token);
        }else{
            const newUserData = values;
            console.log(newUserData);
            props.addUser(newUserData, props.auth.token);
        }
    }
})(withStyles(styles)(AddUser))));
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
        console.log(this.props);
    }

    render(){
        const {classes} = this.props
        const fields = [
            {name:'name', label: 'name', margin: 'normal'},
            {name:'email', label: 'email', margin: 'normal'},
            {name: 'password', label: 'password', margin: 'normal'},
            {name: 'password', label: 'Confirm password', margin: 'normal'}
        ]
        let pageTitle = '';
        
        if (this.props.match.params.view==='add') {
            pageTitle = 'Add';
        }else{
            pageTitle = 'Edit';
        }
        return(
            <div style={{background: 'red'}}>
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
                                    label={field.label}
                                    margin={field.margin}
                                    >

                                    </FormikTextField>
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
                            <SaveIcon /> Save
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
const mapDispatchToProps = (dispatch) => {
    return {
        addUser: (values, token) => {},
        getSingleUser: (userid, token)=> {},
        updateUser: (userId, valuetoken)=>{}
    }
};

export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
)(withFormik({
mapPropsToValues: (props) => ({
    name: '',
    email: '',
    password: ''

}),
validationSchema: Yup.object().shape({
    name: Yup.string().required('Title is Required'),
    email: Yup.string().required(),
    password: Yup.string().required('Input your message')
}),
handleSubmit: (values, {setSubmitting, props}) => {
        if (props.match.params.view === 'edit'){
            console.log(props.admin.post.id);
            props.updateUser(values, props.admin.post.id, props.auth.token);
        }
        else{
            props.addUser(values, props.auth.token);
        }
    }
})(withStyles(styles)(AddUser))));
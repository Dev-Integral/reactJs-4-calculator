import React, {Component} from 'react';
import { withFormik } from 'formik';
import * as Yup from 'yup';
import * as Authactions from '../../store/actions/authActions'
import {connect} from 'react-redux';
import Field from '../common/Field';

const fields=[
    {name: 'email', elementName:'input', type:'email', placeholder:'Enter your Email'},
    {name: 'password', elementName:'input', type:'password', placeholder:'Enter your Password'}
]

class Login extends Component{
    render() {
        return(
            <div className="login-page">
                <div className="container">
                    <div className="login-form">
                        <div className="row">
                            <h1>Login</h1>
                        </div>
                        <div className="row">
                            <form onSubmit={e => {
                                e.preventDefault();
                                this.props.login(this.props.values.email, this.props.values.password)
                                }}>
                                {fields.map((field, i) => {
                                    return (
                                    <div className="col-md-12">
                                         <Field 
                                            {...field} 
                                            key={i}
                                            value={this.props.values[field.name]}
                                            name={field.name}
                                            onChange={this.props.handleChange}
                                            onBlur={this.props.handleBlur}
                                            touched={(this.props.touched[field.name])}
                                            errors={this.props.errors[field.name]}
                                        />
                                </div>)
                                })}
                                <div className="col-md-12">
                                    <button className="btn btn-primary" type="submit">Send</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        ) 
    }
}

const mapStateToProps = state => {
    return {
        auth: state.auth
    }
}

const mapDispatchToProps = dispatch => {
    return {
        login: (email, password) => {
            dispatch(Authactions.login(email, password));
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(withFormik({
    mapPropsToValues: () => ({
        email: '',
        password: ''
    }),
    validationSchema: Yup.object().shape({
        email: Yup.string().email('Supply a valid email').required('Email is required'),
        password: Yup.string().required('Password is required')
    })
})(Login));

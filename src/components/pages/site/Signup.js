import React, {Component} from 'react';
import { withFormik } from 'formik';
import * as Yup from 'yup';
import * as Authactions from '../../../store/actions/authActions'
import {connect} from 'react-redux';
import Field from '../../common/Field';

const fields=[
    {name: 'name', elementName:'input', type:'text', placeholder:'Enter your Name'},
    {name: 'email', elementName:'input', type:'email', placeholder:'Enter your Email'},
    {name: 'password', elementName:'input', type:'password', placeholder:'Enter your Password'},
    {name: 'password2', elementName:'input', type:'password', placeholder:'Enter your password again'}
]

class Signup extends Component{
    render() {
        return(
            <div className="login-page">
                <div className="container">
                    <div className="login-form">
                        <div className="row">
                            <h1>Signup</h1>
                        </div>
                        <div>
                            <form className="row" onSubmit={e => {
                                e.preventDefault();
                                this.props.register(this.props.values.email, this.props.values.name, this.props.values.password)
                                }}>
                                {fields.map((field, i) => {
                                    return (
                                    <div className="col-md-6" key={i}>
                                         <Field 
                                            {...field} 
                                            value={this.props.values[field.name]}
                                            name={field.name}
                                            onChange={this.props.handleChange}
                                            onBlur={this.props.handleBlur}
                                            touched={(this.props.touched[field.name])}
                                            errors={this.props.errors[field.name]}
                                        />
                                    </div>
                                )
                                })}
                                <div className="col-md-12">
                                    <p className="text-danger text-center">{this.props.auth.error || null}</p>
                                    <button className="btn btn-primary" type="submit">Signup</button>
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
        register: (email, name, password) => {
            dispatch(Authactions.register(email, name, password));
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(withFormik({
    mapPropsToValues: () => ({
        email: '',
        name: '',
        password: '',
        password2: ''
    }),
    validationSchema: Yup.object().shape({
        name: Yup.string().required('We need your name'),
        email: Yup.string().email('Supply a valid email').required('Email is required'),
        password: Yup.string().min(8, 'Minimum of 8 characters').required('Password is required'),
        password2: Yup.string().required('You need to enter your password again').test('pass match', 'passwords dont match', function(value){
            const {password} = this.parent;
            console.log({password: password, password2: value})
            return password === value;
        })
    })
})(Signup));

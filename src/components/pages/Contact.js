import React, { Component } from 'react';
import { withFormik } from 'formik';
import Field from '../common/Field';
import * as Yup from 'yup';

const fields = {
    sections: [
        [
            {name: 'name', elementName:'input', type:'text', placeholder: 'Your name*'},
            {name: 'email', elementName:'input', type:'text', placeholder: 'Your Email address*'},
            {name: 'phone', elementName:'input', type:'text', placeholder: 'Your phone number*'}
        ],
        [
            {name: 'message', elementName:'textarea', type:'text', placeholder: 'Type your message*'}
        ]
    ]};

class Contact extends Component{
    
    render(){
        return(
            <div>
                <section className="page-section" id="contact">
                    <div className="container">
                        <div className="text-center">
                            <h2 className="section-heading text-uppercase">Contact Us</h2>
                            <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
                        </div>
                        <form onSubmit={this.props.handleSubmit} name="sentMessage" noValidate="noValidate">
                            <div className="row align-items-stretch mb-5">
                                {fields.sections.map((section, sectionIndex) => {
                                    return (
                                    <div className="col-md-6" key={sectionIndex}>
                                        {section.map((field, i)=>{
                                            return(
                                            <Field 
                                            {...field} 
                                            key={i}
                                            values={this.props.values[field.name]}                                               
                                            name={field.name} 
                                            onChange={this.props.handleChange}
                                            onBlur={this.props.handleBlur}
                                            touched={(this.props.touched[field.name])}
                                            errors={this.props.errors[field.name]}
                                            />)
                                        })}
                                </div>
                                    )
                                })}
                            </div>
                            <div className="text-center">
                                <div id="success"></div>
                                <button 
                                    className="btn btn-primary btn-xl text-uppercase" 
                                    type="submit"
                                >
                                    Send Message
                                </button>
                            </div>
                        </form>
                    </div>
                </section>
            </div>
        );
    }
}

export default withFormik({
    mapPropsToValues: () => ({
        name: '',
        email: '',
        phone: '',
        message: ''
    }),
    validationSchema: Yup.object().shape({
        name: Yup.string()
            .required('You must provide your name.')
            .min(3,'Your name is longer than that'),
        email: Yup.string()
            .email('You need to provide a valid email')
            .required('Your email is required'),
        phone: Yup.string()
            .min(10, 'Phone number too short!')
            .max(10, 'Maximum number exceeded')
            .required('Phone number is required in this form'),
        message: Yup.string()
            .required('Input your message')
    }),
    handleSubmit: (values, {setSubmitting}) => {
        console.log(values);
        alert("You've submitted the form successfully");
    }
})(Contact);
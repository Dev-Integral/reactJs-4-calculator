import React, { Component } from 'react';
import FieldSet from '../common/FieldSet';

const fields = {
    sections: [
        [
            { name: 'name', type: 'text', placeholder: 'Your name', elementName: 'input' },
            { name: 'email', type: 'email', placeholder: 'Your email', elementName: 'input' },
            { name: 'subject', type: 'text', placeholder: 'Subject', elementName: 'input' }
        ],
        [
            { name: 'message', rows: '6', placeholder: 'Your message...', elementName: 'textarea' }
        ]
    ]
}
class Contact extends Component {
    render() {
        return (
            <div className="slide" id="5">
                <div className="content fifth-content">
                    <div className="container-fluid">
                        <div className="col-md-6">
                            <div id="map">
                                <iframe
                                    title="Google Address"
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3647.3030413476204!2d100.5641230193719!3d13.757206847615207!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xf51ce6427b7918fc!2sG+Tower!5e0!3m2!1sen!2sth!4v1510722015945"
                                    width="100%" height="500px" frameborder="0" style={{ border: 0 }} allowfullscreen></iframe>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <form id="contact" action="" method="post">
                                <div className="row">
                                    {
                                        fields.sections.map((section, sectionIndex) => {
                                            return (
                                                <div className="col-md-12" key={sectionIndex}>
                                                    {section.map((field, fieldIndex) => {
                                                        return (< FieldSet
                                                            key={fieldIndex}
                                                            {...field}
                                                        />)
                                                    })}
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                                <div className="col-md-12">
                                    <fieldset>
                                        <button type="submit" id="form-submit" className="btn">Send Now</button>
                                    </fieldset>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Contact;
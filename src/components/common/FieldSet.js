import React, { Component } from 'react';

class FieldSet extends Component {
    render() {
        return (
            <div>
                <fieldset>
                    {
                        this.props.elementName === 'textarea' ?
                            <textarea
                                name={this.props.name}
                                rows={this.props.row}
                                className="form-control"
                                id={this.props.name}
                                placeholder={this.props.placeholder}
                                required="required">
                            </textarea>
                            :
                            <input
                                name={this.props.row}
                                type={this.props.type}
                                className="form-control"
                                id={this.props.name}
                                placeholder={this.props.placeholder}
                                required="required" />
                    }
                </fieldset>
            </div>
        )
    }
}

export default FieldSet;
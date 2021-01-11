import React, { Component } from 'react';

class ContactForm extends Component {
    constructor(props) {
        super(props);
    this.state = {
        name: "",
        email: "",
    };
    
    }
    render() {
        return (
            <div>
                Contact Form
            </div>
        );
    }
}

export default ContactForm
import React, { Component } from 'react';
import NavigationComponent from '../navigation/NavigationBar';
import EscapeButton from '../buttons/escapebutton';
import HotlineButton from '../buttons/hotline';
import PageLogo from '../logo/pagelogo';
import ContactForm from './contact-form';

class Contact extends Component {
    render() {
        return (
            <div className='page-container'>
            <div className='header'>
                <div className='left-side-header'>
                <div className='page-logo'> <PageLogo /> </div>
                <div className='escape-button'> <EscapeButton /> </div>
                <div className='hotline-button'> <HotlineButton /></div>
            </div>
            <div className='right-side-header'>
            <div className='navbar'>  <NavigationComponent /> </div>
            </div>
           
                </div>
            <div className='contact-page-content'>
                <h1>heading</h1>
                <ContactForm />
                
            </div>
            </div>
        );
    }
}

export default Contact;
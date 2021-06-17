import React, { Component } from 'react';
import NavigationComponent from '../navigation/NavigationBar';
import ButtonsComponent from '../buttons/buttons-component';
import PageLogo from '../logo/pagelogo';
import ContactForm from './contact-form';
import PageSocialMedia from '../pagesocialmedia';
import SmallNavDrawer from '../navigation/SmallNavDrawer';


class Contact extends Component {
    render() {
        return (
            <div className='page-container'>
            <div className='header'>
                <div className='left-side-header'>
                <div className='page-logo'> <PageLogo /> </div>
            </div>
            <div className='right-side-header'>
            <div className='navbar'>  <NavigationComponent /> </div>
            <div className='small-drawer'>
            <SmallNavDrawer />
            </div>
            </div>
            <div className='page-heading'>
               <h1 className='AboutUsHeader'>Contact <span style={{color: "#00A6A8", fontFamily: "Roboto"}}> Us</span></h1>
           </div>
                </div>
                <div className='page-content'>
                <div className='buttons-component-contact'>
                  <div className='fixed-buttons'>
                    <ButtonsComponent />
                    </div>
                    {/* <div className='social-media-icons-page'>
               <PageSocialMedia />
                </div> */}
                
                </div>
            <div className='contact-page-content'>
                <ContactForm />
                
            </div>
            </div>
            </div>
        );
    }
}

export default Contact;
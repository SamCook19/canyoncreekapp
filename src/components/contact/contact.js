import React, { Component } from 'react';
import NavigationComponent from '../navigation/NavigationBar';
import ButtonsComponent from '../buttons/buttons-component';
import PageLogo from '../logo/pagelogo';
import ContactForm from './contact-form';


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
            
            </div>
            <div className='page-heading'>
               <h1 className='AboutUsHeader'>Contact <span style={{color: "#00A6A8", fontFamily: "Roboto"}}> Us</span></h1>
           </div>
                </div>
                <div className='page-content'>
                <div className='buttons-component'>
                  <div className='fixed-buttons'>
                    <ButtonsComponent />
                    </div>
                    <div className='social-media-icons-aboutus'>
                <a className='facebook-icon' href='https://www.facebook.com/CCreekServices/'>
                <img  alt="ccs facebook" src="/assets/images/facebook.png"/>
                </a>
                <a className='instagram-icon' href='https://www.instagram.com/ccreekservices/?hl=en'>
                <img  alt="ccs instagram" src="/assets/images/instagram.png"/>
                </a>
                <a className='linkedin-icon' href='https://www.linkedin.com/company/canyon-creek-services/'>
                <img  alt="ccs linkedin" src="/assets/images/linkedin.png"/>
                </a>
                <a className='twitter-icon' href='https://twitter.com/ccreekservices?lang=en'>
                <img  alt="ccs twitter" src="/assets/images/twitter.png"/>
                </a>
                </div>
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
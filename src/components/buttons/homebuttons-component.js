import React, { Component } from 'react';
import ContactButton from './contactbutton';
import HotlineButton from './hotline';
import EscapeButton from './escapebutton';
import BusinessButton from './businessbutton';
import HeroImage from '../homepage/HeroImage';

class HomeButtonsComponent extends Component {
    render() {
        return (
            <div className='homebutton-container'>
            <div className='hero-img'>
                {/* <HeroImage /> */}
            <div className='home-button-group'>
            <div className='escape-button'>
                <EscapeButton />
            </div>
            <div className='hotline-button'>
                <HotlineButton />
            </div>
            <div className='business-button'>
                <BusinessButton />
            </div>
            
            <div className='contact-button'>
                <ContactButton />
            </div>
            </div>
            </div>
            </div>
        );
    }
}

export default HomeButtonsComponent;
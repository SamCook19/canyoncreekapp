import React, { Component } from 'react';
import ContactButton from './contactbutton';
import HotlineButton from './hotline';
import EscapeButton from './escapebutton';
import BusinessButton from './businessbutton';
import BusinessButtonMobile from './BusinessButtonMobile';
import HotlineButtonMobile from './HotlineButtonMobile';
import DonateButton from './donatebutton.js';
import DonateButtonMobile from './donatebuttonmobile';

class ButtonsComponent extends Component {
    render() {
        return (
            <div className='button-group'>
            <div className='desk-button-group'>
            <div className='escape-button'>
                <EscapeButton />
            </div>
            <div className='hotline-button'>
                <HotlineButton />
            </div>
            <div className='business-button'>
                <BusinessButton />
            </div>
            <div className="donate-button-group">
                <DonateButton />
            </div>
            <div className='contact-button'>
                <ContactButton />
            </div>
            </div>
            <div className='mobile-button-group'>
            <div className='escape-button-mobile'>
                <EscapeButton />
            </div>
            
            <div className='hotline-button-mobile'>
                  <HotlineButtonMobile />
            </div>
            <div className='business-button-mobile'>
                      <BusinessButtonMobile />
            </div>
            <div className='business-button-mobile'>
                      <DonateButtonMobile />
            </div>
            
            <div className='contact-button'>
                <ContactButton />
            </div>
            </div>
            </div>
        );
    }
}

export default ButtonsComponent;
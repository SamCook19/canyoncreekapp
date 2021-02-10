import React, { Component } from 'react';
import ContactButton from './contactbutton';
import HotlineButton from './hotline';
import EscapeButton from './escapebutton';
import BusinessButton from './businessbutton';

class ButtonsComponent extends Component {
    render() {
        return (
            <div className='button-group'>
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
        );
    }
}

export default ButtonsComponent;
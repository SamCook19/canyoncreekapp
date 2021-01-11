import React, { Component } from 'react';
import NavigationComponent from '../navigation/NavigationBar';
import EscapeButton from '../buttons/escapebutton';
import HotlineButton from '../buttons/hotline';


class AboutUs extends Component {
    render() {
        return (
            <div className='page-container'>
                <div className='header'>
            <div className='navbar'>  <NavigationComponent /> </div>
                <div className='escape-button'> <EscapeButton /> </div>
                <div className='hotline-button'> <HotlineButton /></div>
                </div>
                <h1>page content</h1>
            </div> 
        );
    }
}

export default AboutUs;
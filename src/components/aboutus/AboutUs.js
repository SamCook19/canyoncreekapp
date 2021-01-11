import React, { Component } from 'react';
import NavigationComponent from '../navigation/NavigationBar';

class AboutUs extends Component {
    render() {
        return (
            <div className='container'>
                <div className='navbar-container'>
                <div className='navbar'>  <NavigationComponent />
                </div>
                <div className='content-container'>
                    this is the about
                </div>
                </div>
            </div> 
        );
    }
}

export default AboutUs;
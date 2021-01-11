import React, { Component } from 'react';
import NavigationComponent from '../navigation/NavigationBar';

class Help extends Component {
    render() {
        return (
            <div className='title-container'>
                <div className='title'><h1>this is the help</h1>
                </div>
                <div className='navbar'>  <NavigationComponent />
                </div>
            </div> 
        );
    }
}

export default Help;
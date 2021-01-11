import React, { Component } from 'react';
import NavigationComponent from '../navigation/NavigationBar';

class Donate extends Component {
    render() {
        return (
            <div className='title-container'>
                <div className='title'><h1>this is the donate</h1>
                </div>
                <div className='navbar'>  <NavigationComponent />
                </div>
            </div> 
        );
    }
}

export default Donate;
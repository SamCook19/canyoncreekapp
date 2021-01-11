import React, { Component } from 'react';
import NavigationComponent from '../navigation/NavigationBar';

class Prevention extends Component {
    render() {
        return (
            <div className='title-container'>
                <div className='title'><h1>this is the prevention</h1>
                </div>
                <div className='navbar'>  <NavigationComponent />
                </div>
            </div> 
        );
    }
}

export default Prevention;
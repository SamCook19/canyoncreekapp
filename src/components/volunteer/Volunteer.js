import React, { Component } from 'react';
import NavigationComponent from '../navigation/NavigationBar';

class Volunteer extends Component {
    render() {
        return (
            <div>
                <h1> This is the volunteer page</h1>
                <NavigationComponent />
            </div>
        );
    }
}

export default Volunteer;
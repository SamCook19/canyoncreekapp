import React, { Component } from 'react';
import SimpleMenu from '../navigation/navigationmenu'


class Homepage extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            isNavbarHidden: true
        };
    }

    render() {
        return (
            <div>
                <h1> This is the homepage </h1>
                <SimpleMenu />
            </div>
        );
    }
}

export default Homepage;
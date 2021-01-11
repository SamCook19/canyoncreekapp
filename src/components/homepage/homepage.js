import React, { Component } from 'react';
import SimpleMenu from '../navigation/navigationmenu';
import CenterPiece from './centerpiece';



class Homepage extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            isNavbarHidden: true
        };
    }

    render() {
        return (
        <div className='homepage-wrapper'>
            <div className='title-menu'>
                <div className='home-menu'><SimpleMenu /> </div>
                <div className='home-center-piece'><CenterPiece /></div>
            </div>

            </div>
        );
    }
}

export default Homepage;
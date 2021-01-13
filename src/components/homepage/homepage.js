import React, { Component } from 'react';
import CenterPiece from './centerpiece';
import LeftCorner from './leftcorner';
import RightCorner from './rightcorner';
import EscapeButton from '../buttons/escapebutton';
import HotlineButton from '../buttons/hotline';
import TemporaryDrawer from '../navigation/navigation-sidebar';


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
            <div className='homepage-header'>
            <div className='left-side-header'>
                <div className='escape-button'> <EscapeButton /> </div>
                <div className='hotline-button'> <HotlineButton /></div>
            </div>
            <div className='right-side-header'> 
            <div className='home-sidebar'><TemporaryDrawer /> </div>
            <div className='contact-button'> Contact Us </div>
            </div>
            </div>
                <div className='home-center-piece'><CenterPiece /></div>
                <div className='home-left-corner'> <LeftCorner /> </div>
                <div className='home-right-corner'><RightCorner /> </div>
               </div>
        );
    }
}

export default Homepage;
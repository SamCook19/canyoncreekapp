import React, { Component } from 'react';
import SimpleMenu from '../navigation/navigationmenu';
import CenterPiece from './centerpiece';
import LeftCorner from './leftcorner';
import RightCorner from './rightcorner';
import CenterSlideshow from '../slideshows/center-footer-slideshow';
import EscapeButton from '../buttons/escapebutton';
import HotlineButton from '../buttons/hotline';


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
            <div className='header-menu'>
                <div className='home-menu'><SimpleMenu /> </div>
                <div className='escape-button'> <EscapeButton /> </div>
                <div className='hotline-button'> <HotlineButton /></div>
            </div>
                <div className='home-center-piece'><CenterPiece /></div>
                <div className='home-left-corner'> <LeftCorner /> </div>
                <div className='home-right-corner'><RightCorner /> </div>
                <div className='home-slideshow'><CenterSlideshow /> </div>
            

            </div>
        );
    }
}

export default Homepage;
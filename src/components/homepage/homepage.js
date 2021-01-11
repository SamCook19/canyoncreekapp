import React, { Component } from 'react';
import SimpleMenu from '../navigation/navigationmenu';
import CenterPiece from './centerpiece';
import LeftCorner from './leftcorner';
import RightCorner from './rightcorner';
import CenterSlideshow from '../slideshows/center-footer-slideshow';


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
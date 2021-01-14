import React, { Component } from 'react';
import HomeLogo from '../logo/homelogo';
import CenterSlideshow from '../slideshows/center-footer-slideshow';

class CenterPiece extends Component {
    render() {
        return (
            <div className='centerpiece-container'>
            <div className='centerpiece-logo'>
                <HomeLogo />
            </div>
            <div className='purposestatement'>
                Communities Free of Domestic Violence and Sexual Assault
            </div>
            <div className='centerpiece-slideshow'>
                <CenterSlideshow />
            </div>
            </div>
        );
    }
}

export default CenterPiece
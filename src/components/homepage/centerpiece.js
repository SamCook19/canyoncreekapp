import React, { Component } from 'react';
import HomeLogo from '../logo/homelogo';

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
            </div>
        );
    }
}

export default CenterPiece
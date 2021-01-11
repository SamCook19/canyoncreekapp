import React, { Component } from 'react';
import Logo from '../logo/logo';

class CenterPiece extends Component {
    render() {
        return (
            <div className='centerpiece-container'>
            <div className='centerpiece-logo'>
                <Logo />
            </div>
            <div className='purposestatement'>
                Communities Free of Domestic Violence and Sexual Assault
            </div>
            </div>
        );
    }
}

export default CenterPiece
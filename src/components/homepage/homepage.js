import React, { Component } from 'react';
import Menu from '../navigation/NavigationBar';
import PageLogo from '../logo/pagelogo';
import RightColumn from './right-column';
import LeftColumn from './left-column';
import HomeButtonsComponent from '../buttons/homebuttons-component';
import CenterPiece from './centerpiece';
// import HeroImage from './HeroImage';

class Homepage extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            isNavbarHidden: true
        };
    }

    render() {
        return (
            <div className='page-container'>
            <div className='header'>
                <div className='left-side-header'>
                <div className='page-logo'> <PageLogo /> </div>
            </div>
            <div className='right-side-header'>
            <div className='navbar'>  <Menu /> </div>
            </div>
            <div className='purposestatement'>
                <CenterPiece />
            </div>
            </div>
            <div className='centerpiece'>
            <div className='homebutton-component'>
                <HomeButtonsComponent />
            </div>
            </div>
                
                <div className='home-page-content'>
                <div className='left-side-column'>
                    <LeftColumn />
                </div>
                <div className='right-side-column'>
                    <RightColumn />
                </div>
                </div>
            </div>
        );
    }
}

export default Homepage;
import React, { Component, useState } from 'react';
import NavigationComponent from '../navigation/NavigationBar';
import PageLogo from '../logo/pagelogo';
import RightColumn from './right-column';
import LeftColumn from './left-column';
import HomeButtonsComponent from '../buttons/homebuttons-component';
import CenterPiece from './centerpiece';
import SimpleModal from '../modals/heroimage-modal';
import MobileModal from '../modals/HeroImageMobileModal';
import SmallNavDrawer from '../navigation/SmallNavDrawer';
import HomepageSocialMedia from '../homepage/homepage-socialmedia';

class Homepage extends Component {
    constructor(props) {
        super(props);
        
    }

    render() {
       

        return (
            <div className='page-container'>
            <div className='header'>
                <div className='left-side-header'>
                <div className='page-logo'> <PageLogo /> </div>
            </div>
            <div className='right-side-header'>
            <div className='navbar'>  <NavigationComponent />
            <div className='small-drawer'>
            <SmallNavDrawer />
            </div>
             </div>
            
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
            <div className="home-modals">
                <div className="desktop-modal">
                <SimpleModal />
                </div>
                <div className="mobile-modal">
                <MobileModal />
                </div>
                </div>
                
                <div className='home-page-content'>
                <div className='left-side-column'>
                    <LeftColumn />
                    
                </div>
                <div className='right-side-column'>
                    <RightColumn />
                </div>
                <div className="small-ad">
                        Website built by Sam Cook
                    </div>
                </div>
                <div className='mobile-social-home'>
                    <HomepageSocialMedia />
                    <div className='sub-form'>
                <a href='https://canyoncreekservices.salsalabs.org/SubscriptionForm'>Join Our Email List</a>
                    <div className="small-ad-mobile">
                        Website built by Sam Cook
                    </div>
                </div>
                </div>
                </div>
        );
    }
}

export default Homepage;
import React, { Component } from 'react';
import Menu from '../navigation/NavigationBar';
import EscapeButton from '../buttons/escapebutton';
import HotlineButton from '../buttons/hotline';
import PageLogo from '../logo/pagelogo';
import RightColumn from './right-column';
import LeftColumn from './left-column';

class Homepage extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            isNavbarHidden: true
        };
    }

    render() {
        return (
            <div className='homepage-container'>
            <div className='header'>
                <div className='left-side-header'>
                <div className='page-logo'> <PageLogo /> </div>
                <div className='escape-button'> <EscapeButton /> </div>
                <div className='hotline-button'> <HotlineButton /></div>
            </div>
            <div className='right-side-header'>
            <div className='navbar'>  <Menu /> </div>
            </div>

            <div className='hero-image'>
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
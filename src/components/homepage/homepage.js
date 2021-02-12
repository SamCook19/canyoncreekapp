import React, { Component, useState } from 'react';
import Menu from '../navigation/NavigationBar';
import PageLogo from '../logo/pagelogo';
import RightColumn from './right-column';
import LeftColumn from './left-column';
import HomeButtonsComponent from '../buttons/homebuttons-component';
import CenterPiece from './centerpiece';
import { Button } from "react-bootstrap";
import { useAuth } from "../../contexts/AuthContext";
import { useHistory } from "react-router-dom";

// import HeroImage from './HeroImage';

function Homepage() {
        const [error, setError] = useState("")
        const { logout } = useAuth()
        const history = useHistory()

       async function handleLogout() {
            setError("")

            try {
                await logout()
                history.push("/login")
            } catch (error) {
                setError('Failed to logout')
            }
        }

        return (
            <div className='page-container'>
            <div className='header'>
                <div className='left-side-header'>
                <div className='page-logo'> <PageLogo /> </div>
            </div>
            <div className='right-side-header'>
            <div className='navbar'>  <Menu /> </div>
            <div className='logout'>
                <Button variant ="link" onClick={handleLogout}>
                    Log Out
                </Button>
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

export default Homepage;
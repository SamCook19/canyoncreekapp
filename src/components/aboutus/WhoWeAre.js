import React, { Component, useState } from 'react';
import NavigationComponent from '../navigation/NavigationBar';
import PageLogo from '../logo/pagelogo';
import ButtonsComponent from '../buttons/buttons-component';



class WhoWeAre extends Component {
    
    render() {
        return (
        <div className='page-container'>
            <div className='header'>
                <div className='left-side-header'>
                <div className='page-logo'> <PageLogo /> </div>
                
            </div>
            <div className='right-side-header'>
            <div className='navbar'>  <NavigationComponent /> </div>
            </div>
           <div className='page-heading'>
               <h1>About <span style={{color: "#00A6A8"}}>Us</span></h1>
           </div>
           <div className='spacer'></div>
                </div>
                <div className='page-content'>
                <div className='buttons-component'>
                    <ButtonsComponent />
                </div>

                    <div className='page-info'> 
                    
                </div>
            </div>
            </div>
        )
    }
}

export default WhoWeAre;
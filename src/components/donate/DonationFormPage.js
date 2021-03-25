import React, { Component } from 'react';
import NavigationComponent from '../navigation/NavigationBar';
import PageLogo from '../logo/pagelogo';
import DonationForm from './donationform';
import ButtonsComponent from '../buttons/buttons-component';
import PageSocialMedia from '../pagesocialmedia';
import SmallNavDrawer from '../navigation/SmallNavDrawer';

class DonationFormPage extends Component {
    render() {
        return (
        <div className='page-container'>
            <div className='header'>
                <div className='left-side-header'>
                <div className='page-logo'> <PageLogo /> </div>
                
            </div>
            <div className='right-side-header'>
            <div className='navbar'>  <NavigationComponent /> <div className='small-drawer'>
            <SmallNavDrawer />
            </div></div>
            </div>
           <div className='page-heading'>
               <h1 className='DonateHeader'><span style={{color: "#00A6A8", fontFamily: "Roboto"}}> Donate </span></h1>
           </div>
                </div>
                <div className='page-content'>
                <div className='buttons-component'>
                    <ButtonsComponent />
                    <div className='social-media-icons-page'>
               <PageSocialMedia />
                </div>
                </div>
                
                    
                    <div className='DonateFormContainer'> 
                    
                    <DonationForm />
                    
                </div>
            </div>
            </div>
        )
    }
}

export default DonationFormPage;
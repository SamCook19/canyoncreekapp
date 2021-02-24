import React, { Component } from 'react';

class LeftColumn extends Component {
    render() {
        
        return (
            <div className='left-column'>
               <div className='quote-slide-show'>
                Cycling quotes 
                </div>
                <div className='social-media-icons'>
                <a className='facebook-icon' href='https://www.facebook.com/CCreekServices/'>
                <img  alt="ccs facebook" src="/assets/images/facebook.png"/>
                </a>
                <a className='instagram-icon' href='https://www.instagram.com/ccreekservices/?hl=en'>
                <img  alt="ccs instagram" src="/assets/images/instagram.png"/>
                </a>
                <a className='linkedin-icon' href='https://www.linkedin.com/company/canyon-creek-services/'>
                <img  alt="ccs linkedin" src="/assets/images/linkedin.png"/>
                </a>
                <a className='twitter-icon' href='https://twitter.com/ccreekservices?lang=en'>
                <img  alt="ccs twitter" src="/assets/images/twitter.png"/>
                </a>
                </div>
            </div>
        );
    }
}

export default LeftColumn;
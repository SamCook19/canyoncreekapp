import React, { Component } from 'react';

class LeftColumn extends Component {
    render() {
        
        return (
            <div className='left-column'>
               <div className='quote-slide-show'>
                Cycling quotes 
                </div>
                <div className='social-media-container'>
                <div className='social-media-icons'>
                <div className='facebook-home'>
                <a className='facebook-icon' href='https://www.facebook.com/CCreekServices/'>
                <img  alt="ccs facebook" src="/assets/images/facebook.png"/>
                </a>
                </div>
                <div className='instagram-home'>
                <a className='instagram-icon' href='https://www.instagram.com/ccreekservices/?hl=en'>
                <img  alt="ccs instagram" src="/assets/images/instagram.png"/>
                </a>
                </div>
                <div className='linkedin-home'>
                <a className='linkedin-icon' href='https://www.linkedin.com/company/canyon-creek-services/'>
                <img  alt="ccs linkedin" src="/assets/images/linkedin.png"/>
                </a>
                </div>
                <div className='twitter-home'>
                <a className='twitter-icon' href='https://twitter.com/ccreekservices?lang=en'>
                <img  alt="ccs twitter" src="/assets/images/twitter.png"/>
                </a>
                </div>
                </div>
                </div>
            </div>
        );
    }
}

export default LeftColumn;
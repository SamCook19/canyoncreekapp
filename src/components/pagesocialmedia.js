import React, { Component } from 'react';

class PageSocialMedia extends Component {
    state = {
        facebook: "/assets/images/facebook.png",
        instagram: "/assets/images/instagram.png",
        linkedin: "/assets/images/linkedin.png",
        twitter: "/assets/images/twitter.png"
      }

    render() {
        
        return (
            <div className='social-media-icons-page'>
                <div className='facebook-page'>
                <a className='facebook-icon-page' href='https://www.facebook.com/CCreekServices/'>
                <img class='facebook-main-page' alt="ccs facebook" src={this.state.facebook} onMouseEnter={() => {
                    this.setState({
                        facebook:"/assets/images/facebookalt.png"
                    })
                }} 
                onMouseOut ={() => {
                    this.setState({
                        facebook: "/assets/images/facebook.png"
                    })
                }}

                />
                </a>
                </div>
                <div className='instagram-page'>
                <a className='instagram-icon-page' href='https://www.instagram.com/ccreekservices/?hl=en'>
                <img class='instagram-main-page' alt="ccs instagram" src={this.state.instagram} onMouseEnter={() => {
                    this.setState({
                        instagram:"/assets/images/instagramalt.png"
                    })
                }} 
                onMouseOut ={() => {
                    this.setState({
                        instagram: "/assets/images/instagram.png"
                    })
                }}

                />
                </a>
                </div>

                <div className='linkedin-page'>
                <a className='linkedin-icon-page' href='https://www.linkedin.com/company/canyon-creek-services/'>
                <img class='linkedin-main-page' alt="ccs linkedin" src={this.state.linkedin} onMouseEnter={() => {
                    this.setState({
                        linkedin:"/assets/images/linkedinalt.png"
                    })
                }} 
                onMouseOut ={() => {
                    this.setState({
                        linkedin: "/assets/images/linkedin.png"
                    })
                }}

                />
                </a>
                </div>

                <div className='twitter-page'>
                <a className='twitter-icon-page' href='https://twitter.com/ccreekservices?lang=en'>
                <img class='twitter-main-page' alt="ccs twitter" src={this.state.twitter} onMouseEnter={() => {
                    this.setState({
                        twitter:"/assets/images/twitteralt.png"
                    })
                }} 
                onMouseOut ={() => {
                    this.setState({
                        twitter: "/assets/images/twitter.png"
                    })
                }}

                />
                </a>
                </div>
                
            </div>
        );
    }
}

export default PageSocialMedia;
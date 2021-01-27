import React, { Component } from 'react';
import {Helmet} from "react-helmet";

class DonationForm extends Component {
    render() {
        return (
            <div className="donationform">
                <iframe className="volunteer-signin-form"
        src="https://default.salsalabs.org/api/widget/template/190efb5c-b7fa-4ada-a594-4938c2842d56/?tId=962af127-22e0-4887-84e1-688e25fb8385" style=
        
        {{height:"400px",
        
        width:"600px"}}>
        </iframe>
            </div>
        );
    }
}

export default DonationForm;
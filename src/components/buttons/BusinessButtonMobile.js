import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const BusinessButtonMobile = () => {
    return (
        <div className="button__business">
            <a href="tel:+14358679411">
                <div className="phone-symbol">
            <FontAwesomeIcon icon='phone'>
            
            </FontAwesomeIcon>
            </div>
            <div className="mobile-label">
                Business 435.867.9411
            </div>
            </a>
        </div>
    )
}

export default BusinessButtonMobile;
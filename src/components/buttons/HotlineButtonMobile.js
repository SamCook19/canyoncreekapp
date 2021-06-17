import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const HotlineButtonMobile = () => {
    return (
        <div className="button__hotline">
            <a href="tel:+14352335732">
                <div className="phone-symbol">
            <FontAwesomeIcon icon='phone'>
            
            </FontAwesomeIcon>
            </div>
            <div className="mobile-label">
                Hotline 435.233.5732
            </div>
            </a>
        </div>
    )
}

export default HotlineButtonMobile;
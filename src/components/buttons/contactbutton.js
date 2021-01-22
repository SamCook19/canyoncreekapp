import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ContactButton = () => {
    return (
        <div className='button__contact'>
        <a onClick={console.log("trying to go to contact")}>
        <FontAwesomeIcon icon="envelope"/>
        </a>
        </div>
    )
} 

export default ContactButton;
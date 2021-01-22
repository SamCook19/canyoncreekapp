import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from 'react-router-dom';

const ContactButton = () => {
    return (
        <div className='button__contact'>
        <NavLink to="/contact" activeClassName="nav-link-active">
        <FontAwesomeIcon icon="envelope"/>
        </NavLink>
        </div>
    )
} 

export default ContactButton;
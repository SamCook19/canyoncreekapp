import React from "react";
import axios from "axios";
import { withRouter } from "react-router";
import { NavLink } from "react-router-dom";

const NavigationComponent = props => {
    const dynamicLink = (route, linkText) => {
        return (
            <div className='nav-link-wrapper'>
                <NavLink to={route} activeClassName="nav-link-active">
                    {linkText}
                </NavLink>
            </div>
        );
    }
}
import React from "react";
import { withRouter } from "react-router";
import { NavLink } from "react-router-dom";

const NavigationComponent = props => {
  const dynamicLink = (route, linkText) => {
    return (
      <div className="nav-link-wrapper">
        <NavLink to={route} activeClassName="nav-link-active">
          {linkText}
        </NavLink>
      </div>
    );
  };

  return (
    <div className="nav-wrapper">
        <div className="nav-link-wrapper">
          <NavLink exact to="/" activeClassName="nav-link-active">
            Home
          </NavLink>
        </div>

        <div className="nav-link-wrapper">
          <NavLink to="/about" activeClassName="nav-link-active">
            About Us
          </NavLink>
        </div>

        <div className="nav-link-wrapper">
          <NavLink to="/help" activeClassName="nav-link-active">
            Help
          </NavLink>
        </div>

        <div className="nav-link-wrapper">
          <NavLink to="/prevention" activeClassName="nav-link-active">
            Prevention
          </NavLink>
        </div>

        <div className="nav-link-wrapper">
          <NavLink to="/donate" activeClassName="nav-link-active">
            Donate
          </NavLink>
        </div>
        
        <div className="nav-link-wrapper">
          <NavLink to="/volunteer" activeClassName="nav-link-active">
            Volunteer
          </NavLink>
        </div>

        <div className="nav-link-wrapper">
          <NavLink to="/blog" activeClassName="nav-link-active">
            Blog
          </NavLink>
        </div>

      </div>
  );
};

export default withRouter(NavigationComponent);
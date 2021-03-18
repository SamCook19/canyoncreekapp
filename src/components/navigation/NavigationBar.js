import React from "react";
import { withRouter } from "react-router";
import { NavLink } from "react-router-dom";
import { CSSTransitionGroup } from 'react-transition-group'
import ContactButton from '../buttons/contactbutton';
import Nav from 'react-bootstrap/Nav';
import { Navbar, NavDropdown } from 'react-bootstrap/Navbar';

class AboutUsSubmenu extends React.Component {
  render() {
    return (
      <ul className="nav__submenu">
        <div className="nav__submenu-item ">
        <NavLink to="/whoweare" activeClassName="nav-link-active">
            Who We Are
          </NavLink>
        </div>
        <div className="nav__submenu-item ">
        <NavLink to="/organization" activeClassName="nav-link-active">
            Organizational Leadership
          </NavLink>
        </div>
        <div className="nav__submenu-item ">
        <NavLink to="/financials" activeClassName="nav-link-active">
            Financials
          </NavLink>
        </div>
        <div className="nav__submenu-item ">
          <NavLink to="/employmentopportunities" activeClassName="nav-link-active">Employment Opportunities</NavLink>
        </div>
        <div className="nav__submenu-item ">
        <NavLink to="/annualreport" activeClassName="nav-link-active">
            Annual Report
          </NavLink>
        </div>
      </ul>
    )
  }
}

class PreventSubmenu extends React.Component {
  render() {
    return (
      <ul className="nav__submenu">
        <div className="nav__submenu-item ">
        <NavLink to="/coalition" activeClassName="nav-link-active">
            Coalition
          </NavLink>
        </div>
        <div className="nav__submenu-item ">
        <NavLink to="/prevention" activeClassName="nav-link-active">
            Prevention
          </NavLink>
        </div>
      </ul>
    )
  }
}

class DonateSubmenu extends React.Component {
  render() {
    return (
      <ul className="nav__submenu">
        <div className="nav__submenu-item ">
        <NavLink to="/supporters" activeClassName="nav-link-active">
            Our Supporters
          </NavLink>
        </div>
        <div className="nav__submenu-item ">
        <NavLink to="/donationform" activeClassName="nav-link-active">
           Donation Form
          </NavLink>
        </div>
      </ul>
    )
  }
}

class Menu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showAboutMenu: false
    };
  }
  
  handleHover = (event) => {
    this.setState({ showAboutMenu: true });
  };
  
  handleLeave = (event) => {
    this.setState({ showAboutMenu: false });
  };

  
  render() {
    return (
      
      <nav className="nav">
        <ul className="nav__menu">
          <div
            className="nav__menu-item"
            onMouseLeave={this.handleLeave}
          >
            <a onMouseEnter={this.handleHover}>
              About Us</a>
            <div className="submenu-container-about">
              <CSSTransitionGroup
                transitionName="slide"
                transitionEnterTimeout={300}
                transitionLeaveTimeout={300}
              >
                { this.state.showAboutMenu && <AboutUsSubmenu /> }
              </CSSTransitionGroup>
            </div>
          </div> 
          <div
            className="nav__menu-item"
            onMouseLeave={this.handleLeave}
          >
            <NavLink to="/donate"  onMouseEnter={this.handleHover}>
              Donate </NavLink>
              <div className="submenu-container">
              <CSSTransitionGroup
                transitionName="slide"
                transitionEnterTimeout={300}
                transitionLeaveTimeout={300}
              >
                { this.state.showAboutMenu && <DonateSubmenu /> }
              </CSSTransitionGroup>
            </div>
          </div>
          
          <div
            className="nav__menu-item"
            onMouseLeave={this.handleLeave}
          >
            <a onMouseEnter={this.handleHover}>
              Prevent Violence</a>
              <div className="submenu-container">
              <CSSTransitionGroup
                transitionName="slide"
                transitionEnterTimeout={300}
                transitionLeaveTimeout={300}
              >
                { this.state.showAboutMenu && <PreventSubmenu /> }
              </CSSTransitionGroup>
            </div>
          </div>
          <NavLink to="/help" activeClassName="nav-link-active" className='HelpForSurvivorsLink'>
            Help for Survivors
          </NavLink>
          
          <div className="nav__menu-item">
          <NavLink to="/volunteer" activeClassName="nav-link-active">
            Volunteer
          </NavLink>
          </div>
          <div className="nav__menu-item">
         
          </div>
          
          {/* <div className="blog-link">
          <NavLink to="/blog" activeClassName="nav-link-active">
            Blog
          </NavLink>
          </div> */}
          
        </ul>
        <div className="blog-link">
          <NavLink to="/blog" activeClassName="nav-link-active">
            Blog
          </NavLink>
          </div>
      </nav>

    )
  }
}

export default Menu;

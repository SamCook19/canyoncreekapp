import React from "react";
import { withRouter } from "react-router";
import { NavLink } from "react-router-dom";
import { CSSTransition }  from 'react-transition-group';

class AboutUsSubmenu extends React.Component {
  render() {
    return (
      <ul className="nav__submenu">
        <li className="nav__submenu-item ">
          <a>Who We Are</a>
        </li>
        <li className="nav__submenu-item ">
          <a>Organizational Leadership</a>
        </li>
        <li className="nav__submenu-item ">
          <a>Financials</a>
        </li>
        <li className="nav__submenu-item ">
          <a>Employment Opportunities</a>
        </li>
        <li className="nav__submenu-item ">
          <a>Annual Report</a>
        </li>
      </ul>
    )
  }
}

class PreventSubmenu extends React.Component {
  render() {
    return (
      <ul className="nav__submenu">
        <li className="nav__submenu-item ">
          <a>Our Company</a>
        </li>
      </ul>
    )
  }
}

class DonateSubmenu extends React.Component {
  render() {
    return (
      <ul className="nav__submenu">
        <li className="nav__submenu-item ">
          <a>Our Supporters</a>
        </li>
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
  
  handleHover = () => {
    this.setState({ showAboutMenu: true });
  };
  
  handleLeave = () => {
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
            { this.state.showAboutMenu && <AboutUsSubmenu /> }
          </div>
          <div className="nav__menu-item">
            <a>Volunteer</a>
          </div>
          <div className="nav__menu-item">
            <a>Help For Survivors</a>
          </div>
          <div
            className="nav__menu-item"
            onMouseLeave={this.handleLeave}
          >
            <a onMouseEnter={this.handleHover}>
              Donate</a>
            { this.state.showAboutMenu && <DonateSubmenu /> }
          </div>
          <div className="nav__menu-item">
            <a>Blog</a>
          </div>
          <div
            className="nav__menu-item"
            onMouseLeave={this.handleLeave}
          >
            <a onMouseEnter={this.handleHover}>
              Prevention</a>
            { this.state.showAboutMenu && <PreventSubmenu /> }
          </div>
        </ul>
      </nav>
    )
  }
}


export default Menu;

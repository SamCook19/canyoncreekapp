import React from "react";
import { NavLink } from "react-router-dom";
import { CSSTransitionGroup } from 'react-transition-group';
import MediaQuery from 'react-responsive';


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
        <NavLink to="/prevention" activeClassName="nav-link-active">
            Prevention
          </NavLink>
        </div>
        <div className="nav__submenu-item ">
        <NavLink to="/coalition" activeClassName="nav-link-active">
            Coalition
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
        <NavLink to="/donate" activeClassName="nav-link-active">
            Why Donate
            </NavLink>
        </div>
        <div className="nav__submenu-item">
          <a href="https://canyoncreekservices.salsalabs.org/2021websitecurrentneedslist">Current Needs</a>
        </div>
        <div className="nav__submenu-item">
          <a href=" https://canyoncreekservices.salsalabs.org/3rdAnnualMasquerade2021/index.html">Annual Gala</a>
        </div>
      </ul>
    )
  }
}


class NavigationComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showAboutMenu: false
    };
  }
  
  handleHover = (event) => {
    this.setState({ showAboutMenu: true });
  };

  handleDonate = () => {
    window.location.href = "https://canyoncreekservices.salsalabs.org/2021websitegeneraldonationform"
  }
  
  handleLeave = (event) => {
    this.setState({ showAboutMenu: false });
  };

  
  render() {
    return (
      <div className='navmediacontainer'>
      <div className='navlargecontainer'>
      <MediaQuery  minWidth={1500}>
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
            <a onMouseEnter={this.handleHover} onClick={this.handleDonate}>
              Support Us </a>
              <div className="submenu-container-donate">
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
              <div className="submenu-container-prevent">
              <CSSTransitionGroup
                transitionName="slide"
                transitionEnterTimeout={300}
                transitionLeaveTimeout={300}
              >
                { this.state.showAboutMenu && <PreventSubmenu /> }
              </CSSTransitionGroup>
            </div>
          </div>
          <div className='nav__menu-item'>
          <NavLink to="/help" activeClassName="nav-link-active" className='HelpForSurvivorsLink'>
            Help for Survivors
          </NavLink>
          </div>
          
          <div className="nav__menu-item">
          <NavLink to="/volunteer" activeClassName="nav-link-active">
            Volunteer
          </NavLink>
          </div>
          <div className="nav__menu-item">
          <NavLink to="/blog" activeClassName="nav-link-active">
            Blog
          </NavLink>
          </div>
        
         
        </ul>
      </nav>
      </MediaQuery> 
      </div>

      <div className='navmediacontainer'>
      <MediaQuery maxWidth={1499} minWidth={1035}>
      <nav className="nav-medium">
      <ul className="nav__menu-medium">
          
          <div 
            className="nav__menu-item-medium"
            onMouseLeave={this.handleLeave}
          >
            <a onMouseEnter={this.handleHover}>
              About Us</a>
            <div className="submenu-container-about-medium">
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
            className="nav__menu-item-medium"
            onMouseLeave={this.handleLeave}
          >
            <a onMouseEnter={this.handleHover} onClick={this.handleDonate}>
              Support Us </a>
              <div className="submenu-container-medium">
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
            className="nav__menu-item-medium"
            onMouseLeave={this.handleLeave}
          >
            <a onMouseEnter={this.handleHover}>
              Prevent Violence</a>
              <div className="submenu-container-medium">
              <CSSTransitionGroup
                transitionName="slide"
                transitionEnterTimeout={300}
                transitionLeaveTimeout={300}
              >
                { this.state.showAboutMenu && <PreventSubmenu /> }
              </CSSTransitionGroup>
            </div>
          </div>
          <div className='nav__menu-item-medium'>
          <NavLink to="/help" activeClassName="nav-link-active" className='HelpForSurvivorsLink'>
            Help for Survivors
          </NavLink>
          </div>
          
          <div className="nav__menu-item-medium">
          <NavLink to="/volunteer" activeClassName="nav-link-active">
            Volunteer
          </NavLink>
          </div>
          <div className="nav__menu-item-medium">
          <NavLink to="/blog" activeClassName="nav-link-active">
            Blog
          </NavLink>
          </div>
        
          
        </ul>
      </nav>
      </MediaQuery> 
      </div>
      </div>
    )
  }
}

 

export default NavigationComponent;

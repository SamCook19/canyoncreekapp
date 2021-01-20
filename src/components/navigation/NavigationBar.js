import React from "react";
import { withRouter } from "react-router";
import { NavLink } from "react-router-dom";
import { CSSTransition }  from 'react-transition-group';


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
      </ul>
    )
  }
}

class DonateSubmenu extends React.Component {
  render() {
    return (
      <ul className="nav__submenu">
        <div className="nav__submenu-item ">
        <NavLink to="/oursupporters" activeClassName="nav-link-active">
            Our Supporters
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
          <NavLink to="/volunteer" activeClassName="nav-link-active">
            Volunteer
          </NavLink>
          </div>
          <div className="nav__menu-item">
          <NavLink to="/help" activeClassName="nav-link-active">
            Help For Survivors
          </NavLink>
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
          <NavLink to="/blog" activeClassName="nav-link-active">
            Blog
          </NavLink>
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


// const NavigationComponent = props => {
//   const dynamicLink = (route, linkText) => {
//     return (
//       <div className="nav-link-wrapper">
//         <NavLink to={route} activeClassName="nav-link-active">
//           {linkText}
//         </NavLink>
//       </div>
//     );
//   };

  

//   return (
//     <div className="nav-wrapper">

//         <div className="nav-link-wrapper">
//           <NavLink to="/about" activeClassName="nav-link-active">
//             About Us
//           </NavLink>
//         </div>

//         <div className="nav-link-wrapper">
//           <NavLink to="/help" activeClassName="nav-link-active">
//             Help
//           </NavLink>
//         </div>

//         <div className="nav-link-wrapper">
//           <NavLink to="/prevention" activeClassName="nav-link-active">
//             Prevention
//           </NavLink>
//         </div>

//         <div className="nav-link-wrapper">
//           <NavLink to="/donate" activeClassName="nav-link-active">
//             Donate
//           </NavLink>
//         </div>
        
//         <div className="nav-link-wrapper">
//           <NavLink to="/volunteer" activeClassName="nav-link-active">
//             Volunteer
//           </NavLink>
//         </div>

//         <div className="nav-link-wrapper">
//           <NavLink to="/blog" activeClassName="nav-link-active">
//             Blog
//           </NavLink>
//         </div>

//       </div>
//   );
// };

// export default withRouter(NavigationComponent);
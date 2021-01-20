import React from "react";
import { withRouter } from "react-router";
import { NavLink } from "react-router-dom";
import { CSSTransition }  from 'react-transition-group';


class AboutUsSubmenu extends React.Component {
  render() {
    return (
      <ul className="nav__submenu">
        <div className="nav__submenu-item ">
          <a>Who We Are</a>
        </div>
        <div className="nav__submenu-item ">
          <a>Organizational Leadership</a>
        </div>
        <div className="nav__submenu-item ">
          <a>Financials</a>
        </div>
        <div className="nav__submenu-item ">
          <a>Employment Opportunities</a>
        </div>
        <div className="nav__submenu-item ">
          <a>Annual Report</a>
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
          <a>Coalition</a>
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
          <a>Our Supporters</a>
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
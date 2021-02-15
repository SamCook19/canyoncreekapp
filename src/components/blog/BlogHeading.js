import React, { Component } from 'react';
import {Navbar, NavbarBrand, Nav, NavItem, NavLink, UncontrolledDropdown, DropdownToggle, DropdownItem, DropdownMenu, Collapse, NavbarToggler} from 'reactstrap';


class BlogHeading extends Component {
    constructor(props) {
        super(props);
        this.state={
            isOpen: false
        }
    }

    toggle = () => {
        this.setState({
             isOpen: !this.state.isOpen
        })
    }

    render() {
        return (
            <div>
            <Navbar >
                <NavbarBrand href='/blog'>Blog</NavbarBrand>
                <NavbarToggler onClick={this.toggle}/>
                <Collapse isOpen={this.state.isOpen} navbar>
                    <Nav className="mr-auto" navbar>
                    <NavItem>
                        <NavLink href='/newarticle'>New Article</NavLink>
                        </NavItem>
                        </Nav>
                </Collapse>
            </Navbar>
            </div>
        );
    }
}

export default BlogHeading;
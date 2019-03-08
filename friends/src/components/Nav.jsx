import React, { Component } from "react";
import {
	Collapse,
	Navbar,
	NavbarToggler,
	Nav,
	NavItem,
	NavLink
} from "reactstrap";
import { Link } from "react-router-dom";

export default class NavTop extends Component {
	constructor(props) {
		super(props);

		this.toggleNavbar = this.toggleNavbar.bind(this);
		this.state = {
			collapsed: true
		};
	}

	toggleNavbar() {
		this.setState({
			collapsed: !this.state.collapsed
		});
	}
	render() {
		return (
			<div>
				<Navbar color='faded' light>
					<Link to='/' className='mr-auto'>
						Friends
					</Link>
					<NavbarToggler onClick={this.toggleNavbar} className='mr-2' />
					<Collapse isOpen={!this.state.collapsed} navbar>
						<Nav navbar>
							<NavItem>
								<NavLink href='/components/'>Item </NavLink>
							</NavItem>
							<NavItem>
								<NavLink href='https://github.com/reactstrap/reactstrap'>
									More
								</NavLink>
							</NavItem>
						</Nav>
					</Collapse>
				</Navbar>
			</div>
		);
	}
}

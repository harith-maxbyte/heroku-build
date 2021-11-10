import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import { Toolbar, IconButton, Typography, Hidden, TextField, InputAdornment, Tooltip } from '@material-ui/core';
import { FiSearch, FiMenu, FiXCircle } from "react-icons/fi";
import { logout } from "../../../../store/actions/session";
import { withRouter } from "react-router";

// Component styles
import styles from './styles';

class Topbar extends Component {
	static defaultProps = { 
		title: 'Dashboard',
		isSidebarOpen: false
	};
	static propTypes = {
		children: PropTypes.node,
		classes: PropTypes.object.isRequired,
		isSidebarOpen: PropTypes.bool,
		title: PropTypes.string,
	};



	handleSignOut = async () => {
		this.props.dispatch(logout(this))
	};

	render() {
		const {
			classes,
			ToolbarClasses,
			children,
			isSidebarOpen,
			onToggleSidebar
		} = this.props;
		let title = '';
		const path = window.location.pathname;
		const data = [
			{ id: 1, title: 'Dashboard', href: '/admin/dashboard' },
			{ id: 2, title: 'Products', href: '/admin/products' },
			// { id: 3, title: 'Add Product', href: '/admin/products/add' },
			{ id: 3, title: 'Products', href: '/admin/Products/list' },
			{ id: 3, title: 'Orders', href: '/admin/orders' },
			{ id: 3, title: 'Orders', href: '/admin/orders/list' },
			{ id: 3, title: 'Customers', href: '/admin/customers' },
		]

		let header = data.find(item => item.href === path);
		
		if (header !== undefined) {
			title = header.title;
		}

		return (
			<div className={`${classes.root} , ${ToolbarClasses}`}>
				<Toolbar className={classes.toolbar}>
					<Hidden mdUp>
						<div className={classes.brandWrapper}>
							<IconButton
								className={classes.menuButton}
								aria-label="Menu"
								onClick={onToggleSidebar}>
								{isSidebarOpen ? <FiXCircle size={25} color="#000" /> : <FiMenu size={25} color="#000" />}
							</IconButton>
						</div>
					</Hidden>
					<Typography className={classes.title}>
						{title}
					</Typography>
					<Hidden mdDown>
						<div className={classes.row}>
							<TextField
								placeholder={
									title === "Orders" ? "search orders":
									title === "Products" ? "search products":
									title === "Customers" ? "search customers":
									title === "Tickets" ? "search tickets":
	                                title === "Settings" ? "search users":			
									title === "Promotions" ? "search settings":
									title === "O&M" ? "search vendors":
									title === "Dashboard"? "search":""
								}
								variant="filled"
								InputProps={{
									classes: { input: classes.inputStyle, underline: classes.underline, root: classes.inputRoot },
									startAdornment: (
										<InputAdornment position="start">
											<FiSearch size={20} color="#57B78C" style={{ marginTop: -15 }} />
										</InputAdornment>
									)
								}}
								autoComplete="off"
							/>
							<div className={classes.verticalDivider} />
							<div style={{ display: "flex", justifyContent: 'center', alignItems: "center" }}>
								<Typography className={classes.nameText}>Jones Ferdinand</Typography>
							</div>
							<Tooltip title="Logout">
								<button style={{  border: "0px solid transparent", background: "none", cursor: "pointer" }} onClick={this.handleSignOut}>
									<div style={{ display: "flex", justifyContent: 'center', alignItems: "center" }}>
										<img alt="user" src="https://pyxis.nymag.com/v1/imgs/654/1f1/08de774c11d89cb3f4ecf600a33e9c8283-24-keanu-reeves.rsquare.w700.jpg" className={classes.userimage} />
									</div>
								</button>
							</Tooltip>
						</div>
					</Hidden>

				</Toolbar>
				{children}
			</div>
		);
	}
}
const mapStateToProps = state => ({

});
export default connect(mapStateToProps)(withStyles(styles)(withRouter(Topbar)));

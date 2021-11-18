import React, { Component, Fragment } from 'react';
import { withStyles } from '@material-ui/core/styles';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import { Drawer, Snackbar } from '@material-ui/core';
import { Sidebar, Topbar } from './components';
import {Alert} from '@material-ui/lab';
import { connect } from "react-redux";
import { compose } from "redux";
import styles from './styles';
import useMediaQuery from '@material-ui/core/useMediaQuery'
import { ALERT_DETAIL } from "../../store/types/index";
import AddProductTopbar from './components/AddProductTopbar';
export const withMediaQuery = (queries = []) => Component => props => {
	const mediaProps = {}
	queries.forEach(q => {
		mediaProps[q[0]] = useMediaQuery(q[1])
	})
	return <Component {...mediaProps} {...props} />
}

class AdminLayout extends Component {
	constructor(props) {
		super(props);
		this.wrapper = React.createRef()
		this.state = {
			isOpen: true
		};
	}

	static defaultProps = {
		isSidebarOpen: true
	};

	static propTypes = {
		children: PropTypes.node,
		isSidebarOpen: PropTypes.bool,
		title: PropTypes.string
	};

	handleToggleOpen = () => {
		this.setState(state => ({
			isOpen: !state.isOpen,
		}));
	};

	handleClose = () => {
		this.setState({ isOpen: false });
	};
	
	render() {
		const { isOpen } = this.state;
		const { title, children, classes, isDesktop } = this.props;
		const shouldOpenSidebar = isOpen;


		return (
			<Fragment>
				{ (window.location.pathname !== "/admin/products/add") &&
				<Topbar
					title={title}
					ToolbarClasses={classes.topbar}
					isSidebarOpen={shouldOpenSidebar}
					onToggleSidebar={() => this.handleToggleOpen()}
				/>}
				{ (window.location.pathname === "/admin/products/add") &&
				<AddProductTopbar
					title={title}
					ToolbarClasses={classes.topbar}
					isSidebarOpen={shouldOpenSidebar}
					onToggleSidebar={() => this.handleToggleOpen()}
				/>}
				<Drawer
					anchor="left"
					classes={{ paper: classes.drawerPaper }}
					open={shouldOpenSidebar}
					onClose={() => this.handleClose()}
					variant={isDesktop ? "persistent" : 'temporary'}
					ref={this.wrapper}
				>
					<Sidebar className={classes.sidebar} />
				</Drawer>
				<Snackbar
					open={this.props.openAlert}
					onClose={() => this.props.dispatch({ type: ALERT_DETAIL, data: false, message: " ", severity: "error" })}
					anchorOrigin={{ vertical: "top", horizontal: "right" }}
					autoHideDuration={3000} >
					<Alert icon={false} variant="filled" severity={this.props.alertSeverity} >{this.props.alertMessage}</Alert>
				</Snackbar>
				<main
					ref={this.wrapper}
					className={classnames({
						[classes.contentShift]: isDesktop ? isOpen : false,
						[classes.content]: true
					})}>
					{children}
				</main>
			</Fragment>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		openAlert: state.sessionReducer.openAlert,
		alertSeverity: state.sessionReducer.alertSeverity,
		alertMessage: state.sessionReducer.alertMessage,
	}
};
export default compose(withStyles(styles), connect(mapStateToProps))((withMediaQuery([
	['isDesktop', theme => theme.breakpoints.up('lg'), {
		defaultMatches: true
	}]
])(AdminLayout)));

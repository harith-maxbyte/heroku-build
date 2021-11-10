import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import { Toolbar, IconButton, Typography, Hidden, Tooltip } from '@material-ui/core';
import { FiMenu, FiXCircle } from "react-icons/fi";
import { logout } from "../../../../store/actions/session";
import { withRouter } from "react-router";

// Component styles
import styles from './styles';

class AddProductTopbar extends Component {
    static defaultProps = {
        title: 'Add Product',
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
            { id: 3, title: 'Add Product', href: '/admin/products/add' },
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

                            <div style={{ marginTop: 10, cursor: "pointer" }}>
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="6.5" cy="6.5" r="5.75" stroke="#C5C7CD" stroke-width="1.5" />
                                    <path d="M11 11L15 15" stroke="#C5C7CD" stroke-width="1.5" stroke-linecap="round" />
                                </svg>
                            </div>
                            <div style={{ marginTop: 10, paddingLeft: 16, cursor: "pointer" }}>
                                <svg width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M8.00002 19C9.10377 19 9.99908 18.1047 9.99908 17H6.00096C6.00096 18.1047 6.89627 19 8.00002 19ZM14.731 14.3216C14.1272 13.6728 12.9975 12.6969 12.9975 9.5C12.9975 7.07188 11.295 5.12812 8.9994 4.65125V4C8.9994 3.44781 8.5519 3 8.00002 3C7.44815 3 7.00065 3.44781 7.00065 4V4.65125C4.70502 5.12812 3.00252 7.07188 3.00252 9.5C3.00252 12.6969 1.87283 13.6728 1.26908 14.3216C1.08158 14.5231 0.998459 14.7641 1.00002 15C1.00346 15.5125 1.40565 16 2.00315 16H13.9969C14.5944 16 14.9969 15.5125 15 15C15.0016 14.7641 14.9185 14.5228 14.731 14.3216Z" fill="#C5C7CD" />
                                    <circle cx="13" cy="5" r="3.75" fill="#EB7676" stroke="#F7F8FC" stroke-width="1.5" />
                                </svg>
                            </div>


                            <div className={classes.verticalDivider} />
                            <div style={{ display: "flex", justifyContent: 'center', alignItems: "center" }}>
                                <Typography className={classes.nameText}>Jones Ferdinand</Typography>
                            </div>
                            <Tooltip title="Logout">
                                <button style={{ border: "0px solid transparent", background: "none", cursor: "pointer" }} onClick={this.handleSignOut}>
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
export default connect(mapStateToProps)(withStyles(styles)(withRouter(AddProductTopbar)));

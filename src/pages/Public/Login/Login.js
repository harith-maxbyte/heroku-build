import React, { Component } from "react";
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import {
	Typography, Button, Grid, TextField, InputAdornment, IconButton, CircularProgress
} from "@material-ui/core";
import { connect } from 'react-redux';
import { compose } from "redux";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { login } from "../../../store/actions/session";
import Logo from "../../../assets/images/png/G-Energy-Logo.png";
const styles = theme => ({
	container: {
		minHeight: "100vh",
		backgroundColor: "#eaeaea",
		backgroundRepeat: "no-repeat",
	},
	card: {
		border: "1px solid #E1E7ED",
		backgroundColor: "#FFFFFF",
		borderRadius: 4,
		padding: 40
	},
	inputRoot: {
		borderRadius: "4px",
		fontSize: "15x !important",
	},
	inputStyle: {
		fontSize: "15x !important",
		padding: "10px !important",
		fontFamily: "SourceSansPro-Regular",
		color: "#6E8CA8",
		opacity: 1,
		"&&:after": {
			color: "#57B78C",
		}
	},
	underline: {
		"&&&:before": {
			borderBottom: "1px solid #cccccc",
		},
		"&&:after": {
			borderBottom: "1px solid #57B78C"
		}
	},
	textFieldContainer: {
		padding: "10px 0px"
	},
	buttonVariant: {
		boxShadow: "0px 0px 0px 0px #E1E7ED",
		backgroundColor: "#000",
		margin: "15px 0px",
		color: "#fff",
		borderRadius: 6,
		fontSize: 18,
		padding: "15px 20px",
		height: "fit-content",
		fontFamily: "SourceSansPro-Regular",
		textTransform: "none",
		'&:hover': {
			backgroundColor: "#000",
		},
	},
	linkText: {
		fontSize: "14px !important",
		padding: "5px 5px",
		color: "#666666",
		cursor: "pointer",
		fontFamily: "SourceSansPro-Regular",
		'&:hover': {
			textDecoration: "underline",
		},
	},
	errorText: {
		padding: 10,
		fontSize: 12,
		color: "#f44336",
		fontFamily: "SourceSansPro-Regular",
	},
	cardTitle: {
		textAlign: "left",
		color: "#000",
		fontWeight: "bold",
		fontSize: 20,
		padding: "10px 0px 0px",
		fontFamily: "SourceSansPro-Regular",
	},
	cardSecondTitle: {
		textAlign: "left",
		color: "#666666",
		fontSize: 17,
		padding: "10px 0px",
		fontFamily: "SourceSansPro-Regular",
	}
});


class Login extends Component {
	constructor() {
		super();
		this.state = {
			passwordVisible: false,
			email: "",
			password: "",
			email_error: false,
			password_error: false,
			invalid_email_error: false,
			invalid_password_error: false,
			remember_me: false,
			error_text: null,
			loading: false
		}
	}

	componentDidMount = () => {
		let token = localStorage.getItem("user_token")
		if (token !== null && token !== undefined && token !== "null") {
			this.props.history.push("/admin/dashboard")
		}
	}

	validateEmail(email) {
		var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		return re.test(email);
	}

	passwordValidation = (params) => {
		var re = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(\S){8,}$/
		return re.test(params)
	}

	submit = () => {
		let isError = false;
		let { email, password } = this.state;

		if (email === "" || email === null || email === undefined) {
			this.setState({ email_error: true })
			isError = true
		} else {
			if (!this.validateEmail(email)) {
				this.setState({ invalid_email_error: true })
				isError = true
			}
		}

		if (password === "" || password === null || password === undefined) {
			this.setState({ password_error: true })
			isError = true
		} else {
			if (!this.passwordValidation(password)) {
				this.setState({ invalid_password_error: true })
				isError = true
			}
		}
		if (isError === false) {
			let data = {}
			data.email = email;
			data.password = password;
			data.expireTime = "10000";
			this.setState({ loading: true })
			this.props.dispatch(login(this, data))
		}

	}


	render() {
		let { classes } = this.props;
		return (
			<div className={classes.container}>

				<div style={{ minHeight: "100vh", display: "flex", justifyContent: "center", alignItems: "center" }}>

					<Grid container justifyContent="center" alignItems="center">

						<Grid item xs={11} sm={7} md={3}>

							<div className={classes.card}>

								<center><img src={Logo} alt="logo" height={50} width={150} style={{ paddingBottom: 15, paddingLeft: 15 }} /></center>

								<Typography className={classes.cardTitle}>Sign in</Typography>
								<Typography className={classes.cardSecondTitle}>Login to your account to continue</Typography>
								<div className={classes.textFieldContainer}>
									<TextField
										placeholder="Enter Login ID"
										label="Login ID"
										type={'email'}
										color="primary"
										onChange={(event) => this.setState({ email: event.target.value, email_error: false, invalid_email_error: false, error_text: null })}
										InputProps={{ classes: { input: classes.inputStyle, underline: classes.underline, root: classes.inputRoot } }}
										fullWidth
										autoComplete="off"
										error={this.state.email_error ? true : this.state.invalid_email_error ? true : false}
										helperText={this.state.email_error ? "Please enter login ID" : this.state.invalid_email_error ? "Invalid login ID" : false}
										onKeyPress={e => {
											if (e.key === "Enter") {
												this.submit();
											}
										}}
									/>
								</div>
								<div className={classes.textFieldContainer}>
									<TextField
										placeholder="Enter Password"
										label="Password"
										color="primary"
										type={this.state.passwordVisible ? 'text' : 'password'}
										onChange={(event) => this.setState({ password: event.target.value, password_error: false, invalid_password_error: false, error_text: null })}
										InputProps={{
											classes: { input: classes.inputStyle, underline: classes.underline, root: classes.inputRoot },
											endAdornment: (
												<InputAdornment position="end">
													<IconButton
														aria-label="toggle password visibility"
														onClick={() => this.setState({ passwordVisible: !this.state.passwordVisible })}
													>
														{this.state.passwordVisible ? <FiEye size={16} color="#57B78C" /> : <FiEyeOff size={16} color="#57B78C" />}
													</IconButton>
												</InputAdornment>
											)
										}}
										fullWidth
										autoComplete="off"
										error={this.state.password_error ? true : this.state.invalid_password_error ? true : false}
										helperText={this.state.password_error ? "Please enter password" : this.state.invalid_password_error ? "Invalid Password" : false}
										onKeyPress={e => {
											if (e.key === "Enter") {
												this.submit();
											}
										}}
									/>
								</div>
								{this.state.error_text !== null && <Typography className={classes.errorText}>{this.state.error_text}</Typography>}
								<div style={{ marginTop: 60, marginBottom: 10 }}>
									<Typography className={classes.linkText}>I forgot my password </Typography>
									<Typography className={classes.linkText} onClick={() => this.props.history.push("/register")}>I don't have an account</Typography>
									<Typography className={classes.linkText}>I can't log in </Typography>
								</div>
								{this.state.loading === true ?
									<div style={{ textAlign: "center" }}>
										<CircularProgress color="primary" size={25} />
									</div>
									:
									<Button fullWidth variant="contained" className={classes.buttonVariant} onClick={() => this.submit()}>Sign in</Button>
								}
							</div>
						</Grid>
					</Grid>
				</div>
			</div>
		)
	}
}


const mapStateToProps = (state) => {
	return {

	}
}

Login.propTypes = {
	classes: PropTypes.object.isRequired,
};

export default compose(withStyles(styles), connect(mapStateToProps))(Login);
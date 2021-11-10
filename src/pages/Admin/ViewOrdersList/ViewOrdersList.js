import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withStyles, Typography, Grid, Table, TextField, Paper, TableCell, TableHead, TableRow, TableContainer, IconButton, TableBody, Checkbox, MenuItem, Menu, Breadcrumbs } from '@material-ui/core';
import { AiFillCaretLeft, AiFillCaretRight, AiOutlinePrinter } from "react-icons/ai";
import { FaSitemap } from "react-icons/fa";
import { FiChevronDown, FiChevronRight, FiChevronUp, FiXCircle } from "react-icons/fi";
import { BiDotsVerticalRounded, BiCheckCircle } from "react-icons/bi";
import { getOrders, getOrdersByDropdown } from "../../../store/actions/orders_action";
import exportsvg from '../../../assets/images/svg/export.svg';
import exportblacksvg from '../../../assets/images/svg/exportblack.svg';
import filterblack from '../../../assets/images/svg/filterblack.svg';
import print from '../../../assets/images/svg/print.svg';
import refresh from '../../../assets/images/svg/refresh.svg';


/**Created common styles for UI.*/
const styles = theme => ({
	root: {
		padding: theme.spacing(4)
	},
	buttonVariant: {
		boxShadow: "0px 0px 0px 0px #E1E7ED",
		backgroundColor: "#57B78C",
		margin: "5px 0px",
		color: "#fff",
		borderRadius: 6,
		fontSize: 14,
		padding: "5px 20px",
		height: "fit-content",
		textTransform: "none",
		fontFamily: "SourceSansPro-Regular",
		'&:hover': {
			backgroundColor: "#57B78C",
		},
	},
	card: {
		boxShadow: "0px 8px 36px rgba(50, 50, 50, 0.08)",
		background: "#FFFFFF",
		borderRadius: "8px",
	},
	tableHead: {
		backgroundColor: "#F6F6F6",
		boxShadow: "inset -1px 0px 0px rgba(198, 209, 221, 0.5)",
		width: "128px",
		height: "48px",
		alignSelf: "stretch"
	},
	tableRow: {
		padding: 0,
		height: '35px'
	},
	tableCell: {
		fontSize: 13,
		// lineHeight:"20px",
		fontStyle: "normal",
		fontWeight: "normal",
		// height: "20px",
		// left: "16px",
		// right: "16px",
		// top: "calc(50% - 20px/2 + 2px)",
		padding: "3px 10px",
		whiteSpace: 'nowrap',
		color: "#1F232E",
		fontFamily: "SourceSansPro-Regular"
	},
	tableHeadCell: {
		padding: "10px 10px",
		fontSize: 15,
		fontWeight: "600",
		color: "#7B8395",
		backgroundColor: "#F0F2F480",
		borderRight: "1px solid #cccccc",
		fontFamily: "SourceSansPro-Regular"
	},
	tableHeadLastCell: {
		padding: "10px 10px",
		fontSize: 15,
		fontWeight: "600",
		color: "#000",
		backgroundColor: theme.palette.primary.light,
		fontFamily: "SourceSansPro-Regular"
	},
	inputRoot: {
		backgroundColor: "#FFFFFF",
		// border: "1px solid #E1E7ED",
		borderRadius: "4px",
		fontSize: "13x !important",
		fontFamily: "SourceSansPro-Regular",
		"&:hover": {
			// border: "1px solid #57B78C",
			backgroundColor: "#FFFFFF"
		}
	},
	inputStyle: {
		fontFamily: "SourceSansPro-Regular !important",
		fontSize: "13x !important",
		padding: "5px !important",
		paddingRight: "32px !important",
		color: "#6E8CA8",
		opacity: 1,
		"&&:after": {
			color: "#57B78C",
		}
	},
	inputDrawerRoot: {
		backgroundColor: "#FFFFFF",
		border: "1px solid #E1E7ED",
		borderRadius: "4px",
		fontSize: "13x !important",
		fontFamily: "SourceSansPro-Regular",
		"&:hover": {
			border: "1px solid #57B78C",
			backgroundColor: "#FFFFFF"
		}
	},
	inputDrawerStyle: {
		fontFamily: "SourceSansPro-Regular !important",
		fontSize: "13x !important",
		padding: "10px !important",
		paddingRight: "32px !important",
		color: "#6E8CA8",
		opacity: 1,
		"&&:after": {
			color: "#57B78C",
		}
	},
	underline: {
		"&&&:before": {
			borderBottom: "none"
		},
		"&&:after": {
			borderBottom: "none"
		}
	},
	tablePageRoot: {
		display: "flex",
		justifyContent: 'space-between',
		backgroundColor: "#FFFFFF",
		height: "48px",
		border: "1px solid #cccccc",
		// marginTop: 10
		left: "0px",
		right: "0px",
		bottom: "0px"
	},
	tablePageRow: {
		display: "flex",
		justifyContent: 'space-between',
	},
	tablePagediv: {
		display: "flex",
		justifyContent: 'space-between',
		padding: "5px 15px",
		borderRight: "1px solid #cccccc",
		alignItems: "center",
		fontFamily: "SourceSansPro-Regular",
	},
	tablePagedivLast: {
		display: "flex",
		justifyContent: 'space-between',
		padding: "5px 15px",
		borderRight: "1px solid #cccccc",
		alignItems: "center",
		fontFamily: "SourceSansPro-Regular",
	},
	tablePagedivBorder: {
		display: "flex",
		justifyContent: 'space-between',
		padding: "5px 15px",
		borderRight: "1px solid #cccccc",
		borderLeft: "1px solid #cccccc",
		alignItems: "center"
	},
	iconButton: {
		padding: 3,
		borderRadius: 0
	},
	textRowPage: {
		fontSize: 14,
		color: "#000",
		paddingRight: 10
	},
	paper: {
		// minWidth: 540,
		borderRadius: "8px",
		background: "#FFFFFF",
	},
	title: {
		textDecoration: 'none',
		fontSize: '15px',
		fontWeight: "600",
		color: theme.palette.common.black,
		fontFamily: "SourceSansPro-Regular",
	},
	cardA: {
		padding: "15px 20px",
		borderRadius: 5,
		boxShadow: "0px 0px 0px 0px #E1E7ED",
		textAlign: "center"
	},
	selectCardA: {
		padding: "15px 20px",
		borderRadius: 5,
		border: "2px solid #57B78C",
		boxShadow: "0px 0px 0px 0px #57B78C",
		textAlign: "center"
	},
	cardTextTitle: {
		color: "#818180",
		fontSize: 15,
		fontFamily: "SourceSansPro-Regular",
	},
	cardTextSecondTitle: {
		color: "#000",
		fontSize: 25,
		padding: "5px 0px",
		fontWeight: "600",
		fontFamily: "SourceSansPro-Regular",
	},
	selectedCardTextTitle: {
		color: "#57B78C",
		fontSize: 15,
		fontFamily: "SourceSansPro-Regular",
	},
	selectedCardTextSecondTitle: {
		color: "#57B78C",
		fontSize: 25,
		padding: "5px 0px",
		fontWeight: "600",
		fontFamily: "SourceSansPro-Regular",
	},
	orderTitleText: {
		padding: "8px 7px",
		color: "#000000",
		margin: "0px 3px",
		fontSize: 15,
		fontFamily: "SourceSansPro-Regular",
		cursor: "pointer"
	},
	selectOrderTitleText: {
		padding: "8px 7px",
		color: "#000000",
		margin: "0px 3px",
		fontSize: 15,
		fontFamily: "SourceSansPro-Regular",
		cursor: "pointer",
		borderBottom: "2px solid #57B78C",
		fontWeight: "700"
	},
});

/**
 * @class
 * Class representing ViewOrdersList component
 */
class ViewOrdersList extends Component {
	constructor(props) {
		super(props);
		this.state = {
			page: 0,
			rowsPerPage: 15,
			select_order_status: "ALL",
			selected_orders: [],
			selected_order_status: "",
			selected_order_type: "",
			select_all: false,
			selected_order_date: "7",
			a: false,
			val: 0
		};
	}

	componentDidMount() {
		// this.props.dispatch(getOrders());
		// this.props.dispatch(getOrdersStatus());
		// this.props.dispatch(getOrdersType());
	}

	handleChangePage = (dir, length) => {
		if (dir === "LEFT") {
			if (this.state.page > 0) {
				this.setState({ page: this.state.page - 1 });
			}
		} else {
			if (length > (this.state.page + 1) * this.state.rowsPerPage) {
				this.setState({ page: this.state.page + 1 });
			}
		}
	};

	activePage = (dir, length) => {
		if (dir === "LEFT") {
			if (this.state.page === 0) {
				return false;
			}
		} else {
			if (length <= (this.state.page + 1) * this.state.rowsPerPage) {
				return false;
			}
		}
		return true;
	};

	handleChangeRowsPerPage = event => {
		this.setState({ rowsPerPage: event.target.value });
	};

	returnTotalPages = (length) => {
		if (length >= this.state.rowsPerPage) {
			return Math.ceil(length / this.state.rowsPerPage)
		} else {
			return 1
		}
	}

	handleClick = (event) => {
		this.setState({ anchorEl: event.currentTarget })
	}

	returnColor = (status) => {
		let color = "#000000"
		switch (status) {
			case "Dispatched":
				color = "#F4CC44"
				break;
			case "Pending":
				color = "#F3852A"
				break;
			case "Assigned to O&M":
				color = "#5EC8E6"
				break;
			case "Completed":
				color = "#57B78C"
				break;
			case "Cancelled":
				color = "#616060"
				break;
			case "Installed":
				color = "#A5A6F6"
				break;

			default:
				break;
		}
		return color;
	}


	selectAll = (e) => {
		const { allOrders } = this.props;


		if (e.target.checked === true) {//this.setState({a: true})
			this.setState({ selected_orders: this.state.select_all === false ? allOrders : [], select_all: !this.state.select_all })
		}
		if (e.target.checked === false) {//this.setState({a: false })
			this.setState({ selected_orders: this.state.select_all === false ? allOrders : [], select_all: !this.state.select_all })
		}
	}

	selectOrders = (e, item) => {

		if (e.target.checked === true) {
			this.setState({
				selected_orders: this.state.selected_orders.concat(item)
			})
		}
		if (e.target.checked === false) {
			this.setState({
				selected_orders: this.state.selected_orders.filter(i => i !== item)
			})
		}
	}

	selectedList = (event, mode) => {
		let query = ''
		if (mode === "STATUS") {
			this.setState({ selected_order_status: event.target.value })
			query = this.state.selected_order_type !== "" ? `OrderType=${this.state.selected_order_type}&OrderStatus=${event.target.value}` : `OrderStatus=${event.target.value}`
		} else if (mode === "TYPE") {
			this.setState({ selected_order_type: event.target.value })
			query = this.state.selected_order_status !== "" ? `OrderType=${event.target.value}&OrderStatus=${this.state.selected_order_status}` : `OrderType=${event.target.value}`
		}
		else if (mode === "DATE") {
			this.setState({ selected_order_date: event.target.value })
			query = this.state.selected_order_type !== "" ? `OrderType=${this.state.selected_order_type}&OrderStatus=${this.state.selected_order_status}` : `OrderStatus=${this.state.selected_order_status}`
		}
		this.props.dispatch(getOrdersByDropdown(query))
	}

	selectedListByStatus = (value) => {
		if (value === "ALL") {
			this.setState({ select_order_status: value })
			this.props.dispatch(getOrders());
		} else {
			let query = `OrderStatus=${value}`
			this.setState({ select_order_status: value })
			this.props.dispatch(getOrdersByDropdown(query))
		}
	}

	/** rendering Orders information. */
	render() {
		const { classes, allOrders, orderTypes, orderStatus } = this.props;
		const { rowsPerPage, page } = this.state;

		return (
			<div className={classes.root}>
				<div style={{ display: "flex", justifyContent: "space-between" }}>
					<Breadcrumbs separator={<FiChevronRight size={15} />} aria-label="breadcrumb" style={{ color: "#9F9E9E", left: "29.21%", right: "26.03%", top: "10.88%", bottom: "10.93%" }}>
						<Typography onClick={() => this.props.history.push("/admin/orders")} style={{
							fontFamily: "SourceSansPro-Regular", color: "#57B78C", cursor: "pointer", fontSize: 18, fontWeight: 600, width: "74px", height: "20px", fonttyle: "normal", lineHeight: "20px"
							// ,margin:"0px 8px" 
						}} color="primary" >
							Overview
						</Typography>
						<Typography style={{ fontFamily: "SourceSansPro-Regular", fontSize: 15, fontWeight: "600", lineHeight: "20px", width: "53px", height: "20px" }} color="textPrimary">Orders</Typography>
					</Breadcrumbs>
					<div style={{ display: "flex" }}>
						<TextField
							style={{ margin: 5 }}
							variant="filled"
							value={this.state.selected_order_date}
							onChange={(event) => this.selectedList(event, "DATE")}
							InputProps={{ classes: { input: classes.inputDrawerStyle, underline: classes.underline, root: classes.inputDrawerRoot } }}
							select
							SelectProps={{
								native: true,
							}}
						>
							<option value="7" style={{ fontFamily: "SourceSansPro-Regular" }}>
								Last 7 days Orders  (23 Jun - 30 Jun)
							</option>
							<option value="30" style={{ fontFamily: "SourceSansPro-Regular" }}>
								Last 30 days Orders  (23 Jun - 30 Jun)
							</option>
							<option value="" style={{ fontFamily: "SourceSansPro-Regular" }}>
								Custom date
							</option>
						</TextField>
						{this.state.select_order_status === "Assigned to O&M" &&
							<TextField
								style={{ margin: 5 }}
								variant="filled"
								value={this.state.selected_order_status}
								onChange={(event) => this.selectedList(event, "STATUS")}
								InputProps={{ classes: { input: classes.inputDrawerStyle, underline: classes.underline, root: classes.inputDrawerRoot } }}
								select
								SelectProps={{
									native: true,
								}}
							>
								<option value="" style={{ fontFamily: "SourceSansPro-Regular" }}>
									All Status
								</option>
								{orderStatus.map(x => <option key={x.value} value={x.value} style={{ fontFamily: "SourceSansPro-Regular" }}>
									{x.value}
								</option>)}
							</TextField>}

						{this.state.select_order_status === "Pending" &&
							<TextField
								style={{ margin: 5 }}
								variant="filled"
								value={this.state.selected_order_status}
								onChange={(event) => this.selectedList(event, "STATUS")}
								InputProps={{ classes: { input: classes.inputDrawerStyle, underline: classes.underline, root: classes.inputDrawerRoot } }}
								select
								SelectProps={{
									native: true,
								}}
							>
								<option value="" style={{ fontFamily: "SourceSansPro-Regular" }}>
									All Status
								</option>
								{orderStatus.map(x => <option key={x.value} value={x.value} style={{ fontFamily: "SourceSansPro-Regular" }}>
									{x.value}
								</option>)}
							</TextField>}

						{this.state.select_order_status === "ALL" &&
							<div>
								<TextField
									style={{ margin: 5 }}
									variant="filled"
									value={this.state.selected_order_status}
									onChange={(event) => this.selectedList(event, "STATUS")}
									InputProps={{ classes: { input: classes.inputDrawerStyle, underline: classes.underline, root: classes.inputDrawerRoot } }}
									select
									SelectProps={{
										native: true,
									}}
								>
									<option value="" style={{ fontFamily: "SourceSansPro-Regular" }}>
										All Status
									</option>
									{orderStatus.map(x => <option key={x.value} value={x.value} style={{ fontFamily: "SourceSansPro-Regular" }}>
										{x.value}
									</option>)}
								</TextField>
								<TextField
									style={{ margin: 5 }}
									variant="filled"
									value={this.state.selected_order_type}
									onChange={(event) => this.selectedList(event, "TYPE")}
									InputProps={{ classes: { input: classes.inputDrawerStyle, underline: classes.underline, root: classes.inputDrawerRoot } }}
									select
									SelectProps={{
										native: true,
									}}
								>
									<option value="" style={{ fontFamily: "SourceSansPro-Regular" }}>
										All Type
									</option>
									{orderTypes.map(x => <option key={x.value} value={x.value} style={{ fontFamily: "SourceSansPro-Regular" }}>
										{x.value}
									</option>)}

								</TextField>
							</div>}
						{/* <Button variant="contained" className={classes.buttonVariant}>
							<FaPlus size={13} style={{ paddingRight: 5 }} /> New Order
						</Button> */}
					</div>
				</div>
				<Grid container spacing={4}>
					<Grid item xs={12}>
						<TableContainer component={Paper} className={classes.paper}>
							{this.state.selected_orders.length > 0 && <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", backgroundColor: "#000", borderRadius: "8px 8px 0px 0px" }}>
								<div>
									<Typography style={{ alignItems: "center", paddingLeft: 15, fontSize: 15, color: "#fff", fontFamily: "SourceSansPro-Regular" }}> {this.state.selected_orders.length} items Selected</Typography>
								</div>
								<div style={{ display: "flex", alignItems: "center" }}>
									<div style={{ display: "flex", alignItems: "center", paddingRight: "10px" }}>
										<img src={exportsvg} alt="exportsvg" size={15} style={{ cursor: 'pointer' }} role="button" />
										<Typography style={{ alignItems: "center", fontSize: 15, margin: "0px 5px", color: "#fff", fontFamily: "SourceSansPro-Regular" }}> Export</Typography></div>
									<div style={{ display: "flex", alignItems: "center", paddingRight: "10px" }}>
										<img src={print} alt="print" size={15} style={{ cursor: 'pointer' }} role="button" />
										<Typography style={{ alignItems: "center", fontSize: 15, margin: "0px 5px", color: "#fff", fontFamily: "SourceSansPro-Regular" }}>  Filter</Typography></div>
									<div style={{ display: "flex", alignItems: "center" }}>
										<Typography style={{ alignItems: "center", fontSize: 15, margin: "0px 5px", color: "#fff", fontFamily: "SourceSansPro-Regular" }}> More<IconButton><FiChevronDown size={15} color="#fff" /></IconButton></Typography>
									</div>
									<div style={{ borderLeft: "1px solid #666666", height: 30 }} />
									<div style={{ display: "flex", alignItems: "center" }}><Typography style={{ alignItems: "center", fontSize: 15, margin: "0px 5px", color: "#fff", fontFamily: "SourceSansPro-Regular" }}> Cancel</Typography></div>
								</div>
							</div>}
							<div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", backgroundColor: "#fff", borderBottom: "1px solid #EEEEED", marginBottom: 10, paddingLeft: 5, paddingTop: 5 }}>
								<div style={{ display: "flex" }}>
									<Typography onClick={() => this.selectedListByStatus("ALL")} className={this.state.select_order_status === "ALL" ? classes.selectOrderTitleText : classes.orderTitleText}>All Orders</Typography>
									<Typography onClick={() => this.selectedListByStatus("Pending")} className={this.state.select_order_status === "Pending" ? classes.selectOrderTitleText : classes.orderTitleText}>Pending</Typography>
									<Typography onClick={() => this.selectedListByStatus("Assigned to O&M")} className={this.state.select_order_status === "Assigned to O&M" ? classes.selectOrderTitleText : classes.orderTitleText}>Assigned to O&M</Typography>
									<Typography onClick={() => this.selectedListByStatus("Completed")} className={this.state.select_order_status === "Completed" ? classes.selectOrderTitleText : classes.orderTitleText}>Completed</Typography>
									<Typography onClick={() => this.selectedListByStatus("Cancelled")} className={this.state.select_order_status === "Cancelled" ? classes.selectOrderTitleText : classes.orderTitleText}>Cancelled</Typography>
								</div>
								<div style={{ display: "flex" }}>
									{this.state.selected_orders.length < 1 && <div style={{ display: "flex", alignItems: "center" }}>
										<div style={{ display: "flex", alignItems: "center", paddingRight: "10px" }}>
											<img src={exportblacksvg} alt="exportblacksvg" size={35} style={{ cursor: 'pointer' }} role="button" />
											<Typography style={{ alignItems: "center", fontSize: 15, margin: "0px 5px", fontFamily: "SourceSansPro-Regular" }}> Export</Typography></div>
										<div style={{ display: "flex", alignItems: "center", paddingRight: "10px" }}>
											<img src={filterblack} alt="filterblack" size={15} style={{ cursor: 'pointer' }} role="button" />
											<Typography style={{ alignItems: "center", fontSize: 15, margin: "0px 5px", fontFamily: "SourceSansPro-Regular" }}>  Filter</Typography></div>
										<div style={{ display: "flex", alignItems: "center" }}>
											<img src={refresh} alt="refresh" size={15} style={{ cursor: 'pointer' }} role="button" />
											<Typography style={{ alignItems: "center", fontSize: 15, margin: "0px 5px", fontFamily: "SourceSansPro-Regular" }}> Refresh</Typography></div>
									</div>}
								</div>
							</div>
							<Table className={classes.card}>
								<TableHead className={classes.tableHead}>
									<TableRow >
										{this.state.select_order_status === "ALL" &&
											<TableCell align="left" className={classes.tableHeadCell}>
												<Checkbox
													color="primary"
													onClick={(e) => this.selectAll(e)}
													checked={allOrders.length === this.state.selected_orders.length}
													inputProps={{ 'aria-label': 'primary checkbox' }}
												/></TableCell>}
										<TableCell align="left" className={classes.tableHeadCell}>
											<div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
												<Typography style={{
													fontSize: 15,
													fontWeight: "600",
													color: "#7B8395",
													fontFamily: "SourceSansPro-Regular",
													textTransform: "uppercase"
												}}>Order Id </Typography>
											</div>
										</TableCell>
										<TableCell align="left" className={classes.tableHeadCell}>
											<div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
												<Typography style={{
													fontSize: 15,
													fontWeight: "600",
													fontFamily: "SourceSansPro-Regular",
													color: "#7B8395",
													textTransform: "uppercase"
												}}>Order Date </Typography>
												<div style={{ display: "grid", justifyContent: "space-between" }}>
													<FiChevronUp size={14} />
													<FiChevronDown size={14} />
												</div>
											</div>
										</TableCell>
										{this.state.select_order_status !== "Assigned to O&M" && <TableCell align="left" className={classes.tableHeadCell}>
											<div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
												<Typography style={{
													fontSize: 15,
													fontWeight: "600",
													fontFamily: "SourceSansPro-Regular",
													color: "#7B8395",
													textTransform: "uppercase"
												}}>Customer </Typography>
											</div>
										</TableCell>}
										{this.state.select_order_status !== "Assigned to O&M" && <TableCell align="left" className={classes.tableHeadCell}>
											<div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
												<Typography style={{
													fontSize: 15,
													fontWeight: "600",
													fontFamily: "SourceSansPro-Regular",
													color: "#7B8395",
													textTransform: "uppercase"
												}}>Order Type </Typography>
											</div>
										</TableCell>}
										{this.state.select_order_status === "Assigned to O&M" && <TableCell align="left" className={classes.tableHeadCell}>
											<div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
												<Typography style={{
													fontSize: 15,
													fontWeight: "600",
													fontFamily: "SourceSansPro-Regular",
													color: "#7B8395",
													textTransform: "uppercase"
												}}>Assigned on </Typography>
											</div>
										</TableCell>}
										{this.state.select_order_status !== "Pending" && <TableCell align="left" className={classes.tableHeadCell}>
											<div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
												<Typography style={{
													fontSize: 15,
													fontWeight: "600",
													fontFamily: "SourceSansPro-Regular",
													color: "#7B8395",
													textTransform: "uppercase"
												}}>Assigned to </Typography>
											</div>
										</TableCell>}
										<TableCell align="left" className={classes.tableHeadCell}>
											<div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
												<Typography style={{
													fontSize: 15,
													fontWeight: "600",
													fontFamily: "SourceSansPro-Regular",
													color: "#7B8395",
													textTransform: "uppercase"
												}}>Order Total </Typography>
												<div style={{ display: "grid", justifyContent: "space-between" }}>
													<FiChevronUp size={14} />
													<FiChevronDown size={14} />
												</div>
											</div>
										</TableCell>
										<TableCell align="left" className={classes.tableHeadCell}>
											<div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
												<Typography style={{
													fontSize: 15,
													fontWeight: "600",
													fontFamily: "SourceSansPro-Regular",
													textTransform: "uppercase",
													color: "#7B8395"
												}}>Status </Typography>
											</div>
										</TableCell>
										<TableCell align="left" className={classes.tableHeadCell}>
											<div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
												<Typography style={{
													fontSize: 15,
													fontWeight: "600",
													fontFamily: "SourceSansPro-Regular",
													textTransform: "uppercase",
													color: "#7B8395"
												}}>Last Modified </Typography>
												<div style={{ display: "grid", justifyContent: "space-between" }}>
													<FiChevronUp size={14} />
													<FiChevronDown size={14} />
												</div>
											</div>
										</TableCell>
										<TableCell align="left" className={classes.tableHeadCell}></TableCell>
									</TableRow>
								</TableHead>
								<TableBody>
									{allOrders.length > 0 ?
										allOrders
											.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
											.map((item, index) =>
												<TableRow
													key={index.toString()}
													className={classes.tableRow}
													hover>
													{this.state.select_order_status === "ALL" &&
														<TableCell className={classes.tableCell}>
															<Checkbox
																color="primary"
																checked={this.state.selected_orders.includes(item)}
																onClick={(e) => this.selectOrders(e, item)}
																inputProps={{ 'aria-label': 'primary checkbox' }}
															/>
														</TableCell>}
													<TableCell className={classes.tableCell}>
														{item.orderNo}
													</TableCell>
													<TableCell className={classes.tableCell}>
														{item.orderDate}
													</TableCell>
													{this.state.select_order_status !== "Assigned to O&M" && <TableCell className={classes.tableCell}>
														{item.customer}
													</TableCell>}
													{this.state.select_order_status !== "Assigned to O&M" && <TableCell className={classes.tableCell}>
														{item.orderType}
													</TableCell>}
													{this.state.select_order_status === "Assigned to O&M" && <TableCell className={classes.tableCell}>
														{item.assignedOn}
													</TableCell>}
													{this.state.select_order_status !== "Pending" && <TableCell className={classes.tableCell}>
														{item.assignedTo}
													</TableCell>}
													<TableCell className={classes.tableCell}>
														{item.orderTotal}
													</TableCell>
													<TableCell className={classes.tableCell} style={{ color: this.returnColor(item.orderStatus), fontWeight: "600" }}>
														{item.orderStatus}
													</TableCell>
													<TableCell className={classes.tableCell}>
														{item.lastModifiedDate}
													</TableCell>
													<TableCell className={classes.tableCell}>
														<IconButton aria-controls="simple-menu" aria-haspopup="true" onClick={(event) => this.handleClick(event)}><BiDotsVerticalRounded size={20} /></IconButton>
													</TableCell>
												</TableRow>) :
										<TableRow className={classes.tableRow}>
											<TableCell className={classes.tableCell} colSpan={10} align="center">
												Currently there are no records
											</TableCell>
										</TableRow>}
								</TableBody>
							</Table>
							<div className={classes.tablePageRoot} >
								<div className={classes.tablePageRow} >
									<div className={classes.tablePagediv}>
										<Typography className={classes.textRowPage}>
											Items per page :
										</Typography>
										<TextField
											variant="filled"
											value={this.state.rowsPerPage}
											onChange={(event) => this.handleChangeRowsPerPage(event)}
											InputProps={{ classes: { input: classes.inputStyle, underline: classes.underline, root: classes.inputRoot } }}
											select
											SelectProps={{
												native: true,
											}}>
											<option value={15}>
												15
											</option>
											<option value={25}>
												25
											</option>
											<option value={35}>
												35
											</option>
										</TextField>
									</div>
									<div className={classes.tablePagediv}>
										<Typography style={{ fontFamily: "SourceSansPro-Regular" }}>
											{page * rowsPerPage + 1} - {rowsPerPage > allOrders.length ? allOrders.length : (page + 1) * rowsPerPage} of {allOrders.length} items
										</Typography>
									</div>
								</div>
								<div className={classes.tablePageRow}>
									<div className={classes.tablePagedivBorder}>
										<Typography style={{ fontFamily: "SourceSansPro-Regular" }}>
											{page + 1}  of {this.returnTotalPages(allOrders.length)} pages
										</Typography>
									</div>
									<div className={classes.tablePagediv}>
										<IconButton className={classes.iconButton} disabled={!this.activePage("LEFT", allOrders.length)} onClick={() => this.handleChangePage("LEFT", allOrders.length)}>
											<AiFillCaretLeft size={20} color={this.activePage("LEFT", allOrders.length) ? "#666666" : "#cccccc"} />
										</IconButton>
									</div>
									<div className={classes.tablePagedivLast}>
										<IconButton className={classes.iconButton} disabled={!this.activePage("RIGHT", allOrders.length)} onClick={() => this.handleChangePage("RIGHT", allOrders.length)}>
											<AiFillCaretRight size={20} color={this.activePage("RIGHT", allOrders.length) ? "#666666" : "#cccccc"} />
										</IconButton>
									</div>
								</div>
							</div>
						</TableContainer>
					</Grid>
				</Grid>

				<Menu
					id="simple-menu"
					anchorEl={this.state.anchorEl}
					keepMounted
					open={Boolean(this.state.anchorEl)}
					onClose={() => this.setState({ anchorEl: null })}
				>
					<MenuItem onClick={() => this.setState({ anchorEl: null })} style={{ fontFamily: "SourceSansPro-Regular" }}><AiOutlinePrinter size={20} style={{ paddingRight: 10 }} />Print Invoice</MenuItem>
					<MenuItem onClick={() => this.setState({ anchorEl: null })} style={{ fontFamily: "SourceSansPro-Regular" }}><FiXCircle size={20} style={{ paddingRight: 10 }} />Cancel Order</MenuItem>
					<MenuItem onClick={() => this.setState({ anchorEl: null })} style={{ fontFamily: "SourceSansPro-Regular" }}><BiCheckCircle size={20} style={{ paddingRight: 10 }} />Mark Completed</MenuItem>
					<MenuItem onClick={() => this.setState({ anchorEl: null })} style={{ fontFamily: "SourceSansPro-Regular" }}><FaSitemap size={20} style={{ paddingRight: 10 }} />Reassign O&M</MenuItem>
				</Menu>
			</div>
		);
	}
}

/** Get data from store and assign to props. */
const mapStateToProps = (state) => {
	return {
		allOrders: state.orders_reducers.allOrders,
		orderStatus: state.orders_reducers.orderStatus,
		orderTypes: state.orders_reducers.orderTypes,
		orderDashboardCount: state.orders_reducers.orderDashboardCount
	}
};

export default connect(
	mapStateToProps
)(withStyles(styles)(ViewOrdersList));
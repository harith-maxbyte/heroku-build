import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withStyles, Typography, Grid, Button ,Table, TextField, Paper, TableCell, TableHead, TableRow, TableContainer, IconButton, Menu, TableBody, Checkbox, MenuItem, Breadcrumbs } from '@material-ui/core';
import { AiFillCaretLeft, AiFillCaretRight, AiOutlinePrinter } from "react-icons/ai";
import { FaPlus,FaSitemap } from "react-icons/fa";
import { FiChevronDown, FiChevronRight, FiChevronUp, FiXCircle } from "react-icons/fi";
import { BiDotsVerticalRounded, BiCheckCircle } from "react-icons/bi";
import { AiFillCaretDown } from "react-icons/ai"
import { getProducts, getProductsBrands, getProductsCategory, getProductsInventory } from "../../../store/actions/product_action";
import exportsvg from '../../../assets/images/svg/export.svg';
import print from '../../../assets/images/svg/print.svg';
import exportblacksvg from '../../../assets/images/svg/exportblack.svg';
import filterblack from '../../../assets/images/svg/filterblack.svg';


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
		borderRadius: 8,
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
		border: "1px solid #cccccc",
		boxShadow: "0px 0px 0px 0px rgba(0,0,0,0)",
		borderRadius: 0,
		backgroundColor: "#fff"
	},
	tableHead: {
		backgroundColor: "rgba(240, 242, 244, 0.5)",
		boxShadow: "inset -1px 0px 0px rgba(198, 209, 221, 0.5)",
		position: "static",
		width: "168px",
		height: "48px",
		left: "0px",
		top: "0px",
	},
	tableRow: {
		padding: 0,
		height: '35px',
		color: "#000000",
		fontSize: "13px",
		lineHeight: "20px",
		fontStyle: "normal",
		fontWeight: "normal"
	},
	tableCell: {
		fontSize: 14,
		padding: "3px 10px",
		whiteSpace: 'nowrap',
		fontFamily: "SourceSansPro-Regular",
	},
	tableCellTop: {
		fontSize: 14,
		padding: "3px 10px",
		whiteSpace: 'nowrap',
		fontFamily: "SourceSansPro-Regular",
		fontWeight: "600"
	},
	tableHeadCell: {
		padding: "10px 10px",
		fontSize: 14,
		fontWeight: "600",
		color: "#7B8395",
		fontFamily: "SourceSansPro-Regular",
		backgroundColor: "rgba(240, 242, 244, 0.5)",
		boxShadow: "inset -1px 0px 0px rgba(198, 209, 221, 0.5)",
		left: "0px",
		top: "0px",
	},
	tableHeadLastCell: {
		padding: "10px 10px",
		fontSize: 15,
		fontWeight: "600",
		color: "#000",
		backgroundColor: theme.palette.primary.light,
		fontFamily: "SourceSansPro-Regular",
	},
	inputRoot: {
		backgroundColor: "#FFFFFF",
		// border: "1px solid #E1E7ED",
		borderRadius: "4px",
		fontSize: "13x !important",
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
		// backgroundColor: "#FFFFFF",
		// border: "1px solid #E1E7ED",
		borderRadius: "8px",
		fontSize: "13x !important",
		fontFamily: "SourceSansPro-Regular",
		backgroundColor: "#FDFEFF",
		border: "1px solid #CFCFCE",
		boxSizing: "border-box",
		// width:"188px",
		// height:"48px",
		paddingRight: "16px",
		"&:hover": {
			border: "1px solid #57B78C",
			backgroundColor: "#FFFFFF"
		}
	},
	inputDrawerStyle: {
		fontFamily: "SourceSansPro-Regulark !important",
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
		fontFamily: "SourceSansPro-Regular",
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
		alignItems: "center"
	},
	tablePagedivLast: {
		display: "flex",
		justifyContent: 'space-between',
		padding: "5px 15px",
		borderRight: "1px solid #cccccc",
		borderLeft: "1px solid #cccccc",
		alignItems: "center"
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
		paddingRight: 10,
		fontFamily: "SourceSansPro-Regular",
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
	}
});

/**
 * @class
 * Class representing ViewProductsList component
 */
class ViewProductsList extends Component {
	constructor(props) {
		super(props);
		this.state = {
			page: 0,
			rowsPerPage: 5,
			selected_products: [],
			select_all: false
		};
	}

	componentDidMount() {
		this.props.dispatch(getProducts())
		this.props.dispatch(getProductsBrands())
		this.props.dispatch(getProductsInventory())
		this.props.dispatch(getProductsCategory())
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

	handleClick = (event) => {
		this.setState({ anchorEl: event.currentTarget })
	}

	selectAll = (e) => {
		const { allProducts } = this.props;

		if (e.target.checked === true) {
			this.setState({ selected_products: this.state.select_all === false ? allProducts : [], select_all: !this.state.select_all })
		}
		if (e.target.checked === false) {
			this.setState({ selected_products: this.state.select_all === false ? allProducts : [], select_all: !this.state.select_all })
		}
	}

	selectProducts = (e, item) => {

		if (e.target.checked === true) {

			this.setState({
				selected_products: this.state.selected_products.concat(item)
			})

		}
		if (e.target.checked === false) {

			this.setState({
				selected_products: this.state.selected_products.filter(i => i !== item)
			})

		}

	}

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

	returnColor = (status) => {
		let color = "#000000"
		switch (status) {
			case "INSTOCK":
				color = "#000000"
				break;
			case "LIMITED":
				color = "#F3852A"
				break;
			case "OUTOFSTOCK":
				color = "#E55562"
				break;
			default:
				break;
		}
		return color;
	}

	/** rendering Products information. */
	render() {
		const { classes, allProducts, productBrands, productInventories, productCategories } = this.props;
		const { rowsPerPage, page } = this.state;

		return (
			<div className={classes.root}>
				<div style={{ display: "flex", justifyContent: "space-between" }}>
					<Breadcrumbs separator={<FiChevronRight size={15} />} aria-label="breadcrumb" style={{ color: "#9F9E9E", left: "29.21%", right: "26.03%", top: "10.88%", bottom: "10.93%" }}>
						<Typography onClick={() => this.props.history.push("/admin/products")} style={{
							fontFamily: "SourceSansPro-Regular", color: "#57B78C", cursor: "pointer", fontSize: 18, fontWeight: 600, width: "74px", height: "20px", fonttyle: "normal", lineHeight: "20px"
							// ,margin:"0px 8px" 
						}} color="primary" >
							Overview
						</Typography>
						<Typography style={{ fontFamily: "SourceSansPro-Regular", fontSize: 15, fontWeight: "600", lineHeight: "20px", width: "53px", height: "20px" }} color="textPrimary">Products</Typography>
					</Breadcrumbs>
					<div style={{ display: "flex", marginBottom: 15 }}>
						<TextField
							style={{ margin: 5 }}
							variant="filled"
							value=""
							InputProps={{ classes: { input: classes.inputDrawerStyle, underline: classes.underline, root: classes.inputDrawerRoot } }}
							select
							SelectProps={{
								native: true,
							}}
						>
							<option value="" disabled style={{ fontFamily: "SourceSansPro-Regular" }}>
								All brands
							</option>
							{productBrands.map((brand, index) =>
								<option key={index} value={brand.value} style={{ fontFamily: "SourceSansPro-Regular" }}>
									{brand.value}
								</option>)}
						</TextField>
						<TextField
							style={{ margin: 5 }}
							variant="filled"
							value=""
							InputProps={{ classes: { input: classes.inputDrawerStyle, underline: classes.underline, root: classes.inputDrawerRoot } }}
							select
							SelectProps={{
								native: true,
							}}
						>
							<option value="" disabled style={{ fontFamily: "SourceSansPro-Regular" }}>
								All category
							</option>
							{productCategories.map((category, index) =>
								<option key={index} value={category.value} style={{ fontFamily: "SourceSansPro-Regular" }}>
									{category.value}
								</option>)}
						</TextField>

						<TextField
							style={{ margin: 5 }}
							variant="filled"
							value=""
							InputProps={{ classes: { input: classes.inputDrawerStyle, underline: classes.underline, root: classes.inputDrawerRoot } }}
							select
							SelectProps={{
								native: true,
							}}
						>
							<option value="" disabled style={{ fontFamily: "SourceSansPro-Regular" }}>
								All inventory
							</option>
							{productInventories.map((inventory, index) =>
								<option key={index} value={inventory.value} style={{ fontFamily: "SourceSansPro-Regular" }}>
									{inventory.value}
								</option>)}
						</TextField>
						<Button variant="contained" className={classes.buttonVariant} onClick={() => this.props.history.push("/admin/products/add")}>
							<FaPlus size={13} style={{ paddingRight: 5 }} /> New Product  <AiFillCaretDown size={13} style={{ paddingLeft: 5 }} />
						</Button>
					</div>
				</div>
				<Grid container spacing={4}>
					<Grid item xs={12}>
						<TableContainer component={Paper} className={classes.paper}>
							{this.state.selected_products.length > 0 && <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", backgroundColor: "#000", borderRadius: "8px 8px 0px 0px" }}>
								<div>
									<Typography style={{ alignItems: "center", paddingLeft: 15, fontSize: 15, color: "#fff", fontFamily: "SourceSansPro-Regular" }}> {this.state.selected_products.length} items selected</Typography>
								</div>
								<div style={{ display: "flex", alignItems: "center", marginRight: "10px" }}>
									<div style={{ display: "flex", alignItems: "center" }}>
										<img src={exportsvg} alt="exportsvg" size={35} style={{ cursor: 'pointer' }} role="button" />
										<Typography style={{ alignItems: "center", fontSize: 15, margin: "0px 5px", color: "#fff", fontFamily: "SourceSansPro-Regular" }}> Export</Typography></div>
									<div style={{ display: "flex", alignItems: "center", margin: "0px 15px" }}>
										<img src={print} alt="print" size={15} style={{ cursor: 'pointer' }} role="button" />
										<Typography style={{ alignItems: "center", fontSize: 15, margin: "0px 5px", color: "#fff", fontFamily: "SourceSansPro-Regular" }}> Print</Typography></div>
									<div style={{ display: "flex", alignItems: "center" }}>
										<Typography style={{ alignItems: "center", fontSize: 15, margin: "0px 0px", color: "#fff", fontFamily: "SourceSansPro-Regular" }}> More</Typography>
										<IconButton><FiChevronDown size={15} color="#fff" /></IconButton></div>

									<div style={{ borderLeft: "1px solid #666666", height: 30 }} />
									<div style={{ display: "flex", alignItems: "center" }}><Typography style={{ alignItems: "center", fontSize: 15, margin: "0px 5px", color: "#fff", fontFamily: "SourceSansPro-Regular" }}> Cancel</Typography></div>
								</div>
							</div>}

							<div style={{ display: "flex", alignItems: "center", justifyContent: "flex-end", backgroundColor: "#fff", height: 40 }}>
								<div style={{ display: "flex", alignItems: "center", paddingRight: "20px" }}>
									<img src={exportblacksvg} alt="exportblacksvg" size={35} style={{ cursor: 'pointer' }} role="button" />
									<Typography style={{ alignItems: "center", fontSize: 15, fontFamily: "SourceSansPro-Regular", paddingLeft: 5 }}> Export</Typography></div>
								<div style={{ display: "flex", alignItems: "center", marginRight: 10 }}>
									<img src={filterblack} alt="filterblack" size={15} style={{ cursor: 'pointer' }} role="button" />
									<Typography style={{ alignItems: "center", fontSize: 15, fontFamily: "SourceSansPro-Regular" }}>  Filter</Typography></div>
							</div>
							<Table className={classes.card}>
								<TableHead className={classes.tableHead}>
									<TableRow >
										<TableCell align="left" className={classes.tableHeadCell}>
											<Checkbox
												color="primary"
												// indeterminate
												onClick={(e) => this.selectAll(e)}
												checked={allProducts.length === this.state.selected_products.length}
												inputProps={{ 'aria-label': 'primary checkbox' }}
											/></TableCell>
										<TableCell align="left" className={classes.tableHeadCell}>
											<div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
												<Typography style={{
													fontSize: 15,
													fontWeight: "600",
													color: "#7B8395",
													fontFamily: "SourceSansPro-Regular",
													textTransform: "uppercase"
												}}>Model Number </Typography>
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
													color: "#7B8395",
													fontFamily: "SourceSansPro-Regular",
													textTransform: "uppercase"
												}}>Brand </Typography>
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
													color: "#7B8395",
													fontFamily: "SourceSansPro-Regular",
													textTransform: "uppercase"
												}}>Category </Typography>
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
													color: "#7B8395",
													fontFamily: "SourceSansPro-Regular",
													textTransform: "uppercase"
												}}>Quantity </Typography>
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
													color: "#7B8395",
													fontFamily: "SourceSansPro-Regular",
													textTransform: "uppercase"
												}}>Price </Typography>
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
													color: "#7B8395",
													fontFamily: "SourceSansPro-Regular",
													textTransform: "uppercase"
												}}>Date Added </Typography>
												<div style={{ display: "grid", justifyContent: "space-between" }}>
													<FiChevronUp size={14} />
													<FiChevronDown size={14} />
												</div>
											</div>
										</TableCell>
										<TableCell align="left" className={classes.tableHeadCell} style={{ textTransform: "uppercase" }}>Inventory</TableCell>
										<TableCell align="left" className={classes.tableHeadCell}></TableCell>
									</TableRow>
								</TableHead>
								<TableBody>
									{allProducts
										.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
										.map((item, index) =>
											<TableRow
												key={index.toString()}
												className={classes.tableRow}
												hover>
												<TableCell className={classes.tableCell}>
													<Checkbox
														color="primary"
														checked={this.state.selected_products.includes(item)}
														onClick={(e) => this.selectProducts(e, item)}
														inputProps={{ 'aria-label': 'primary checkbox' }}
													/>
												</TableCell>
												<TableCell className={classes.tableCell}>
													{item.productSKU}
												</TableCell>
												<TableCell className={classes.tableCell}>
													{item.productName}
												</TableCell>
												<TableCell className={classes.tableCell}>
													{item.productCategoryName}
												</TableCell>
												<TableCell className={classes.tableCell}>
													{item.quantity}
												</TableCell>
												<TableCell className={classes.tableCell}>
													{item.price}
												</TableCell>
												<TableCell className={classes.tableCell}>
													{item.createdOn}
												</TableCell>
												<TableCell className={classes.tableCell} style={{ color: this.returnColor(item.orderStatus), fontWeight: "600" }}>
													{item.inventory}
												</TableCell>
												<TableCell className={classes.tableCell}>
													<IconButton aria-controls="simple-menu" aria-haspopup="true" onClick={(event) => this.handleClick(event)}><BiDotsVerticalRounded size={20} /></IconButton>
												</TableCell>
											</TableRow>)}
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
											<option value={5} style={{ fontFamily: "SourceSansPro-Regular" }}>
												5
											</option>
											<option value={15} style={{ fontFamily: "SourceSansPro-Regular" }}>
												15
											</option>
											<option value={25} style={{ fontFamily: "SourceSansPro-Regular" }}>
												25
											</option>
										</TextField>
									</div>
									<div className={classes.tablePagediv}>
										<Typography style={{ fontFamily: "SourceSansPro-Regular" }}>
											{page * rowsPerPage + 1} - {rowsPerPage > allProducts.length ? allProducts.length : (page + 1) * rowsPerPage} of {allProducts.length} items
										</Typography>
									</div>
								</div>
								<div className={classes.tablePageRow}>
									<div className={classes.tablePagedivBorder}>
										<Typography style={{ fontFamily: "SourceSansPro-Regular" }}>
											{page + 1}  of {this.returnTotalPages(allProducts.length)} pages
										</Typography>
									</div>
									<div className={classes.tablePagediv}>
										<IconButton className={classes.iconButton} disabled={!this.activePage("LEFT", allProducts.length)} onClick={() => this.handleChangePage("LEFT", allProducts.length)}>
											<AiFillCaretLeft size={20} color={this.activePage("LEFT", allProducts.length) ? "#666666" : "#cccccc"} />
										</IconButton>
									</div>
									<div className={classes.tablePagedivLast}>
										<IconButton className={classes.iconButton} disabled={!this.activePage("RIGHT", allProducts.length)} onClick={() => this.handleChangePage("RIGHT", allProducts.length)}>
											<AiFillCaretRight size={20} color={this.activePage("RIGHT", allProducts.length) ? "#666666" : "#cccccc"} />
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
		allProducts: state.products_reducers.allProducts,
		productBrands: state.products_reducers.productBrands,
		productCategories: state.products_reducers.productCategories,
		productInventories: state.products_reducers.productInventories
	}
};

export default connect(
	mapStateToProps
)(withStyles(styles)(ViewProductsList));
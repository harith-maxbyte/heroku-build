import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withStyles, Typography, Button, Grid, Table, TextField, Paper, TableCell, TableHead, TableRow, TableContainer, IconButton, MenuItem, TableBody, Card, Checkbox, Menu, Breadcrumbs } from '@material-ui/core';
import { AiFillCaretLeft, AiFillCaretRight, AiOutlinePrinter } from "react-icons/ai";
import { ResponsivePie } from "@nivo/pie";
import { FaSitemap, FaPlus } from "react-icons/fa";
import { FiChevronDown, FiChevronUp, FiXCircle, FiChevronRight } from "react-icons/fi";
import { BiDotsVerticalRounded, BiCheckCircle } from "react-icons/bi";
import { getPopularProducts, getProductBrandSegmentation, getProducts, getProductExport } from "../../../store/actions/product_action";
import { MdOpenInNew } from 'react-icons/md';
import exportblacksvg from '../../../assets/images/svg/exportblack.svg';
import filterblack from '../../../assets/images/svg/filterblack.svg';
import exportsvg from '../../../assets/images/svg/export.svg';
import print from '../../../assets/images/svg/print.svg';
import CustomModal from '../../../components/modal'

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
		boxShadow: "0px 0px 0px 0px rgba(0,0,0,0)",
		background: "#FFFFFF",
		border: "1px solid #E1E0E0",
		boxSizing: "border-box",
		borderRadius: "8px",
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
		fontFamily: "SourceSansPro-Regular"
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
 * Class representing Product component
 */
class Product extends Component {
	constructor(props) {
		super(props);
		this.state = {
			page: 0,
			rowsPerPage: 5,
			selected_prdouct_category: "",
			selected_prdouct_inventory: "",
			selected_prdouct_brand: "",
			selected_products: [],
			select_all: false,
			val: 7,
			enableListView: false,
			startDate: '',
			endDate: '',
			enableCustomModal: false,
		};
	}

	componentDidMount() {
		this.initialProductLoad();
		// this.props.dispatch(getProducts())
		// this.props.dispatch(getPopularProducts())
		// this.props.dispatch(getProductsBrands())
		// this.props.dispatch(getProductsInventory())
		// this.props.dispatch(getProductsCategory())
		// this.props.dispatch(getProductBrandSegmentation())
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

	ChangeDateFormat = (val) => {
		var res = (val.split('/'))
		const date = new Date(res[2], (res[1] - 1), res[0]);
		const month = date.toLocaleString('default', { month: 'short' });
		return (res[0] + ' ' + month + ' ' + res[2])
	}

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
			case "IS":
				color = "#000000"
				break;
			case "Limited":
				color = "#F3852A"
				break;
			case "OS":
				color = "#E55562"
				break;
			case "Vestar AC":
				color = "#7FDBFF"
				break;
			case "Trane AC":
				color = "#0074D9"
				break;
			case "Videocon AC":
				color = "#F3852A"
				break;
			case "Voltas AC":
				color = "#F3852A"
				break;
			case "Whirlpool AC":
				color = "#F3852A"
				break;
			case "White Westinghouse AC":
				color = "#85144b"
				break;
			case "Blue Star AC":
				color = "#F3852A"
				break;
			case "BPL AC":
				color = "#F3852A"
				break;
			case "Carrier AC":
				color = "#0000FF"
				break;
			case "Croma AC":
				color = "#FF69B4"
				break;
			case "Daikin AC":
				color = "#F3852A"
				break;
			case "Godrej AC":
				color = "#008000"
				break;
			case "Haier AC":
				color = "#F3852A"
				break;
			case "Hitachi AC":
				color = "#B22222"
				break;
			case "Hyundai AC":
				color = "#FFFACD"
				break;
			case "IFB AC":
				color = "#F3852A"
				break;
			case "Intex AC":
				color = "#F3852A"
				break;
			case "Koryo AC":
				color = "#0074D9"
				break;
			case "LG AC":
				color = "#2ECC40"
				break;
			case "Lloyd AC":
				color = "#FF851B"
				break;
			case "MarQ AC":
				color = "#7FDBFF"
				break;
			case "Micromax AC":
				color = "#B10DC9"
				break;
			case "Midea AC":
				color = "#FFDC00"
				break;
			case "Mitashi AC":
				color = "#001f3f"
				break;
			case "Mitchubisi":
				color = "#39CCCC"
				break;
			case "Mitsubishi AC":
				color = "#01FF70"
				break;
			case "O General AC":
				color = "#85144b"
				break;
			case "Onida AC":
				color = "#F012BE"
				break;
			case "Panasonic AC":
				color = "#3D9970"
				break;
			case "Product 1":
				color = "#FF69B4"
				break;
			case "Product 2":
				color = "#AAAAAA"
				break;
			case "Product New":
				color = "#EB7676"
				break;
			case "Samsung AC":
				color = "#FEC9B4"
				break;
			case "Sansui AC":
				color = "#F3852A"
				break;
			case "Smart Ac":
				color = "#F3852A"
				break;
			case "test":
				color = "#57B78C"
				break;
			case "Toshiba AC":
				color = "#5EC8E6"
				break;
			default:
				break;
		}
		return color;
	}

	returnPiechart = (productsBrandSegmentationPie) => {
		console.log("productsBrandSegmentationPie=", productsBrandSegmentationPie)
		if (productsBrandSegmentationPie.length > 0) {
			const data = [];
			let series = [];
			let lable = [];
			let tile = [];

			productsBrandSegmentationPie.map((value) => {
				series.push(value.count)
				lable.push(value.ProductName)
				tile.push(value.ProductName)
				return ('');
			})
			for (var i = 0; i < series.length; i++) {
				data.push({ id: tile[i], label: lable[i], value: series[i] })
			}


			return (
				<>
					<h3 style={{ display: "flex", alignItems: "center", color: "#000", fontWeight: "600", fontSize: 18, paddingLeft: 12, fontFamily: "SourceSansPro-SemiBold" }}>Brand segmentation</h3>
					<div style={{
						width: 600, height: 400
					}}>
						<ResponsivePie
							data={data}
							margin={{ top: 20, right: 80, bottom: 80, left: 20 }}
							innerRadius={0}
							padAngle={0.7}
							cornerRadius={3}
							activeOuterRadiusOffset={8}
							borderWidth={1}
							borderColor={{ from: "color", modifiers: [["darker", 0.2]] }}
							arcLinkLabelsSkipAngle={10}
							arcLinkLabelsTextColor="#616060"
							arcLinkLabelsThickness={2}
							enableArcLabels={false}
							arcLinkLabelsColor={{ from: "color" }}
							arcLabelsSkipAngle={10}
							// arcLinkLabel="value"
							arcLinkLabel={function (e) { return e.value + "%" }}
							arcLabelsTextColor={{ from: "color", modifiers: [["darker", 2]] }}
							colors={(datum) => this.returnColor(datum.label)}
							tooltip={({ datum: { id, value, color, label } }) => (
								<div style={{
									display: "table",
									maxWidth: "50%",
									background: "#1B1B1B",
									color: "#FFFFFF",
									borderRadius: "8px",
									padding: "4px",
									fontFamily: "SourceSansPro-SemiBold",
									fontStyle: "normal",
									fontSize: "14px",
									fontWeight: 600,
									textAlign: "center",
									lineHeight: "20px",
								}}
								>
									{label + ":" + value}
								</div>
							)}
							theme={{
								tooltip: {
									container: {
										background: '#333',
									},
								},
							}}
							legends={
								[
									{
										anchor: 'right',
										direction: 'column',
										justify: false,
										translateX: 90,
										translateY: 60,
										itemsSpacing: 10,
										itemWidth: 100,
										itemHeight: 18,
										overflowX: 'auto',
										itemTextColor: '#777A7F',
										itemDirection: 'left-to-right',
										itemOpacity: 1,
										symbolSize: 10,
										symbolShape: 'circle',
										navigation: {
											activeColor: "#003399",
											animation: "true",
											arrowSize: "12",
											enabled: "true",
											inactiveColor: "#cccccc",
											style: undefined,
										},
										effects: [
											{
												on: 'hover',
												style: {
													itemTextColor: '#000'
												}
											}

										]
									}
								]
							}
						/>
					</div>
				</>
			)

		}

	}

	initialProductLoad = () => {
		let days = 7;
		let date = new Date();
		let last = new Date(date.getTime() - (days * 24 * 60 * 60 * 1000));
		let day = last.getDate();
		let month = last.getMonth() + 1;
		let year = last.getFullYear();
		let prevDate = year + '-' + month + '-' + day;
		let currentDay = date.getDate();
		let currentMonth = date.getMonth() + 1;
		let currentYear = date.getFullYear();
		let currentDate = currentYear + '-' + currentMonth + '-' + currentDay;
		this.props.dispatch(getProducts(prevDate, currentDate));
		this.props.dispatch(getPopularProducts(prevDate, currentDate));
		this.props.dispatch(getProductBrandSegmentation(prevDate, currentDate));
	}

	filterOption = (days) => {
		let date = new Date();
		let last = new Date(date.getTime() - (days * 24 * 60 * 60 * 1000));
		let day = last.getDate();
		let month = last.getMonth() + 1;
		let year = last.getFullYear();
		let prevDate = year + '-' + month + '-' + day;
		let currentDay = date.getDate();
		let currentMonth = date.getMonth() + 1;
		let currentYear = date.getFullYear();
		let currentDate = currentYear + '-' + currentMonth + '-' + currentDay;
		return `Last ${days} days Orders (${prevDate} to ${currentDate})`
	}

	selectFilterOptions = (e) => {
		this.setState({ val: e.target.value })
		let days = parseInt(e.target.value);
		if (days === 7 || days === 30) {
			let date = new Date();
			let last = new Date(date.getTime() - (days * 24 * 60 * 60 * 1000));
			let day = last.getDate();
			let month = last.getMonth() + 1;
			let year = last.getFullYear();
			let prevDate = year + '-' + month + '-' + day;
			let currentDay = date.getDate();
			let currentMonth = date.getMonth() + 1;
			let currentYear = date.getFullYear();
			let currentDate = currentYear + '-' + currentMonth + '-' + currentDay;
			this.props.dispatch(getProducts(prevDate, currentDate));
			this.props.dispatch(getPopularProducts(prevDate, currentDate));
			this.props.dispatch(getProductBrandSegmentation(prevDate, currentDate));
			this.setState({
				startDate: '',
				endDate: '',
			})
		} else {
			this.setState({
				enableCustomModal: true,
				val: days,
			})
		}
	}


	handleCloseCustomModel = () => {
		this.setState({
			enableCustomModal: !this.state.enableCustomModal
		})
	}

	changeCustomDate = () => {
		console.log("comes true")
		this.setState({
			enableCustomModal: true
		})
	}

	handleOpenCustomModel = (start, end) => {
		this.setState({
			startDate: start,
			endDate: end,
			enableCustomModal: !this.state.enableCustomModal
		})
		this.props.dispatch(getProducts(start, end));
		this.props.dispatch(getPopularProducts(start, end));
		this.props.dispatch(getProductBrandSegmentation(start, end));
	}

	export = () => {
		this.props.dispatch(getProductExport());
	}

	/** rendering Products information. */
	render() {
		const { classes, allProducts, popularProducts, productsBrandSegmentationPie } = this.props;
		const { rowsPerPage, page } = this.state;
		console.log("popularProducts=", popularProducts)
		return (
			<div className={classes.root}>
				{this.state.enableCustomModal && <CustomModal isOpen={this.state.enableCustomModal} fromDate={this.state.startDate} toDate={this.state.endDate} handelopen={this.handleOpenCustomModel} cancel={this.handleCloseCustomModel} />}
				<div style={{
					display: "flex", justifyContent: "space-between", boxSizing: "border-box",
					borderRadius: "8px",
					order: "1",
					flexGrow: "0",
					// width:"263px",
					// height:"48px",
					// padding:"12px 16px",
					margin: "8px 0px"
				}}>
					<Breadcrumbs separator={<FiChevronRight size={15} />} aria-label="breadcrumb" style={{ color: "#9F9E9E", left: "29.21%", right: "26.03%", top: "10.88%", bottom: "10.93%" }}>
						<Typography onClick={() => this.setState({ enableListView: false })} style={{
							fontFamily: "SourceSansPro-Regular", color: "#616060", cursor: "pointer", fontSize: 18, fontWeight: 600, width: "74px", height: "20px", fonttyle: "normal", lineHeight: "20px"
						}} color="primary" >
							Overview
						</Typography>
						{this.state.enableListView && <Typography style={{ fontFamily: "SourceSansPro-Regular", fontSize: 15, fontWeight: "600", lineHeight: "20px", width: "53px", height: "20px" }} color="textPrimary">Products</Typography>}
					</Breadcrumbs>
					<div style={{ display: "flex", marginBottom: 13 }}>
						<TextField
							style={{ margin: 5 }}
							variant="filled"
							value={this.state.val}
							InputProps={{ classes: { input: classes.inputDrawerStyle, underline: classes.underline, root: classes.inputDrawerRoot } }}
							select
							onChange={this.selectFilterOptions}
							SelectProps={{
								native: true,
							}}
						>
							<option value="7" style={{ fontFamily: "SourceSansPro-Regular" }}>
								{this.filterOption(7)}
							</option>
							<option value="30" style={{ fontFamily: "SourceSansPro-Regular" }}>
								{this.filterOption(30)}
							</option>
							<option value="0" style={{ fontFamily: "SourceSansPro-Regular" }}>
								Custom date
							</option>
						</TextField>
						<Button variant="contained" className={classes.buttonVariant} onClick={() => this.props.history.push("/admin/products/add")}>
							<FaPlus size={13} style={{ paddingRight: 5 }} /> New Product
						</Button>
					</div>
				</div>
				{this.state.val === '0' && <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', fontSize: '14px', marginBottom: '2%' }}>{this.state.startDate} to {this.state.endDate} <span style={{ color: 'blue', fontSize: '12px', marginLeft: '4%', cursor: 'pointer' }} onClick={this.changeCustomDate}>Change</span></div>}
				<Grid container spacing={4}>
					{!this.state.enableListView && <Grid item xs={12} md={5}>
						<Card className={classes.card} style={{ boxShadow: "none", height: "100%" }} >
							<Typography style={{ display: "flex", alignItems: "center", color: "#000", fontWeight: "600", fontSize: 18, paddingTop: 20, paddingLeft: 20, paddingBottom: 8, fontFamily: "SourceSansPro-SemiBold" }}>Popular Products</Typography>
							<div
								style={{
									padding: 10
									// background: "#FFFFFF",
									// border: "1px solid #E1E0E0",
									// boxSizing: "border-box",
									// borderRadius: "8px"
								}}
							>
								<Table>
									<TableHead >
										<TableRow >
											<TableCell align="left" style={{ fontSize: 14, fontFamily: "SourceSansPro-SemiBold", fontWeight: "600", letterSpacing: "0.05em", lineHeight: "20px", color: "#7B8395", padding: 5, textTransform: "uppercase", fontStyle: "normal" }}>Product Name</TableCell>
											<TableCell align="left" style={{ fontSize: 14, fontFamily: "SourceSansPro-SemiBold", fontWeight: "600", letterSpacing: "0.05em", lineHeight: "20px", color: "#7B8395", padding: 5, textTransform: "uppercase", fontStyle: "normal" }}>Volume</TableCell>
											<TableCell align="left" style={{ fontSize: 14, fontFamily: "SourceSansPro-SemiBold", fontWeight: "600", letterSpacing: "0.05em", lineHeight: "20px", color: "#7B8395", padding: 5, textTransform: "uppercase", fontStyle: "normal" }}>Selling Price</TableCell>
										</TableRow>
									</TableHead>
									<TableBody>
										{popularProducts
											.map((item, index) =>
												<TableRow
													key={index.toString()}
													className={classes.tableRow}
													hover>
													<TableCell className={classes.tableCellTop}>
														{item.ProductName}
													</TableCell>
													<TableCell className={classes.tableCellTop}>
														{Number(item.ProductSalesPercentage) === 100.00 ? Number(item.ProductSalesPercentage).toFixed(0) + '%' : Number(item.ProductSalesPercentage).toFixed(1) + '%'}
													</TableCell>
													<TableCell className={classes.tableCellTop}>
														S${item.Sales.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")}
													</TableCell>
												</TableRow>)}
									</TableBody>
								</Table>
							</div>
						</Card>
					</Grid>}
					{!this.state.enableListView && <Grid item xs={12} md={7}>
						<Card className={classes.card}>
							{this.returnPiechart(productsBrandSegmentationPie)}
						</Card>
					</Grid>}
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

							<div style={{ display: "flex", alignItems: "center", justifyContent: "flex-end", backgroundColor: "#fff" }}>
								<div style={{ display: "flex", alignItems: "center", paddingRight: "20px" }} onClick={this.export}>
									<img src={exportblacksvg} alt="exportblacksvg" size={35} style={{ cursor: 'pointer' }} role="button" />
									<Typography style={{ alignItems: "center", fontSize: 15, fontFamily: "SourceSansPro-Regular", paddingLeft: 5 }}> Export</Typography></div>
								<div style={{ display: "flex", alignItems: "center", marginRight: 10 }}>
									<img src={filterblack} alt="filterblack" size={15} style={{ cursor: 'pointer' }} role="button" />
									<Typography style={{ alignItems: "center", fontSize: 15, fontFamily: "SourceSansPro-Regular" }}>  Filter</Typography></div>
								<div style={{ borderLeft: "1px solid #666666", height: 30 }} />
								<div style={{ display: "flex", alignItems: "center" }}>
									<IconButton onClick={() => this.setState({ enableListView: !this.state.enableListView })}><MdOpenInNew size={20} style={{ padding: "5px 10px" }} /></IconButton></div>
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
													{item.ProductCode}
												</TableCell>
												<TableCell className={classes.tableCell}>
													{item.ProductName}
												</TableCell>
												<TableCell className={classes.tableCell}>
													{item.ProductCategory}
												</TableCell>
												<TableCell className={classes.tableCell}>
													{item.Quantity}
												</TableCell>
												<TableCell className={classes.tableCell}>
													${item.Price}
												</TableCell>
												<TableCell className={classes.tableCell}>
													{this.ChangeDateFormat(item.CreatedOn)}
												</TableCell>
												<TableCell className={classes.tableCell} style={{ color: this.returnColor(item.ProductInventory), fontWeight: "600" }}>
													{item.ProductInventory === 'IS' ? 'In stock':'Out of stock'}
													{item.ProductInventory !== 'IS' && item.ProductInventory !== 'OS' ? 'Limited':''}
													{/* {item.ProductInventory} */}
												</TableCell>
												<TableCell className={classes.tableCell}>
													<IconButton aria-controls="simple-menu" aria-haspopup="true" onClick={(event) => this.handleClick(event)}><BiDotsVerticalRounded size={20} /></IconButton>
												</TableCell>
											</TableRow>)
									}

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
		popularProducts: state.products_reducers.popularProducts,
		productBrands: state.products_reducers.productBrands,
		productCategories: state.products_reducers.productCategories,
		productInventories: state.products_reducers.productInventories,
		productsBrandSegmentationPie: state.products_reducers.productsBrandSegmentationPie
	}
};

export default connect(
	mapStateToProps
)(withStyles(styles)(Product));
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withStyles, Typography, Button, Grid, Table, TextField, Paper, TableCell, TableHead, TableRow, TableContainer, IconButton, TableBody, Card, Checkbox, MenuItem, Menu, Breadcrumbs } from '@material-ui/core';
import { AiFillCaretLeft, AiFillCaretRight, AiOutlinePrinter } from "react-icons/ai";
import ReactApexChart from "react-apexcharts";
import { ResponsivePie } from "@nivo/pie";
import { FaSitemap, FaPlus } from "react-icons/fa";
import { FiChevronDown, FiChevronRight, FiChevronUp, FiXCircle } from "react-icons/fi";
import { BiDotsVerticalRounded, BiCheckCircle } from "react-icons/bi";
import { MdOpenInNew } from "react-icons/md";
import { getOrders, getOrdersDashboardCount, getOrderStatusReportSForPie, getOrderExport } from "../../../store/actions/orders_action";
import exportsvg from '../../../assets/images/svg/export.svg';
import exportblacksvg from '../../../assets/images/svg/exportblack.svg';
import filterblack from '../../../assets/images/svg/filterblack.svg';
import print from '../../../assets/images/svg/print.svg';
import refresh from '../../../assets/images/svg/refresh.svg';
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
		boxShadow: "0px 8px 36px rgba(50, 50, 50, 0.08)",
		background: "#FFFFFF",
		borderRadius: "8px"
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
		border: "1px solid #CFCFCE",
		borderRadius: "8px",
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
		// width: "101%"
	},
	title: {
		textDecoration: 'none',
		fontSize: '18px',
		width: "74px",
		height: "20px",
		// margin:"0px 16px",
		lineHeight: "20px",
		fontWeight: 600,
		fontStyle: "normal",
		color: "#616060",
		fontFamily: "SourceSansPro-Regular",
	},
	cardA: {
		display: "flex",
		flexDirection: "column",
		justifyContent: "center",
		alignItems: "center",
		flexGrow: 1,
		alignSelf: "stretch",
		borderRadius: 8,
		// margin: "0px 16px",
		// boxSizing:"border-box",
		boxShadow: "0px 8px 36px rgba(50, 50, 50, 0.08)",
		textAlign: "center",
		position: "static",
		// width: "272.5px",
		height: "68px",
		left: "0px",
		top: "0px",
		paddingTop: "8px"
	},
	selectCardA: {
		// padding: "15px 20px",
		borderRadius: 8,
		border: "1px solid #57B78C",
		// textAlign: "center",
		background: "#FFFFFF",
		display: "flex",
		flexDirection: "column",
		justifyContent: "center",
		alignItems: "center",
		flexGrow: 1,
		order: 1,
		alignSelf: "stretch",
		// boxSizing:"border-box",
		// margin: "0px 16px",
		boxShadow: "0px 8px 36px rgba(50, 50, 50, 0.08)",
		textAlign: "center",
		position: "static",
		// width: "272.5px",
		height: "68px",
		left: "288.5px",
		top: "0px",
		paddingTop: "8px"
	},
	cardTextTitle: {
		color: "#818180",
		fontSize: 16,
		fontStyle: "normal",
		fontWeight: "normal",
		lineHeight: "24px",
		height: "24px",
		margin: "4px 0px",
		textAlign: "center",
		top: "8px",
		width: "256.5px",
		fontFamily: "SourceSansPro-Regular",
		textTransform: "uppercase"
	},
	cardTextSecondTitle: {
		color: "#1B1B1B",
		fontSize: 23,
		lineHeight: "24px",
		height: "24px",
		margin: "4px 0px",
		textAlign: "center",
		top: "36px",
		width: "256.5px",
		// padding: "5px 0px",
		fontWeight: "600",
		fontFamily: "SourceSansPro-Regular",
	},
	selectedCardTextTitle: {
		color: "#57B78C",
		fontSize: 16,
		fontStyle: "normal",
		fontWeight: "normal",
		lineHeight: "24px",
		height: "24px",
		margin: "4px 0px",
		textAlign: "center",
		top: "8px",
		width: "256.5px",
		fontFamily: "SourceSansPro-Regular",
		textTransform: "uppercase"
	},
	selectedCardTextSecondTitle: {
		color: "#57B78C",
		fontSize: 23,
		lineHeight: "24px",
		height: "24px",
		margin: "4px 0px",
		textAlign: "center",
		top: "36px",
		width: "256.5px",
		// padding: "5px 0px",
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
 * Class representing Orders component
 */
let newArray = []
class Orders extends Component {
	constructor(props) {
		super(props);
		this.state = {
			page: 0,
			rowsPerPage: 5,
			select_order_status: "ALL",
			selected_orders: [],
			select_all: false,
			val: 7,
			checks: false,
			enableOrderListView: false,
			statusCode: '',
			startDate: '',
			endDate: '',
			enableCustomModal: false,
		};
	}

	componentDidMount() {
		this.initialOrderLoad()
		// this.props.dispatch(getOrders());
		// this.props.dispatch(getOrdersDashboardCount());
		// this.props.dispatch(getOrdersStatus())
		// this.props.dispatch(getOrdersType())
		// this.props.dispatch(getOrderStatusReportSForPie())
		// this.handleChange = this.handleChange.bind(this);
	}
	handleChange = (e, item) => {
		if (e.target.checked === true) {
			newArray = [...this.state.selected_orders, item]
			this.setState({
				selected_orders: newArray
			})
			console.log(this.state.selected_orders)
		}
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
			case "O&M Assigned":
				color = "#5EC8E6"
				break;
			case "Total":
				color = "#5EC8E6"
				break;
			case "Processing":
				color = "#5EC8E6"
				break;
			case "Completed":
				color = "#57B78C"
				break;
			case "Cancelled":
				color = "#616060"
				break;
			case "Installing":
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
			// this.state.selected_orders.push(item)
		}
		if (e.target.checked === false) {

			this.setState({
				selected_orders: this.state.selected_orders.filter(i => i !== item)
			})
		}

	}




	returnColumnChart = (piechartData) => {
		if (piechartData.length > 0) {
			let seriesData = [];
			let seriesOneDate = [];
			let categories = [];
			piechartData.map((value) => {
				seriesData.push(value.SubCount);
				seriesOneDate.push(value.OneCount);
				categories.push(value.Day);
				return ('');
			})
			let series = [{
				name: 'Subscribers',
				data: seriesData
			}, {
				name: 'One-time buy',
				data: seriesOneDate
			}];
			let chartOptions = {
				chart: {
					type: 'bar',
					height: 350,
					stacked: true,
					fontFamily: "SourceSansPro-Regular",
					toolbar: {
						show: false,
					}
				},
				grid: {
					borderColor: '#EEEEED',
					xaxis: {
						lines: {
							show: false
						}
					},
					yaxis: {
						lines: {
							show: true
						},
					},
				},
				colors: ['#F3852A', '#FEC9B4'],
				title: {
					text: "Order Type",
					align: 'left',
					floating: true,
					offsetX:7,
				    offsetY:7,
					style: {
						fontSize: '18px',
						fontWeight: 600,
						fontFamily: "SourceSansPro-SemiBold",
						fontStyle: "normal",
						color: '#000000',
					},
				},
				dataLabels: {
					enabled: false
				},
				responsive: [{
					breakpoint: 480,
					options: {
						legend: {
							position: 'bottom',
							offsetX: -10,
							offsetY: 0
						}
					}
				}],
				plotOptions: {
					bar: {
						horizontal: false,
						borderRadius: 0
					},
				},
				xaxis: {
					categories: categories,
				},
				legend: {
					show: true,
					position: 'top',
					horizontalAlign: 'right',
					inverseOrder: false,
					markers: {
						width: 10,
						height: 10,
						radius: 5,
					},
				},
				fill: {
					opacity: 1
				},
				tooltip: {
					shared: true,
					intersect: false,
					custom: function ({ seriesIndex, dataPointIndex, w }) {
						var data = w.globals.initialSeries[seriesIndex].data[dataPointIndex];
						return (`<div style="display:table;max-width: 50%;background-color:#1B1B1B;color:#FFFFFF;border-radius: 8px;padding: 4px;font-family: SourceSansPro-SemiBold;font-style: normal;font-size: 14px;line-height: 20px;font-weight: 600;">  S$  ${data}  </div>`);
					},
				}
			};
			return (
				<div>
					<ReactApexChart options={chartOptions} series={series} type="bar" height={300} />
				</div>
			)
		}
	}



	returnPieChart = (piechartData) => {

		if (Object.keys(piechartData).length > 0) {
			const data = []
			var label = []
			var series = []

			for (let [key, value] of Object.entries(piechartData)) {
				label.push(key)
				series.push(value)
			};
			for (var i = 0; i < label.length; i++) {
				var v = label[i].charAt(0).toUpperCase() + label[i].slice(1)
				data.push({ id: v, label: v, value: series[i] })
			}

			return (
				<>
					<h3 style={{
						display: "flex",
						alignItems: "center",
						margin: "13px",
						fontSize: '18px',
						fontWeight: 600,
						fontFamily: "SourceSansPro-SemiBold",
						fontStyle: "normal",
						color: '#000000',
						lineHeight: "20px",
						width: "159px",
						height: "20px",
						left: "15px",
						top: "18px"
					}}>Order status</h3>
					<div 
					style={{ height: 320 }}
					>
						<ResponsivePie
							data={data}
							margin={{ top: 20, right: 80, bottom: 20, left: 20 }}
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
							legends={[
								{
									anchor: 'right',
									direction: 'column',
									justify: false,
									translateX: 32,
									translateY: -50,
									itemsSpacing: 10,
									itemWidth: 50,
									itemHeight: 18,
									itemTextColor: '#777A7F',
									itemDirection: 'left-to-right',
									itemOpacity: 1,
									symbolSize: 10,
									symbolShape: 'circle',
									effects: [
										{
											on: 'hover',
											style: {
												itemTextColor: '#000'
											}
										}
									]
								}
							]}
						/>
					</div>
				</>
			)

		}

	}

	returnStatusCode = (status) => {
		let code = ""
		switch (status) {
			case "Pending":
				code = "PE"
				break;
			case "Assigned to O&M":
				code = "OM"
				break;
			case "Completed":
				code = "CO"
				break;
			case "Cancelled":
				code = "CA"
				break;
			default:
				break;
		}
		return code;
	}

	selectedList = (value) => {
		this.setState({ select_order_status: value })
		let days = parseInt(this.state.val);
		if (days !== '0') {
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
			let status = this.returnStatusCode(value);
			this.setState({ statusCode: status })
			this.props.dispatch(getOrders(prevDate, currentDate, status));
		} else {
			let status = this.returnStatusCode(value);
			this.setState({ statusCode: status })
			this.props.dispatch(getOrders(this.state.startDate, this.state.endDate, status));
		}

	}

	refresh = () => {
		let days = parseInt(this.state.val);
		if (days !== '0') {
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
			let status = this.returnStatusCode(this.state.select_order_status);
			this.setState({ statusCode: status })
			this.props.dispatch(getOrders(prevDate, currentDate, status));
		} else {
			let status = this.returnStatusCode(this.state.select_order_status);
			this.setState({ statusCode: status })
			this.props.dispatch(getOrders(this.state.startDate, this.state.endDate, status));
		}
	}

	initialOrderLoad = () => {
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
		this.props.dispatch(getOrdersDashboardCount(prevDate, currentDate));
		this.props.dispatch(getOrders(prevDate, currentDate, ''));
		this.props.dispatch(getOrderStatusReportSForPie(prevDate, currentDate));
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
			this.props.dispatch(getOrdersDashboardCount(prevDate, currentDate));
			this.props.dispatch(getOrders(prevDate, currentDate, this.state.statusCode));
			this.props.dispatch(getOrderStatusReportSForPie(prevDate, currentDate));
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
		this.props.dispatch(getOrdersDashboardCount(start, end));
		this.props.dispatch(getOrders(start, end, this.state.statusCode));
		this.props.dispatch(getOrderStatusReportSForPie(start, end));
	}

	export = () => {
		this.props.dispatch(getOrderExport());
	}

	/** rendering Orders information. */
	render() {
		const { classes, allOrders, orderDashboardCount, piechartData } = this.props;
		const { rowsPerPage, page } = this.state;
		console.log("allOrders=", allOrders)
		return (
			<div className={classes.root}>
				{this.state.enableCustomModal && <CustomModal isOpen={this.state.enableCustomModal} fromDate={this.state.startDate} toDate={this.state.endDate} handelopen={this.handleOpenCustomModel} cancel={this.handleCloseCustomModel} />}
				<div style={{
					display: "flex", justifyContent: "space-between",
					// boxSizing: "border-box",
					// borderRadius: "8px",
					// order: "1",
					// flexGrow: "0",
					// margin: "8px 0px"
				}}>
					<Breadcrumbs separator={<FiChevronRight size={15} />} aria-label="breadcrumb" style={{ color: "#9F9E9E", left: "29.21%", right: "26.03%", top: "10.88%", bottom: "10.93%" }}>
						<Typography onClick={() => this.setState({ enableOrderListView: false })} style={{
							fontFamily: "SourceSansPro-Regular", color: "#616060", cursor: "pointer", fontSize: 18, fontWeight: 600, width: "74px", height: "20px", fontStyle: "normal", lineHeight: "20px"
						}} color="primary" >
							Overview
						</Typography>
						{this.state.enableOrderListView && <Typography style={{ fontFamily: "SourceSansPro-Regular", fontSize: 15, fontWeight: "600", lineHeight: "20px", width: "53px", height: "20px" }} color="textPrimary">Orders</Typography>}
					</Breadcrumbs>

					{/* <Typography className={classes.title}>
						Overview
					</Typography>  */}
					<div style={{ display: "flex", marginBottom: 9 }}>
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
						{this.state.enableOrderListView && <div>
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
								{/* {orderStatus.map(x => <option key={x.value} value={x.value} style={{ fontFamily: "SourceSansPro-Regular" }}>
										{x.value}
									</option>)} */}
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
								{/* {orderTypes.map(x => <option key={x.value} value={x.value} style={{ fontFamily: "SourceSansPro-Regular" }}>
										{x.value}
									</option>)} */}

							</TextField></div>}
						<Button variant="contained" className={classes.buttonVariant}>
							<FaPlus size={13} /> New Order
						</Button>
					</div>
				</div>
				{this.state.val === '0' && <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', fontSize: '14px', marginBottom: '2%' }}>{this.state.startDate} to {this.state.endDate} <span style={{ color: 'blue', fontSize: '12px', marginLeft: '4%', cursor: 'pointer' }} onClick={this.changeCustomDate}>Change</span></div>}
				<Grid container spacing={4}>
					{!this.state.enableOrderListView && <Grid item xs={12} sm={6} md={3}>
						<Card className={classes.cardA}>
							<Typography className={classes.cardTextTitle}>Today</Typography>
							{orderDashboardCount &&
								<Typography className={classes.cardTextSecondTitle}>
									{orderDashboardCount.Total}
								</Typography>
							}
						</Card>
					</Grid>}
					{!this.state.enableOrderListView && <Grid item xs={12} sm={6} md={3}>
						<Card className={classes.selectCardA}>
							<Typography className={classes.selectedCardTextTitle}>Pending</Typography>
							{orderDashboardCount &&
								<Typography className={classes.selectedCardTextSecondTitle}>
									{orderDashboardCount.pending_Status}
								</Typography>
							}
						</Card>
					</Grid>}
					{!this.state.enableOrderListView && <Grid item xs={12} sm={6} md={3}>
						<Card className={classes.cardA}>
							<Typography className={classes.cardTextTitle}>Assigned to O&M </Typography>
							{orderDashboardCount && <Typography className={classes.cardTextSecondTitle}>{orderDashboardCount.Assingnedto_OandM_Status}</Typography>}
						</Card>
					</Grid>}
					{!this.state.enableOrderListView && <Grid item xs={12} sm={6} md={3}>
						<Card className={classes.cardA}>
							<Typography className={classes.cardTextTitle}>Cancelled</Typography>
							{orderDashboardCount && <Typography className={classes.cardTextSecondTitle}>{orderDashboardCount.Cancelled_Status}</Typography>}
						</Card>
					</Grid>}

					{!this.state.enableOrderListView && piechartData && piechartData.result && <Grid item xs={12} md={6}>
						<Card className={classes.card}
							style={{
								height: "100%",
							}} >
							{this.returnColumnChart(piechartData.result)}
						</Card>
					</Grid>}
					{!this.state.enableOrderListView && piechartData && piechartData.OrderStatus && <Grid item xs={12} md={6}>
						<Card className={classes.card}
							// style={{
							// 	width: "561px",
							// 	height: "100%"
							// 	}}
								>
							{this.returnPieChart(piechartData.OrderStatus)}
							{/* asdasdasda asdadasdas */}
						</Card>
					</Grid>}

					<Grid item xs={12}>
						<TableContainer component={Paper} className={classes.paper}>
							{this.state.selected_orders.length > 0 && <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", backgroundColor: "#000", borderRadius: "8px 8px 0px 0px" }}>
								<div>
									<Typography style={{ alignItems: "center", paddingLeft: 15, fontSize: 15, color: "#fff", fontFamily: "SourceSansPro-Regular" }}> {this.state.selected_orders.length} items selected</Typography>
								</div>
								<div style={{ display: "flex", alignItems: "center", marginRight: "10px" }}>
									<div style={{ display: "flex", alignItems: "center" }}>
										<img src={exportsvg} alt="exportsvg" size={15} style={{ cursor: 'pointer' }} role="button" />
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

							<div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", backgroundColor: "#fff", borderBottom: "1px solid #EEEEED", marginBottom: 10, paddingLeft: 5, paddingTop: 5 }}>
								<div style={{ display: "flex" }}>
									<Typography onClick={() => this.selectedList("ALL")} className={this.state.select_order_status === "ALL" ? classes.selectOrderTitleText : classes.orderTitleText}>All Orders</Typography>
									<Typography onClick={() => this.selectedList("Pending")} className={this.state.select_order_status === "Pending" ? classes.selectOrderTitleText : classes.orderTitleText}>Pending</Typography>
									<Typography onClick={() => this.selectedList("Assigned to O&M")} className={this.state.select_order_status === "Assigned to O&M" ? classes.selectOrderTitleText : classes.orderTitleText}>Assigned to O&M</Typography>
									<Typography onClick={() => this.selectedList("Completed")} className={this.state.select_order_status === "Completed" ? classes.selectOrderTitleText : classes.orderTitleText}>Completed</Typography>
									<Typography onClick={() => this.selectedList("Cancelled")} className={this.state.select_order_status === "Cancelled" ? classes.selectOrderTitleText : classes.orderTitleText}>Cancelled</Typography>
								</div>
								<div style={{ display: "flex" }}>
									{this.state.selected_orders.length < 1 && <div style={{ display: "flex", alignItems: "center", justifyContent: "flex-end" }}>
										<div style={{ display: "flex", alignItems: "center", paddingRight: "10px" }} onClick={this.export}>
											<img src={exportblacksvg} alt="exportblacksvg" size={35} style={{ cursor: 'pointer' }}
												role="button" />
											<Typography style={{ alignItems: "center", fontSize: 15, margin: "0px 5px", fontFamily: "SourceSansPro-Regular" }}> Export</Typography></div>
										<div style={{ display: "flex", alignItems: "center", paddingRight: "10px" }}>
											<img src={filterblack} alt="filterblack" size={15} style={{ cursor: 'pointer' }}
												role="button" />
											<Typography style={{ alignItems: "center", fontSize: 15, margin: "0px 5px", fontFamily: "SourceSansPro-Regular" }}> Filter</Typography>
										</div>
										<div style={{ display: "flex", alignItems: "center" }} onClick={this.refresh}>
											<img src={refresh} alt="refresh" size={15}
												style={{ cursor: 'pointer' }}
												role="button"
											/>
											<Typography style={{ alignItems: "center", fontSize: 15, margin: "0px 5px", fontFamily: "SourceSansPro-Regular" }}> Refresh</Typography></div>
										<div style={{
											borderLeft: "1px solid #CFCFCE", height: 30
											// left:"238px",width:"27px",transform:"rotate(90deg)",order:4,
										}} />
										<IconButton onClick={() => this.setState({ enableOrderListView: true })}><MdOpenInNew size={20} /></IconButton>
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
													// indeterminate
													onClick={(e) => this.selectAll(e)}
													checked={allOrders.length === this.state.selected_orders.length}
													inputProps={{ 'aria-label': 'primary checkbox' }}
												/>
											</TableCell>}

										{/* {this.state.select_order_status === "Pending" &&
											<TableCell align="left" className={classes.tableHeadCell}>
												<Checkbox
													color="primary"
													// indeterminate
													onClick={(e) => this.selectAll(e)}
													checked={allOrders.length === this.state.selected_orders.length}
													inputProps={{ 'aria-label': 'primary checkbox' }}
												/>
											</TableCell>} */}

										<TableCell align="left" className={classes.tableHeadCell}>
											<div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
												<Typography style={{
													fontSize: "14px",
													fontWeight: "600",
													fontFamily: "SourceSansPro-Regular",
													color: "#818180",
													textTransform: "uppercase",
													letterSpacing: "0.05em",
													lineHeight: "20px",
												}}>Order Id </Typography>
											</div>
										</TableCell>
										<TableCell align="left" className={classes.tableHeadCell}>
											<div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
												<Typography style={{
													fontSize: "14px",
													fontWeight: "600",
													fontFamily: "SourceSansPro-Regular",
													color: "#818180",
													textTransform: "uppercase",
													letterSpacing: "0.05em",
													lineHeight: "20px",
													// height:"40px",
													// left:"16px",
													// right:"35px",
													// top:"calc(50% - 40px/2)"
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
													fontSize: "14px",
													fontWeight: "600",
													fontFamily: "SourceSansPro-Regular",
													color: "#818180",
													textTransform: "uppercase",
													letterSpacing: "0.05em",
													lineHeight: "20px",
												}}>Customer </Typography>
											</div>
										</TableCell>}
										{this.state.select_order_status !== "Assigned to O&M" && <TableCell align="left" className={classes.tableHeadCell}>
											<div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
												<Typography style={{
													fontSize: "14px",
													fontWeight: "600",
													fontFamily: "SourceSansPro-Regular",
													color: "#818180",
													textTransform: "uppercase",
													letterSpacing: "0.05em",
													lineHeight: "20px",
												}}>Order Type </Typography>
											</div>
										</TableCell>}
										{this.state.select_order_status === "Assigned to O&M" && <TableCell align="left" className={classes.tableHeadCell}>
											<div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
												<Typography style={{
													fontSize: "14px",
													fontWeight: "600",
													fontFamily: "SourceSansPro-Regular",
													color: "#818180",
													textTransform: "uppercase",
													letterSpacing: "0.05em",
													lineHeight: "20px",
												}}>Assigned on </Typography>
											</div>
										</TableCell>}
										{this.state.select_order_status !== "Pending" &&

											<TableCell align="left" className={classes.tableHeadCell}>
												<div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
													<Typography style={{
														fontSize: "14px",
														fontWeight: "600",
														fontFamily: "SourceSansPro-Regular",
														color: "#818180",
														textTransform: "uppercase",
														letterSpacing: "0.05em",
														lineHeight: "20px",
													}}>Assigned to </Typography>
												</div>
											</TableCell>}
										<TableCell align="left" className={classes.tableHeadCell}>
											<div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
												<Typography style={{
													fontSize: "14px",
													fontWeight: "600",
													fontFamily: "SourceSansPro-Regular",
													color: "#818180",
													textTransform: "uppercase",
													letterSpacing: "0.05em",
													lineHeight: "20px",
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
													fontSize: "14px",
													fontWeight: "600",
													fontFamily: "SourceSansPro-Regular",
													color: "#818180",
													textTransform: "uppercase",
													letterSpacing: "0.05em",
													lineHeight: "20px",
												}}>Status </Typography>
											</div>
										</TableCell>
										<TableCell align="left" className={classes.tableHeadCell}>
											<div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
												<Typography style={{
													fontSize: "14px",
													fontWeight: "600",
													fontFamily: "SourceSansPro-Regular",
													color: "#818180",
													textTransform: "uppercase",
													letterSpacing: "0.05em",
													lineHeight: "20px",
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
														{item.OrderNo}
													</TableCell>
													<TableCell className={classes.tableCell}>
														{item.OrderDate}
													</TableCell>
													{this.state.select_order_status !== "Assigned to O&M" && <TableCell className={classes.tableCell}>
														{item.Customer}
													</TableCell>}
													{this.state.select_order_status !== "Assigned to O&M" && <TableCell className={classes.tableCell}>
														{item.OrderType}
													</TableCell>}
													{this.state.select_order_status === "Assigned to O&M" && <TableCell className={classes.tableCell}>
														{item.AssignedOnDate}
													</TableCell>}
													{this.state.select_order_status !== "Pending" && <TableCell className={classes.tableCell}>
														{item.AssignedTo}
													</TableCell>}
													<TableCell className={classes.tableCell}>
														{item.OrderTotal}
													</TableCell>
													<TableCell className={classes.tableCell} style={{ color: this.returnColor(item.OrderStatus), fontWeight: "600" }}>
														{item.OrderStatus}
													</TableCell>
													<TableCell className={classes.tableCell}>
														{item.LastModifiedDate}
													</TableCell>
													<TableCell className={classes.tableCell}>
														<IconButton aria-controls="simple-menu" aria-haspopup="true" onClick={(event) => this.handleClick(event)}><BiDotsVerticalRounded size={20} /></IconButton>
													</TableCell>
												</TableRow>) :
										<TableRow className={classes.tableRow}>
											<TableCell className={classes.tableCell} colSpan={10} align="center">
												Currently there are no records
											</TableCell>
										</TableRow>
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
											<option value={5}>
												5
											</option>
											<option value={15}>
												15
											</option>
											<option value={25}>
												25
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
		orderDashboardCount: state.orders_reducers.orderDashboardCount,
		piechartData: state.orders_reducers.piechartData
	}
};

export default connect(
	mapStateToProps
)(withStyles(styles)(Orders));
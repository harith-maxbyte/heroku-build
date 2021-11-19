import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withStyles, Typography, Grid, Table, TextField, Paper, TableCell, TableHead, Menu, MenuItem, TableRow, TableContainer, IconButton, TableBody, Card, Checkbox, Breadcrumbs } from '@material-ui/core';
import { AiFillCaretLeft, AiFillCaretRight, AiOutlinePrinter } from "react-icons/ai";
import ReactApexChart from "react-apexcharts";
import { ResponsivePie } from "@nivo/pie";
import { FiChevronDown, FiChevronUp, FiChevronRight, FiXCircle } from "react-icons/fi";
import { BiDotsVerticalRounded, BiCheckCircle } from "react-icons/bi";
import { MdOpenInNew } from "react-icons/md";
import { FaSitemap } from "react-icons/fa";
import { getAllCustomers, getCustomerStatusReports, getCustomersViewCount, getCustomersExport } from '../../../store/actions/customer_action';
import exportblacksvg from '../../../assets/images/svg/exportblack.svg';
import filterblack from '../../../assets/images/svg/filterblack.svg';
import refresh from '../../../assets/images/svg/refresh.svg';
import exportsvg from '../../../assets/images/svg/export.svg';
import CustomModal from '../../../components/modal'
import print from '../../../assets/images/svg/print.svg';


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
		borderRadius: "8px",
		// margin:"0px 16px"

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
		fontSize: 14,
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
		color: "#818180",
		backgroundColor: "#F6F6F6",
		borderRight: "1px solid #cccccc",
		fontFamily: "SourceSansPro-Regular",
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
		fontFamily: "SourceSansPro-Regular",
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
		borderRadius: "8px",
		fontSize: "13x !important",
		fontFamily: "SourceSansPro-Regular",
		"&:hover": {
			border: "1px solid #57B78C",
			backgroundColor: "#FFFFFF"
		}
	},
	inputDrawerStyle: {
		fontFamily: "SourceSansPro-Regular",
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
		lineHeight: "24px",
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
	plantitle: {
		padding: "8px 7px",
		color: "#000000",
		margin: "0px 3px",
		fontSize: 15,
		fontWeight: "600",
		cursor: "pointer",
		fontFamily: "SourceSansPro-Regular"
	},
	selectedPlanTitle: {
		padding: "8px 7px",
		color: "#57B78C",
		margin: "0px 3px",
		fontSize: 15,
		fontWeight: "600",
		cursor: "pointer",
		borderBottom: "2px solid #57B78C",
		fontFamily: "SourceSansPro-Regular"
	}
});


/**
 * @class
 * Class representing Customers component
 */
class Customers extends Component {
	constructor(props) {
		super(props);
		this.state = {
			page: 0,
			rowsPerPage: 5,
			select_customer_plan: "ALL",
			selected_customers: [],
			enableCustomerFullView: false,
			val: 7,
			select_all: false,
			statusCode: '',
			startDate: '',
			endDate: '',
			enableCustomModal: false
		};
	}

	componentDidMount = () => {
		this.initialCustomerLoad();
		// this.props.dispatch(getAllCustomers())
		// this.props.dispatch(getCustomersViewCount())
		// this.props.dispatch(getCustomerStatusReports())
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

	selectAll = (e) => {
		const { allCustomers } = this.props;

		if (e.target.checked === true) {
			this.setState({ selected_customers: this.state.select_all === false ? allCustomers : [], select_all: !this.state.select_all })
		}
		if (e.target.checked === false) {
			this.setState({ selected_customers: this.state.select_all === false ? allCustomers : [], select_all: !this.state.select_all })
		}
	}

	selectCustomers = (e, item) => {

		if (e.target.checked === true) {

			this.setState({
				selected_customers: this.state.selected_customers.concat(item)
			})

		}
		if (e.target.checked === false) {

			this.setState({
				selected_customers: this.state.selected_customers.filter(i => i !== item)
			})

		}

	}
	returnColor = (status) => {
		let color = "#000000"
		switch (status) {
			case "Active Subscriber":
				color = "#57B78C"
				break;
			case "One-Time":
				color = "#5EC8E6"
				break;
			case "Leads":
				color = "#FFC633"
				break;
			case "Suscription Withdrawn":
				color = "#B9B8B8"
				break;
			case "Total":
				color = "#90ee90"
				break;
			default:
				break;
		}
		return color;
	}

	returnPiechart = (customerStatusReportsPie) => {
		if (Object.keys(customerStatusReportsPie).length > 0) {
			const data = []
			var label = []
			var series = []

			for (let [key, value] of Object.entries(customerStatusReportsPie)) {
				series.push(Math.round(value))
				label.push(key)
			}
			for (var i = 0; i < series.length; i++) {
				data.push({ id: label[i], label: label[i], value: series[i] })
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
					}}>Customer types</h3>
					<div style={{ height: 280 }}>
						<ResponsivePie
							data={data}
							margin={{ top: 30, right: 80, bottom: 20, left: -20 }}
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
									itemWidth: 100,
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

	returnBarchart = (current, previous) => {

		let week = [];
		let prevWeek = [];
		let lable = [];
		current && current.length > 0 && current.map((value) => {
			week.push(value.Count)
			if (!lable.includes(value.Day)) {
				lable.push(value.Day)
			}
			return ('');
		})

		previous && previous.length > 0 && previous.map((value) => {
			prevWeek.push(value.Count)
			if (!lable.includes(value.Day)) {
				lable.push(value.Day)
			}
			return ('');
		})

		let series = [{
			name: 'This Week',
			type: 'area',
			data: week
		}, {
			name: 'Last Week',
			type: 'line',
			data: prevWeek
		}];
		let options = {
			chart: {
				height: 250,
				type: 'line',
				stacked: false,
				fontFamily: "SourceSansPro-Regular",
				toolbar: {
					show: false,
				},
				zoom: {
					enabled: false,
				}
			},
			title: {
				text: "Total Customers",
				align: 'left',
				floating: true,
				offsetX: 7,
				offsetY: 7,
				style: {
					fontSize: '18px',
					fontWeight: 600,
					fontFamily: "SourceSansPro-SemiBold",
					fontStyle: "normal",
					color: '#000000',
				},
			},
			stroke: {
				curve: 'smooth',
				width: [2, 1],
				dashArray: [0, 8]
			},
			fill: {
				colors: ['#FEEFE8', '#FEEFE8'],
				opacity: 0.9,
				type: 'solid',
				gradient: {
					shade: 'dark',
					type: "horizontal",
					shadeIntensity: 0.5,
					gradientToColors: undefined,
					inverseColors: true,
					opacityFrom: 1,
					opacityTo: 1,
					stops: [0, 50, 100],
					colorStops: []
				},
			},
			colors: ["#E4B5A2", "#cccccc"],
			labels: lable,
			markers: {
				width: 30,
				height: 2,
			},
			xaxis: {
				tooltip: {
					enabled: false,
					formatter: function (val, opts) {
						return val
					},
				}
			},
			yaxis: {
				labels: {
					show: true,
					formatter: (value) => { return parseFloat(parseInt(value) / 1000).toString() + "k" },
				}
			},
			legend: {
				show: true,
				position: 'top',
				horizontalAlign: 'right',
				inverseOrder: true,
				markers: {
					width: 30,
					height: 2,
					offsetY: -3
				},
			},
			tooltip: {
				shared: true,
				intersect: false,
				custom: function ({ series, seriesIndex, dataPointIndex, w }) {
					var data = w.globals.initialSeries[seriesIndex].data[dataPointIndex];
					return (`<div style="display:table;max-width: 50%;background-color:#1B1B1B;color:#FFFFFF;border-radius: 8px;padding: 4px;font-family: SourceSansPro-SemiBold;font-style: normal;font-size: 14px;line-height: 20px;font-weight: 600;">  S$ ${data}  </div>`);
				},
			}
		};
		return (
			<div>
				<ReactApexChart options={options} series={series} type="line" height={250} />
			</div>
		)
	}

	// selectCustomerPlan = (value) => {
	// 	if (value === "ALL") {
	// 		this.setState({ select_customer_plan: value })
	// 		this.props.dispatch(getAllCustomers());
	// 	} else {
	// 		let query = `CustomerPlan=${value}`
	// 		this.setState({ select_customer_plan: value })
	// 		this.props.dispatch(getCustomersByDropdown(query))
	// 	}
	// }

	returnStatusCode = (status) => {
		let code = ""
		switch (status) {
			case "Subscriber":
				code = "S"
				break;
			case "One-Time":
				code = "L"
				break;
			default:
				break;
		}
		return code;
	}

	selectCustomerPlan = (value) => {
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
			this.setState({ statusCode: status, select_customer_plan: value })
			this.props.dispatch(getAllCustomers(prevDate, currentDate, status));
			this.props.dispatch(getCustomerStatusReports(prevDate, currentDate));
		} else {
			let status = this.returnStatusCode(value);
			this.setState({ statusCode: status, select_customer_plan: value })
			this.props.dispatch(getAllCustomers(this.state.startDate, this.state.endDate, status));
			this.props.dispatch(getCustomerStatusReports(this.state.startDate, this.state.endDate));
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
			let status = this.returnStatusCode(this.state.select_customer_plan);
			this.props.dispatch(getAllCustomers(prevDate, currentDate, status));
		} else {
			let status = this.returnStatusCode(this.state.select_customer_plan);
			this.props.dispatch(getAllCustomers(this.state.startDate, this.state.endDate, status));
		}
	}

	initialCustomerLoad = () => {
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
		this.props.dispatch(getCustomersViewCount(prevDate, currentDate))
		this.props.dispatch(getAllCustomers(prevDate, currentDate, ''));
		this.props.dispatch(getCustomerStatusReports(prevDate, currentDate));
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
			this.props.dispatch(getCustomersViewCount(prevDate, currentDate))
			this.props.dispatch(getAllCustomers(prevDate, currentDate, this.state.statusCode));
			this.props.dispatch(getCustomerStatusReports(prevDate, currentDate));
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
		this.setState({
			enableCustomModal: true
		})
	}

	ChangeDateFormat = (val) => {
		var res = (val.split('/'))
		const date = new Date(res[2], (res[1] - 1), res[0]);
		const month = date.toLocaleString('default', { month: 'short' });
		return (res[0] + ' ' + month + ' ' + res[2])
	}

	handleOpenCustomModel = (start, end) => {
		this.setState({
			startDate: start,
			endDate: end,
			enableCustomModal: !this.state.enableCustomModal
		})
		this.props.dispatch(getCustomersViewCount(start, end))
		this.props.dispatch(getAllCustomers(start, end, this.state.statusCode));
		this.props.dispatch(getCustomerStatusReports(start, end));
	}

	export = () => {
		console.log("export console")
		this.props.dispatch(getCustomersExport());
	}

	/** rendering Customers information. */
	render() {
		const { classes, allCustomers, coutomersOverviewCount, customerStatusReportsPie } = this.props;
		const { rowsPerPage, page } = this.state;
		return (
			<div className={classes.root}>
				{this.state.enableCustomModal && <CustomModal isOpen={this.state.enableCustomModal} fromDate={this.state.startDate} toDate={this.state.endDate} handelopen={this.handleOpenCustomModel} cancel={this.handleCloseCustomModel} />}
				<div style={{
					display: "flex", justifyContent: "space-between"
					, boxSizing: "border-box",
					borderRadius: "8px",
					order: "1",
					flexGrow: "0",
					width: "-263px",
					height: "48px",
					// padding:"12px 16px",
					margin: "8px 0px"
				}}>
					<Breadcrumbs separator={<FiChevronRight size={15} />} aria-label="breadcrumb" style={{ color: "#9F9E9E", left: "29.21%", right: "26.03%", top: "10.88%", bottom: "10.93%" }}>
						<Typography onClick={() => this.setState({ enableCustomerFullView: false })} style={{
							fontFamily: "SourceSansPro-Regular", color: "#616060", cursor: "pointer", fontSize: 18, fontWeight: 600, width: "74px", height: "20px", fonttyle: "normal", lineHeight: "20px"
						}} color="primary" >
							Overview
						</Typography>
						{this.state.enableCustomerFullView && <Typography style={{ fontFamily: "SourceSansPro-Regular", fontSize: 15, fontWeight: "600", lineHeight: "20px", width: "53px", height: "20px" }} color="textPrimary">Customer</Typography>}
					</Breadcrumbs>

					{/* <Typography className={classes.title}>
						Overview
					</Typography> */}
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
					</div>
				</div>
				{this.state.val === '0' && <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', fontSize: '14px', marginBottom: '2%' }}>{this.state.startDate} to {this.state.endDate} <span style={{ color: 'blue', fontSize: '12px', marginLeft: '4%', cursor: 'pointer' }} onClick={this.changeCustomDate}>Change</span></div>}
				<Grid container spacing={4}>
					{!this.state.enableCustomerFullView && <Grid item xs={12} sm={6} md={3}>
						{coutomersOverviewCount &&
							<Card className={this.state.select_customer_plan === "Subscriber" ? classes.selectCardA : classes.cardA} onClick={() => this.selectCustomerPlan("Subscriber")}>
								<Typography className={classes.cardTextTitle}>Subscribers</Typography>
								<Typography className={classes.cardTextSecondTitle}>
									{coutomersOverviewCount.Subcribers}
								</Typography>
							</Card>
						}
					</Grid>}
					{!this.state.enableCustomerFullView && <Grid item xs={12} sm={6} md={3}>
						{coutomersOverviewCount &&
							<Card className={this.state.select_customer_plan === "ALL" ? classes.selectCardA : classes.cardA} onClick={() => this.selectCustomerPlan("ALL")}>
								<Typography>Subscription Overdue</Typography>
								<Typography className={classes.selectedCardTextSecondTitle}>
									{coutomersOverviewCount.SubcriptionOverdue}
								</Typography>
							</Card>
						}
					</Grid>}
					{!this.state.enableCustomerFullView && <Grid item xs={12} sm={6} md={3}>
						{coutomersOverviewCount &&
							<Card className={this.state.select_customer_plan === "One-Time" ? classes.selectCardA : classes.cardA} onClick={() => this.selectCustomerPlan("One-Time")}>
								<Typography className={classes.cardTextTitle}>Leads </Typography>
								<Typography className={classes.cardTextSecondTitle}>
									{coutomersOverviewCount.lead}
								</Typography>
							</Card>
						}
					</Grid>}
					{!this.state.enableCustomerFullView && <Grid item xs={12} sm={6} md={3}>
						{coutomersOverviewCount &&
							<Card className={this.state.select_customer_plan === "ALL" ? classes.selectCardA : classes.cardA} onClick={() => this.selectCustomerPlan("ALL")} >
								<Typography className={classes.cardTextTitle}>Subscription Widthdrawn</Typography>
								<Typography className={classes.cardTextSecondTitle}>
									{coutomersOverviewCount.SubcriptionWithdrawn}
								</Typography>
							</Card>
						}
					</Grid>}
					{!this.state.enableCustomerFullView && customerStatusReportsPie && customerStatusReportsPie.result && customerStatusReportsPie.previousresult && <Grid item xs={12} md={6}>
						<Card className={classes.card} style={{
							height: "100%",
							left: "0px",
							top: "0px"
						}}>
							{this.returnBarchart(customerStatusReportsPie.result, customerStatusReportsPie.previousresult)}
						</Card>
					</Grid>}
					{!this.state.enableCustomerFullView && customerStatusReportsPie && customerStatusReportsPie.CustomerStatus && <Grid item xs={12} md={6}>
						<Card className={classes.card} style={{
							height: "100%",
							left: "calc(50% - 561px/2 + 288.5px)",
							top: "0px"
						}}>
							{this.returnPiechart(customerStatusReportsPie.CustomerStatus)}
						</Card>
					</Grid>}
					<Grid item xs={12}>
						<TableContainer component={Paper} className={classes.paper}>
							{this.state.selected_customers.length > 0 && <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", backgroundColor: "#000", borderRadius: "8px 8px 0px 0px" }}>
								<div>
									<Typography style={{ alignItems: "center", paddingLeft: 15, fontSize: 15, color: "#fff", fontFamily: "SourceSansPro-Regular" }}> {this.state.selected_customers.length} items selected</Typography>
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



							<div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", backgroundColor: "#FFFFFF", borderBottom: "1px solid #EEEEED", marginBottom: 10, paddingLeft: 5, paddingTop: 5 }}>
								<div style={{ display: "flex" }}>
									<Typography onClick={() => this.selectCustomerPlan("ALL")} className={this.state.select_customer_plan === "ALL" ? classes.selectedPlanTitle : classes.plantitle}>All Customers</Typography>
									<Typography onClick={() => this.selectCustomerPlan("Subscriber")} className={this.state.select_customer_plan === "Subscriber" ? classes.selectedPlanTitle : classes.plantitle}>Subscribers</Typography>
									<Typography onClick={() => this.selectCustomerPlan("One-Time")} className={this.state.select_customer_plan === "One-Time" ? classes.selectedPlanTitle : classes.plantitle} >Leads</Typography>
								</div>
								<div style={{ display: "flex", alignItems: "center" }}>
									<div style={{ display: "flex", alignItems: "center", paddingRight: "10px" }} onClick={this.export}>
										<img src={exportblacksvg} alt="exportblacksvg" size={35} style={{ cursor: 'pointer' }} /><Typography style={{ alignItems: "center", fontSize: 15, margin: "0px 5px", fontFamily: "SourceSansPro-Regular" }}> Export</Typography></div>
									<div style={{ display: "flex", alignItems: "center", paddingRight: "10px" }}>
										<img src={filterblack} alt="filterblack" size={15} style={{ cursor: 'pointer' }} /><Typography style={{ alignItems: "center", fontSize: 15, margin: "0px 5px", fontFamily: "SourceSansPro-Regular" }}>  Filter</Typography></div>
									<div style={{ display: "flex", alignItems: "center", paddingRight: "10px" }} onClick={this.refresh}>
										<img src={refresh} alt="refresh" size={15} style={{ cursor: 'pointer' }} /><Typography style={{ alignItems: "center", fontSize: 15, margin: "0px 5px", fontFamily: "SourceSansPro-Regular" }}> Refresh</Typography></div>
									<div style={{
										borderLeft: "1px solid #CFCFCE", height: 30
									}} />
									<IconButton onClick={() => this.setState({ enableCustomerFullView: true })}><MdOpenInNew size={20} style={{ padding: "5px 10px" }} /></IconButton>
								</div>
							</div>
							<Table className={classes.card}>
								<TableHead className={classes.tableHead}>
									<TableRow >
										{this.state.select_customer_plan === "ALL" &&
											<TableCell align="left" className={classes.tableHeadCell}>
												<Checkbox
													color="primary"
													onClick={(e) => this.selectAll(e)}
													checked={allCustomers.length === this.state.selected_customers.length}
													inputProps={{ 'aria-label': 'primary checkbox' }}
												/>
											</TableCell>}
										<TableCell align="left" className={classes.tableHeadCell}>
											<div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
												<Typography style={{
													fontSize: 15,
													fontWeight: "600",
													color: "#7B8395",
													textTransform: "uppercase",
													fontFamily: "SourceSansPro-Regular"
												}}>Customer Name </Typography>
											</div>
										</TableCell>
										<TableCell align="left" className={classes.tableHeadCell}>
											<div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
												<Typography style={{
													fontSize: 15,
													fontWeight: "600",
													color: "#7B8395",
													textTransform: "uppercase",
													fontFamily: "SourceSansPro-Regular"
												}}>Email </Typography>
											</div>
										</TableCell>
										<TableCell align="left" className={classes.tableHeadCell}>
											<div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
												<Typography style={{
													fontSize: 15,
													fontWeight: "600",
													color: "#7B8395",
													textTransform: "uppercase",
													fontFamily: "SourceSansPro-Regular"
												}}>Phone </Typography>
											</div>
										</TableCell>
										<TableCell align="left" className={classes.tableHeadCell}>
											<div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
												<Typography style={{
													fontSize: 15,
													fontWeight: "600",
													color: "#7B8395",
													textTransform: "uppercase",
													fontFamily: "SourceSansPro-Regular"
												}}>Plan </Typography>
											</div>
										</TableCell>
										<TableCell align="left" className={classes.tableHeadCell}>
											<div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
												<Typography style={{
													fontSize: 15,
													fontWeight: "600",
													color: "#7B8395",
													textTransform: "uppercase",
													fontFamily: "SourceSansPro-Regular"
												}}>Active Since </Typography>
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
													textTransform: "uppercase",
													fontFamily: "SourceSansPro-Regular"
												}}>Last Service </Typography>
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
													textTransform: "uppercase",
													fontFamily: "SourceSansPro-Regular"
												}}>Service Location </Typography>
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
												}}>Status </Typography>
											</div>
										</TableCell>
										<TableCell align="left" className={classes.tableHeadCell}></TableCell>
									</TableRow>
								</TableHead>
								<TableBody>
									{allCustomers
										.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
										.map((item, index) =>
											<TableRow
												key={index.toString()}
												className={classes.tableRow}
												hover>
												{this.state.select_customer_plan === "ALL" &&
													<TableCell className={classes.tableCell}>
														<Checkbox
															color="primary"
															checked={this.state.selected_customers.includes(item) || this.state.selected_customers.length === allCustomers.length}
															onClick={(e) => this.selectCustomers(e, item)}
															inputProps={{ 'aria-label': 'primary checkbox' }}
														/>
													</TableCell>}
												<TableCell className={classes.tableCell}>
													{item.FirstName + item.LastName}
												</TableCell>
												<TableCell className={classes.tableCell}>
													<Typography color="primary" style={{ textDecoration: "underline" }}>{item.Email}</Typography>
												</TableCell>
												<TableCell className={classes.tableCell}>
													{item.Phone}
												</TableCell>
												<TableCell className={classes.tableCell}>
													{item.PlanInfo.charAt(0).toUpperCase() + item.PlanInfo.slice(1)}
												</TableCell>
												<TableCell className={classes.tableCell}>
													{this.ChangeDateFormat(item.CreatedOn)}
												</TableCell>
												<TableCell className={classes.tableCell}>
													{this.ChangeDateFormat(item.LastService)}
												</TableCell>
												<TableCell className={classes.tableCell}>
													{item.ServiceLocation}
												</TableCell>
												<TableCell className={classes.tableCell} style={{ color: this.returnColor(item.CustomerType), fontWeight: "600" }}>
													{item.CustomerType}
												</TableCell>
												<TableCell className={classes.tableCell}>
													<IconButton aria-controls="simple-menu" aria-haspopup="true" onClick={(event) => this.handleClick(event)}><BiDotsVerticalRounded size={20} /></IconButton>
												</TableCell>
												{/* <TableCell className={classes.tableCell}>
													<IconButton aria-controls="simple-menu" aria-haspopup="true" onClick={(event) => this.handleClick(event)}><BiDotsVerticalRounded size={20} /></IconButton>
												</TableCell> */}
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
										<Typography>
											{page * rowsPerPage + 1} - {rowsPerPage > allCustomers.length ? allCustomers.length : (page + 1) * rowsPerPage} of {allCustomers.length} items
										</Typography>
									</div>
								</div>
								<div className={classes.tablePageRow}>
									<div className={classes.tablePagedivBorder}>
										<Typography>
											{page + 1}  of {this.returnTotalPages(allCustomers.length)} pages
										</Typography>
									</div>
									<div className={classes.tablePagediv}>
										<IconButton className={classes.iconButton} disabled={!this.activePage("LEFT", allCustomers.length)} onClick={() => this.handleChangePage("LEFT", allCustomers.length)}>
											<AiFillCaretLeft size={20} color={this.activePage("LEFT", allCustomers.length) ? "#666666" : "#cccccc"} />
										</IconButton>
									</div>
									<div className={classes.tablePagedivLast}>
										<IconButton className={classes.iconButton} disabled={!this.activePage("RIGHT", allCustomers.length)} onClick={() => this.handleChangePage("RIGHT", allCustomers.length)}>
											<AiFillCaretRight size={20} color={this.activePage("RIGHT", allCustomers.length) ? "#666666" : "#cccccc"} />
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
		allCustomers: state.customer_reducers.allCustomers,
		coutomersOverviewCount: state.customer_reducers.coutomersOverviewCount,
		customerStatusReportsPie: state.customer_reducers.customerStatusReportsPie
	}
};

export default connect(
	mapStateToProps
)(withStyles(styles)(Customers));

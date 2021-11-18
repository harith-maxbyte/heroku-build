import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withStyles, Grid, Typography, Card, Button, TextField } from '@material-ui/core';
import ReactApexChart from "react-apexcharts";
import Maplisting from './Maplist';
import Map from './Map';
import { getDasboardData, getChartData } from '../../../store/actions/dashboard_action';
import { getPopularProducts } from '../../../store/actions/product_action';
import Skeleton from '@material-ui/lab/Skeleton';
import money from '../../../assets/images/svg/money.svg';
import delivery from '../../../assets/images/svg/delivery-box.svg';
import lighting from '../../../assets/images/svg/lighting.svg';
import users from '../../../assets/images/svg/users.svg';
import CustomModal from '../../../components/modal'

/**Created common styles for UI.*/
const styles = theme => ({
	root: {
		textAlign: 'center',
		padding: theme.spacing(2)
	},
	carda: {
		backgroundColor: "#FEC9B4",
		padding: "15px 15px",
		borderRadius: 8,
		boxShadow: "0px 0px 0px 0px #E1E7ED",
	},
	cardb: {
		backgroundColor: "#57B78C",
		padding: "15px 15px",
		borderRadius: 8,
		boxShadow: "0px 0px 0px 0px #E1E7ED",
	},
	cardc: {
		backgroundColor: "#5EC8E6",
		padding: "15px 15px",
		borderRadius: 8,
		boxShadow: "0px 0px 0px 0px #E1E7ED",
	},
	cardd: {
		backgroundColor: "#F4CC44",
		padding: "15px 15px",
		borderRadius: 8,
		boxShadow: "0px 0px 0px 0px #E1E7ED",
	},
	row: {
		display: "flex"
	},
	cardBlackTextTitle: {
		fontSize: 15,
		color: "#3E3E3E",
		paddingLeft: 10,
		fontFamily: "SourceSansPro-Regular",
	},
	cardBlackSecondText: {
		fontSize: 18,
		paddingTop: 15,
		fontWeight: "bold",
		color: "#1B1B1B",
		fontFamily: "SourceSansPro-Regular",
	},
	cardBlackThirdText: {
		fontSize: 13,
		fontWeight: "bold",
		paddingTop: 15,
		paddingLeft: 5,
		color: "#000",
		fontFamily: "SourceSansPro-Regular",
	},
	cardWhiteTextTitle: {
		fontSize: 15,
		color: "#fff",
		paddingLeft: 10,
		fontFamily: "SourceSansPro-Regular",
	},
	cardWhiteSecondText: {
		fontSize: 18,
		paddingTop: 15,
		fontWeight: "bold",
		color: "#fff",
		fontFamily: "SourceSansPro-Regular"
	},
	cardWhiteThirdText: {
		fontSize: 13,
		fontWeight: "bold",
		paddingTop: 15,
		paddingLeft: 5,
		color: "#fff",
		fontFamily: "SourceSansPro-Regular",
	},
	textBadge: {
		borderRadius: 15,
		padding: "3px 10px",
		backgroundColor: "#F3852A",
		color: "#fff",
		fontSize: 12,
		fontWeight: "600",
		fontFamily: "SourceSansPro-Regular",
	},
	rowContainer: {
		display: "flex",
		justifyContent: "space-between",
		alignItems: "center",
		padding: 10,
		borderTop: "1px solid #E1E0E0"
	},
	cardTitle: {
		padding: "10px",
		textAlign: "left",
		fontSize: 18,
		color: "#000",
		fontFamily: "SourceSansPro-SemiBold",
	},
	whiteCard: {
		width: "100%",
		backgroundColor: "#fff",
		borderRadius: "8px",
		boxShadow: "0px 0px 0px 0px #E1E7ED",
		background: "#FFFFFF",
	},
	normalText: {
		fontSize: 15,
		textAlign: "left",
		color: "#000",
		fontFamily: "SourceSansPro-Regular",
	},
	button: {
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
		margin: "10px 10px",
		padding: "8px 12px",
		border: "1px solid #666666",
		borderRadius: "6px",
		fontFamily: "SourceSansPro-Regular",
		textTransform: "none"
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
});

/**
 * @class
 * Class representing Dashboard component
 */
class Dashboard extends Component {
	constructor(props) {
		super(props);
		//this.anchorRef = React.createRef()
		this.state = {
			val: 7,
			startDate: '',
			endDate: '',
			enableCustomModal: false,
			anchorRef: null,
			open: false,
		};
	}


	handleClick = (event) => {
		this.setState({ anchorEl: event.currentTarget })
	};
	handleClose = () => {
		this.setState({ anchorEl: null })
	};


	/** This is a component life cycle method and used to fetch datas*/
	componentDidMount = () => {
		/** fetching dashboard data. */
		this.initialDashboardLoad();
		// this.props.dispatch(getDasboardData('2021-10-10', '2021-10-25'));
		/** fetching top selling products. */
		// this.props.dispatch(getTopSellingProducts());
		/** fetching pending orders. */
		// this.props.dispatch(getPendingOrders())
	}

	/**
	* @function
	* this function is used to view sales area chart.
	*/
	returnSalesChart = (sales, prevSales) => {

		let week = [];
		let prevWeek = [];
		let lable = [];
		sales && sales.length > 0 && sales.map((value) => {
			week.push(value.Count)
			if (!lable.includes(value.Day)) {
				lable.push(value.Day)
			}
			return ('');
		})

		prevSales && prevSales.length > 0 && prevSales.map((value) => {
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
		let chartOptions = {
			chart: {
				height: 323,
				type: 'line',
				fontFamily: "SourceSansPro-Regular",
				stacked: false,
				toolbar: {
					show: false,
				},
				zoom: {
					enabled: false,
				}
			},
			grid: {
				borderColor: '#EEEEED',
			},
			title: {
				text: "Average Sales (in S$)",
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
				show: true,
				lineCap: 'butt',
				curve: 'smooth',
				width: [2, 1],
				dashArray: [0, 8],
				bottom: "40.49%",
				border: "2px solid #F3852A",
				borderRadius: "100px",
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
			colors: ["#F3852A", "#B9B8B8"],
			labels: lable,
			markers: {
				size: 0
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

				onItemHover: {
					highlightDataSeries: true
				},

			},
			xaxis: {
				tooltip: {
					enabled: false,
				}
			},
			yaxis: {
				labels: {
					show: true,
					formatter: (value) => { return parseFloat(parseInt(value) / 1000).toString() + "k" },
				}
			},
			tooltip: {
				shared: true,
				intersect: false,
				custom: function ({ series, seriesIndex, dataPointIndex, w }) {
					var data = w.globals.initialSeries[seriesIndex].data[dataPointIndex];
					return (`<div style="display:table;max-width: 50%;background-color:#1B1B1B;color:#FFFFFF;border-radius: 8px;padding: 4px;font-family: SourceSansPro-SemiBold;font-style: normal;font-size: 14px;line-height: 20px;font-weight: 600;"> S$ ${data} </div>`);
				},
			}
		}
		return (<ReactApexChart options={chartOptions} series={series} type="line" height={323} />)
	}

	/**
	* @function
	* this function is used to view energy area chart.
	*/
	returnEnergyChart = (energy, prevEnergy) => {

		let week = [];
		let prevWeek = [];
		let lable = [];
		energy && energy.length > 0 && energy.map((value) => {
			week.push(Math.round(value.Energy))
			if (!lable.includes(value.Day)) {
				lable.push(value.Day)
			}
			return ('');
		})

		prevEnergy && prevEnergy.length > 0 && prevEnergy.map((value) => {
			prevWeek.push(Math.round(value.Energy))
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
		let chartOptions = {
			chart: {
				height: 323,
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
			grid: {
				borderColor: '#EEEEED',
			},
			title: {
				text: "Energy Consumption (kWh)",
				align: 'left',
				floating: true,
				offsetX: 7,
				offsetY: 7,
				style: {
					fontSize: '18px',
					fontWeight: 600,
					fontFamily: "SourceSansPro-SemiBold",
					fontStyle: "normal",
					color: '#000000'
				},
			},
			stroke: {
				show: true,
				lineCap: 'butt',
				curve: 'smooth',
				width: [2, 1],
				dashArray: [0, 8],
				left: "43.25%",
				right: "-1739.91%",
				top: "20.09%",
				bottom: "40.49%",
				border: "2px solid #F3852A",
				borderRadius: "100px",
			},
			fill: {
				colors: ['#CFEEF7', '#CFEEF7'],
				position: "absolute",
				left: "43.25%",
				right: "-1739.91%",
				top: "20.09%",
				bottom: "10.18%",
				backgroundColor: "linear-gradient(180deg, #5EC8E6 0%, rgba(94, 200, 230, 0) 100%)",
				opacity: [0.12],
				borderRadius: "100px",
			},
			colors: ["#5EC8E6", "#B9B8B8"],
			labels: lable,
			markers: {
				size: 0
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
			tooltip: {
				shared: true,
				intersect: false,
				custom: function ({ series, seriesIndex, dataPointIndex, w }) {
					var data = w.globals.initialSeries[seriesIndex].data[dataPointIndex];
					return (`<div style="display:table;max-width: 50%;background-color:#1B1B1B;color:#FFFFFF;border-radius: 8px;padding: 4px;font-family: SourceSansPro-SemiBold;font-style: normal;font-size: 14px;line-height: 20px;font-weight: 600;"> ${data}  </div>`);
				},

			}
		}
		return (<ReactApexChart options={chartOptions} series={series} type="line" height={323} />)
	}

	initialDashboardLoad = () => {
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
		this.props.dispatch(getDasboardData(prevDate, currentDate));
		this.props.dispatch(getPopularProducts(prevDate, currentDate));
		this.props.dispatch(getChartData(prevDate, currentDate));
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
			this.props.dispatch(getDasboardData(prevDate, currentDate));
			this.props.dispatch(getPopularProducts(prevDate, currentDate));
			this.props.dispatch(getChartData(prevDate, currentDate));
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
		this.props.dispatch(getDasboardData(start, end));
		this.props.dispatch(getPopularProducts(start, end));
		this.props.dispatch(getChartData(start, end));
	}


	/** rendering Dashboard information. */
	render() {
		const { classes, popularProducts, dashboardData, chartData } = this.props;
		// console.log(chartData)
		return (
			<div className={classes.root}>
				{this.state.enableCustomModal && <CustomModal isOpen={this.state.enableCustomModal} fromDate={this.state.startDate} toDate={this.state.endDate} handelopen={this.handleOpenCustomModel} cancel={this.handleCloseCustomModel} />}
				<div
					style={{
						display: "flex", justifyContent: "flex-end",
						boxSizing: "border-box",
						borderRadius: "8px",
						order: "1",
						flexGrow: "0",
						margin: "8px 0px"
					}}
				>
					<div style={{ display: "flex" }}>
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



				<Grid container spacing={2}>
					<Grid item xs={12} sm={6} md={3}>
						{dashboardData && <Card className={classes.carda}>
							<div className={classes.row}>
								<img src={money} alt="money" size={25} />
								<Typography className={classes.cardBlackTextTitle}>Total Sales</Typography>
							</div>
							<div className={classes.row}>
								<Typography className={classes.cardBlackSecondText}>S$ {dashboardData.totalorder}</Typography>
								<Typography className={classes.cardBlackThirdText}>{dashboardData.previousSalesDetails}</Typography>
							</div>
						</Card>}
					</Grid>
					<Grid item xs={12} sm={6} md={3}>
						{dashboardData && <Card className={classes.cardb}>
							<div className={classes.row}>
								<img src={delivery} alt="delivery" size={25} />
								<Typography className={classes.cardWhiteTextTitle}>Total Orders</Typography>
							</div>
							<div className={classes.row}>
								<Typography className={classes.cardWhiteSecondText}>{dashboardData.totalorder}</Typography>
								<Typography className={classes.cardWhiteThirdText}>{dashboardData.previousorderresult}</Typography>
							</div>
						</Card>}
					</Grid>
					<Grid item xs={12} sm={6} md={3}>
						{dashboardData && <Card className={classes.cardc}>
							<div className={classes.row}>
								<img src={lighting} alt="lighting" size={25} />
								<Typography className={classes.cardWhiteTextTitle}>Total Energy Consumed</Typography>
							</div>
							<div className={classes.row}>
								<Typography className={classes.cardWhiteSecondText}>{dashboardData.energyconsumption} kWh</Typography>
								<Typography className={classes.cardWhiteThirdText}>{dashboardData.previousEnegryConsumption}</Typography>
							</div>
						</Card>}
					</Grid>
					<Grid item xs={12} sm={6} md={3}>
						{dashboardData && <Card className={classes.cardd}>
							<div className={classes.row}>
								<img src={users} alt="users" size={25} />
								<Typography className={classes.cardBlackTextTitle}>New Customers</Typography>
							</div>
							<div className={classes.row}>
								<Typography className={classes.cardBlackSecondText}>{dashboardData.customerList}</Typography>
								<Typography className={classes.cardBlackThirdText}>{dashboardData.perviousCustomerList}</Typography>
							</div>
						</Card>}
					</Grid>
					<Grid item xs={12} sm={12} md={6}>
						<Card className={classes.whiteCard}>
							{this.returnSalesChart(chartData.sales, chartData.previoussales)}
						</Card>
					</Grid>
					<Grid item xs={12} sm={12} md={6}>
						<Card className={classes.whiteCard}>
							{this.returnEnergyChart(chartData.energyconsumption, chartData.previousEnegryConsumption)}
						</Card>
					</Grid>
					<Grid item xs={12} sm={12} md={4}>
						<Card className={classes.whiteCard}>
							<Typography className={classes.cardTitle} style={{ margin: 7 }}>Action Required</Typography>
							<div className={classes.rowContainer}>
								<Typography className={classes.normalText}>New Orders</Typography>
								<Typography className={classes.textBadge}>{dashboardData ? dashboardData.Installation : 0}</Typography>
							</div>
							<div className={classes.rowContainer}>
								<Typography className={classes.normalText}>High Priority Tickets</Typography>
								<Typography className={classes.textBadge}>{0}</Typography>
							</div>
							<div className={classes.rowContainer}>
								<Typography className={classes.normalText}>Order Modification</Typography>
								<Typography className={classes.textBadge}>{dashboardData ? dashboardData.OrderModification : 0}</Typography>
							</div>
							<div className={classes.rowContainer}>
								<Typography className={classes.normalText}>Installation</Typography>
								<Typography className={classes.textBadge}>{dashboardData ? dashboardData.Installation : 0}</Typography>
							</div>
						</Card>
					</Grid>
					<Grid item xs={12} sm={12} md={8}>
						<Card className={classes.whiteCard}>
							<div className={classes.row} style={{ justifyContent: "space-between" }}>
								<Typography className={classes.cardTitle} style={{ margin: 7 }}>Pending orders</Typography>
								<Button variant="outlined" className={classes.button}>View All</Button>
							</div>
							{dashboardData && dashboardData.pendingOrder && dashboardData.pendingOrder.length > 0 && dashboardData.pendingOrder.map((item, index) =>
								<div key={index.toString()} className={classes.rowContainer}>
									<Typography className={classes.normalText}>#{item.OrderNo}</Typography>
									<Typography className={classes.normalText}>{item.OrderDate}</Typography>
									<Typography className={classes.normalText}>$ {item.OrderTotal}</Typography>
								</div>)}
						</Card>
					</Grid>
					<Grid item xs={12} sm={12} md={7}>
						<Card className={classes.whiteCard}>
							<Typography className={classes.cardTitle}>Top Selling Products</Typography>
							{popularProducts && popularProducts.length > 0 && popularProducts.map((product, index) =>
								<div key={index.toString()} className={classes.rowContainer}>
									<Typography className={classes.normalText} style={{ width: "50%", display: 'flex', alignItems: 'center' }}> <Skeleton variant="rect" animation={false} style={{ backgroundColor: "#EEEEED", width: 75, height: 40, marginRight: 10 }} /> {product.ProductName}</Typography>
									<Typography className={classes.normalText} style={{ width: "25%" }}>{product.ProductQuantity} Units</Typography>
									<Typography className={classes.normalText} style={{ width: "25%", textAlign: "right" }}>$ {product.Sales}</Typography>
								</div>
							)}
						</Card>
					</Grid>


					<Grid item xs={12} sm={12} md={5}>
						<Card className={classes.whiteCard}>
							<Typography className={classes.cardTitle} style={{ margin: 6, display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
								City orders statistics
								<Maplisting />
							</Typography>
							<div className={classes.rowContainer}></div>
							<Map />
						</Card>
					</Grid>
				</Grid>
			</div>
		);
	}
}

/** Get data from store and assign to props. */
const mapStateToProps = (state) => {
	return {
		dashboardData: state.dashboard_reducers.dashboardData,
		popularProducts: state.products_reducers.popularProducts,
		chartData: state.dashboard_reducers.chartData
	}
};

export default connect(
	mapStateToProps
)(withStyles(styles)(Dashboard));

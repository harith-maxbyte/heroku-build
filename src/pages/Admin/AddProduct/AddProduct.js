import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withStyles, Grid, Typography, Button, Card, Breadcrumbs, TextField, Dialog, CircularProgress, CardActionArea } from '@material-ui/core';
import { FiChevronRight } from "react-icons/fi"
import Autocomplete from '@material-ui/lab/Autocomplete';
import { addProducts, productEfficiencyProfile } from "../../../store/actions/product_action";
import { getProductsCategory } from "../../../store/actions/product_action";


/**Created common styles for UI.*/
const styles = theme => ({
	root: {
		padding: theme.spacing(4)
	},

	paper: {
		backgroundColor: "#fff",
		marginTop: 15,
		padding: theme.spacing(2),
		boxShadow: "0px 8px 36px rgba(50, 50, 50, 0.08)",
		borderRadius: "8px"
	},
	bottomPaper: {
		backgroundColor: "#fff",
		marginTop: 15,
		padding: theme.spacing(1)
	},
	wrapper: {
		display: "grid",
		gridTemplateColumns: "1fr 1fr",
		columnGap: "2em"
	},
	bottomWrapper: {
		display: "grid",
		gridTemplateColumns: "1fr 1fr"
	},
	title: {
		fontSize: 16,
		color: "#000",
		fontWeight: "bold",
		margin: "10px 0px 20px",
		fontFamily: "SourceSansPro-Regular"
	},
	textFiledText: {
		padding: theme.spacing(2),
		fontSize: 13,
		// padding: "5px 0px",
		paddingLeft: "20px",
		color: "#000",
		fontFamily: "SourceSansPro-Regular",

	},
	inputRoot: {
		backgroundColor: "#FFFFFF",
		border: "1px solid #CFCFCE",
		borderRadius: "8px",
		// padding: "12px 16px",
		boxSizing: "border-box",
		// height: "48px",
		fontSize: "13x !important",
		fontFamily: "SourceSansPro-Regular",
		"&:hover": {
			border: "1px solid #1B1B1B",
			backgroundColor: "#FFFFFF"
		}
	},
	inputStyle: {
		fontFamily: "SourceSansPro-Regular !important",
		fontSize: "13x !important",
		padding: "10px !important",
		color: "#1B1B1B",
		opacity: 1,
		"&&:after": {
			color: "#1B1B1B",
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
	dragContainer: {
		// width: "100%",
		// height: "100%",
		padding: 15,
		borderRadius: "10px",
		boxSizing: "border-box",
		border: "0.5px dashed #B9B8B8",
		backgroundColor: "#F6F6F6",
		textAlign: "center",
		fontFamily: "SourceSansPro-Regular"
	},
	buttonVariant: {
		boxShadow: "0px 0px 0px 0px #E1E7ED",
		backgroundColor: "#1B1B1B",
		margin: "5px 0px",
		color: "#fff",
		borderRadius: 6,
		// width: "542.5px",
		fontSize: "16px",
		padding: "5px 20px",
		height: "fit-content",
		textTransform: "none",
		fontFamily: "SourceSansPro-Regular",
		'&:hover': {
			backgroundColor: "#1B1B1B",
		},
	},
	uploadButton: {
		// width: "181px",
		width: "11.3125em",
		backgroundColor: "#1B1B1B",
		borderRadius: "8px",
		boxShadow: "0px 0px 0px 0px #1B1B1B",
		color: "#FFFFFF",
		margin: "0px 8px",
		fontWeight: "600",
		fontSize: "16px",
		height: "fit-content",
		textTransform: "none",
		fontFamily: "SourceSansPro-Regular",
		'&:hover': {
			backgroundColor: "#cccccc",
		},
	},
	uploadFileButton: {
		display: "flex",
		flexDirection: "column",
		justifyContent: "center",
		alignItems: "center",
		border: "1px solid #616060",
		backgroundColor: "#FFFFFF",
		// position: "static",
		width: "116px",
		height: "48px",
		top: "0px",
		padding: "0px",
		boxSizing: "border-box",
		borderRadius: "8px",
		flex: "none",
		order: "1",
		flexGrow: "0",
		margin: "0px 10px",
		fontSize: "16px",
		textTransform: "none",
		'&:hover': {
			backgroundColor: "#FFFFFF",
		},
	},
	inputimage: {
		display: "none"
	},
	dialogPaper: {
		backgroundColor: "rgba(0,0,0,0)",
		boxShadow: "none",
		overflow: "hidden"
	},
	topcontainer: {
		marginTop: theme.spacing(2)
	},
	fcutext: {
		fontSize: 15,
		color: "#3E3E3E",
		display: "flex",
		justifyContent: "center",
		fontFamily: "SourceSansPro-SemiBold",
	},
	fcucard: {
		display: 'block',
		backgroundColor: "#FEC9B4",
		padding: "15px",
		borderRadius: 8,
		boxShadow: "0px 0px 0px 0px #E1E7ED",
	}
});

/**
 * @class
 * Class representing AddProduct component
 */
class AddProduct extends Component {

	constructor(props) {

		super(props);

		this.state = {
			productName: "",
			nooffcu: "",
			price: "",
			productCode: "",
			manufacturer: "",
			productSKU: "",
			productTax: "",
			coolingCapacity: "",
			powerConsumption: "",
			currentRating: "",
			efficiencyProfile: "",
			productCategoryId: "",
			Costprice: "",
			productName_error: false,
			nooffcu_error: false,
			price_error: false,
			productCode_error: false,
			manufacturer_error: false,
			productSKU_error: false,
			productTax_error: false,
			coolingCapacity_error: false,
			powerConsumption_error: false,
			currentRating_error: false,
			efficiencyProfile_error: false,
			productCategoryId_error: false,
			Costprice_error: false,

			file: null,
			imgSrc: null,
			loading: false,


			fcufile: null,
			fcuimgSrc: null,

			fcu: [],
			selectedFcu: "",
			fcucode: "",
			fcuname: [],
			type: [],
			model: [],
			color: [],
			capacity: [],
			idealtemp: [],
			powerconsume: [],
			compressortype: [],
			condensorcoil: [],
			indoordimention: [],
			outdoordimention: [],
			threestarbeerating: [],

			fcucode_error: false,
			fcuname_error: false,
			type_error: false,
			model_error: false,
			color_error: false,
			capacity_error: false,
			idealtemp_error: false,
			powerconsume_error: false,
			compressortype_error: false,
			condensorcoil_error: false,
			indoordimention_error: false,
			outdoordimention_error: false,
			threestarbeerating_error: false,
		};
	}

	dragOver = (e) => {
		e.preventDefault();
	}

	dragEnter = (e) => {
		e.preventDefault();
	}

	dragLeave = (e) => {
		e.preventDefault();
	}

	fileDrop = (e) => {
		e.preventDefault();
		const files = e.dataTransfer.files;
		let file = files[0];
		if (typeof file === 'object') {
			let reader = new FileReader();
			reader.readAsDataURL(file);
			reader.onloadend = function (e) {
				this.setState({
					imgSrc: [reader.result]
				})
			}.bind(this);
			this.setState({ file: files[0] });
		}
	}

	fileHandler = (event) => {
		let file = event.target.files[0];
		if (typeof file === 'object') {
			let reader = new FileReader();
			reader.readAsDataURL(file);
			reader.onloadend = function (e) {
				this.setState({
					imgSrc: [reader.result]
				})
			}.bind(this);
			this.setState({ file: event.target.files[0] });
		}
	}

	efficiencyProfile = (event) => {
		let file = event.target.files[0];
		if (typeof file === 'object') {
			let data = {}
			data.ProductName = this.state.productName;
			data.ModelNo = this.state.productSKU;
			const formData = new FormData();
			formData.append('data', JSON.stringify(data));
			formData.append('document', file);
			this.props.dispatch(productEfficiencyProfile(this, formData))
		}
	}

	componentDidMount() {
		this.props.dispatch(getProductsCategory())
	}

	fcuGrid(val) {
		var newStateArray = [];
		this.setState({
			nooffcu: val,
			nooffcu_error: false,
			fcu: this.state.fcu.splice(val)
		});
		for (var i = 0; i < val; i++) {
			newStateArray.push(`FCU ${i + 1}`);
		}
		this.setState({ fcu: newStateArray });
	};

	submit = () => {
		let { productName,
			quantity,
			price,
			productCode,
			manufacturer,
			productSKU,
			productTax,
			coolingCapacity,
			powerConsumption,
			currentRating,
			productCategoryId,
		} = this.state;


		if (productName &&
			quantity &&
			price &&
			productCode &&
			manufacturer &&
			productSKU &&
			productTax &&
			coolingCapacity &&
			powerConsumption &&
			currentRating &&
			productCategoryId) {
			let data = {}
			data.ProductName = productName;
			data.Quantity = quantity;
			data.Price = price;
			data.ProductCode = productCode;
			data.Manufacturer = manufacturer;
			data.ModelNo = productSKU;
			data.ProductTax = productTax;
			data.CoolingCapacity = coolingCapacity;
			data.PowerConsumption = powerConsumption;
			data.CurrentRating = currentRating;
			data.FCUCapacity = currentRating;
			data.EfficiencyProfile = JSON.stringify(this.props.productsEfficiencyProfile);
			data.ProductCategory = productCategoryId;
			data.ImagePath = '';
			data.Tags = '';
			data.ProductInventory = 'IS';
			// data.Costprice = Costprice;
			this.setState({ loading: true })
			console.log("data=", data)
			const formData = new FormData();
			formData.append('data', JSON.stringify(data));
			formData.append('document', this.state.file);
			this.props.dispatch(addProducts(this, formData))
		} else {
			alert("Please enter all input to proceed submit")
		}

	}

	/** rendering Add Product information. */
	render() {
		const { classes, productCategories } = this.props;
		const tags = [
			{ title: 'tag1', year: 1921 },
			{ title: 'tag2', year: 2009 },
			{ title: 'tag3', year: 2000 },
			{ title: 'tag4', year: 2009 },
			{ title: 'tag5', year: 1975 },
		];

		return (
			<div className={classes.root}>
				<Breadcrumbs separator={<FiChevronRight size={15} />} aria-label="breadcrumb" style={{ color: "#9F9E9E", left: "29.21%", right: "26.03%", top: "10.88%", bottom: "10.93%" }}>
					<Typography onClick={() => this.props.history.push("/admin/products")} style={{
						fontFamily: "SourceSansPro-Regular", color: "#57B78C", cursor: "pointer", fontSize: 18, fontWeight: 600, width: "74px", height: "20px", fontStyle: "normal", lineHeight: "20px"
						// ,margin:"0px 8px" 
					}} color="primary" >
						Products
					</Typography>
					<Typography style={{ fontFamily: "SourceSansPro-Regular", fontSize: 15, fontWeight: "600", lineHeight: "20px", width: "132px", height: "20px" }} color="textPrimary">Add New Product</Typography>
				</Breadcrumbs>

				<div className={classes.wrapper}>

					<Grid container spacing={2} direction="column" className={classes.paper}>
						<Typography className={classes.title}>Basic Information</Typography>
						<Grid container direction="row">
							<Grid item xs={5}>
								<Typography className={classes.textFiledText}>Product Name</Typography>
							</Grid>
							<Grid item xs={8} sm={7}>
								<TextField
									placeholder="Enter Product Name"
									variant="filled"
									onChange={(event) => this.setState({ productName: event.target.value, productName_error: false, error_text: null })}
									InputProps={{ classes: { input: classes.inputStyle, underline: classes.underline, root: classes.inputRoot } }}
									fullWidth
									autoComplete="off"
								/>
							</Grid>
						</Grid>

						<Grid container direction="row">
							<Grid item xs={5}><Typography className={classes.textFiledText}>Product Code</Typography></Grid>
							<Grid item xs={8} sm={7}>
								<TextField
									placeholder="Enter Product Code"
									variant="filled"
									value={this.state.productCode}
									onChange={(event) => this.setState({ productCode: event.target.value, productCode_error: false })}
									InputProps={{ classes: { input: classes.inputStyle, underline: classes.underline, root: classes.inputRoot } }}
									fullWidth
									autoComplete="off"
								/></Grid>
						</Grid>
						<Grid container direction="row">
							<Grid item xs={5}><Typography className={classes.textFiledText}>Product SKU</Typography></Grid>
							<Grid item xs={8} sm={7}><TextField
								placeholder="Enter Product SKU"
								variant="filled"
								value={this.state.productSKU}
								onChange={(event) => this.setState({ productSKU: event.target.value, productSKU_error: false })}
								InputProps={{ classes: { input: classes.inputStyle, underline: classes.underline, root: classes.inputRoot } }}
								fullWidth
								autoComplete="off"
							/></Grid>
						</Grid>
						<Grid container direction="row">
							<Grid item xs={5}><Typography className={classes.textFiledText}>Manufacturer</Typography></Grid>
							<Grid item xs={8} sm={7}><TextField
								placeholder="Enter Brand Name"
								variant="filled"
								value={this.state.manufacturer}
								onChange={(event) => this.setState({ manufacturer: event.target.value, manufacturer_error: false })}
								InputProps={{ classes: { input: classes.inputStyle, underline: classes.underline, root: classes.inputRoot } }}
								fullWidth
								autoComplete="off"
							/></Grid>
						</Grid>
						<Grid container direction="row">
							<Grid item xs={5}>
								<Typography className={classes.textFiledText}>Category</Typography></Grid>
							<Grid item xs={8} sm={7}>
								<TextField
									variant="filled"
									value={this.state.productCategoryId}
									onChange={(event) => this.setState({ productCategoryId: event.target.value, productCategoryId_error: false })}
									InputProps={{ classes: { input: classes.inputStyle, underline: classes.underline, root: classes.inputRoot } }}
									fullWidth
									select
									SelectProps={{
										native: true,
									}}
									autoComplete="off"
									error={this.state.productCategoryId_error ? true : false}
									helperText={this.state.productCategoryId_error ? "Please enter product category" : false}
								>
									<option value="" disabled style={{ fontFamily: "SourceSansPro-Regular" }}>
										Select
									</option>
									{productCategories && productCategories.length > 0 && productCategories.map((value) => {
										return <option value={value.ProductCategoryName} style={{ fontFamily: "SourceSansPro-Regular" }}>
											{value.ProductCategoryName}
										</option>
									})}
								</TextField></Grid>
						</Grid>
						<Grid container direction="row">
							<Grid item xs={5}><Typography className={classes.textFiledText}>Number of FCU</Typography></Grid>
							<Grid item xs={8} sm={7}><TextField
								type="number"
								placeholder="Enter Number of FCU"
								variant="filled"
								value={this.state.nooffcu}
								onChange={(event) => this.fcuGrid(event.target.value)}
								InputProps={{ classes: { input: classes.inputStyle, underline: classes.underline, root: classes.inputRoot } }}
								fullWidth
								autoComplete="off"
							/></Grid>
						</Grid>
						<Grid container direction="row">
							<Grid item xs={5}><Typography className={classes.textFiledText}>Price</Typography></Grid>
							<Grid item xs={8} sm={7}><TextField
								placeholder="Enter Product price"
								variant="filled"
								value={this.state.price}
								onChange={(event) => this.setState({ price: event.target.value, price_error: false })}
								InputProps={{ classes: { input: classes.inputStyle, underline: classes.underline, root: classes.inputRoot } }}
								fullWidth
								autoComplete="off"
							/></Grid>
						</Grid>
						<Grid container direction="row">
							<Grid item xs={5}><Typography className={classes.textFiledText}>Tax(%)</Typography></Grid>
							<Grid item xs={8} sm={7}><TextField
								placeholder="Enter tax"
								variant="filled"
								value={this.state.productTax}
								onChange={(event) => this.setState({ productTax: event.target.value, productTax_error: false })}
								InputProps={{ classes: { input: classes.inputStyle, underline: classes.underline, root: classes.inputRoot } }}
								fullWidth
								autoComplete="off"
							/></Grid>
						</Grid>

						<Grid container direction="row">
							<Grid item xs={5}><Typography className={classes.textFiledText}>Cooling Capacity</Typography></Grid>
							<Grid item xs={8} sm={7}><TextField
								placeholder="Enter Cooling Capacity"
								variant="filled"
								value={this.state.coolingCapacity}
								onChange={(event) => this.setState({ coolingCapacity: event.target.value, coolingCapacity_error: false })}
								InputProps={{ classes: { input: classes.inputStyle, underline: classes.underline, root: classes.inputRoot } }}
								fullWidth
								autoComplete="off"
							/></Grid>
						</Grid>

						<Grid container direction="row">
							<Grid item xs={5}><Typography className={classes.textFiledText}>Power Consumption</Typography></Grid>
							<Grid item xs={8} sm={7}><TextField
								placeholder="Enter Power Consumption"
								variant="filled"
								value={this.state.powerConsumption}
								onChange={(event) => this.setState({ powerConsumption: event.target.value, powerConsumption_error: false })}
								InputProps={{ classes: { input: classes.inputStyle, underline: classes.underline, root: classes.inputRoot } }}
								fullWidth
								autoComplete="off"
							/></Grid>
						</Grid>

						<Grid container direction="row">
							<Grid item xs={5}><Typography className={classes.textFiledText}>Current Rating</Typography></Grid>
							<Grid item xs={8} sm={7}><TextField
								placeholder="Enter Current Rating"
								variant="filled"
								value={this.state.currentRating}
								onChange={(event) => this.setState({ currentRating: event.target.value, currentRating_error: false })}
								InputProps={{ classes: { input: classes.inputStyle, underline: classes.underline, root: classes.inputRoot } }}
								fullWidth
								autoComplete="off"
							/></Grid>
						</Grid>



						<Grid container direction="row">
							<Grid item xs={5}><Typography className={classes.textFiledText}>Effiency Profile</Typography></Grid>
							<Grid item xs={8} sm={7}><TextField
								placeholder="Enter Effiency Profile"
								variant="filled"
								value={this.state.efficiencyProfile}
								onChange={(event) => this.setState({ efficiencyProfile: event.target.value, efficiencyProfile_error: false })}
								InputProps={{ classes: { input: classes.inputStyle, underline: classes.underline, root: classes.inputRoot } }}
								fullWidth
								autoComplete="off"
							/></Grid>
						</Grid>

						<Grid container direction="row">
							<Grid item xs={5}><Typography className={classes.textFiledText}>Cost Price</Typography></Grid>
							<Grid item xs={8} sm={7}><TextField
								placeholder="Enter Cost price"
								variant="filled"
								value={this.state.Costprice}
								onChange={(event) => this.setState({ Costprice: event.target.value, Costprice_error: false })}
								InputProps={{ classes: { input: classes.inputStyle, underline: classes.underline, root: classes.inputRoot } }}
								fullWidth
								autoComplete="off"
							/></Grid>
						</Grid>

						<Grid container direction="row">
							<Grid item xs={5}><Typography className={classes.textFiledText}>Tags</Typography></Grid>
							<Grid item xs={8} sm={7}><Autocomplete
								multiple
								id="tags-outlined"
								className={classes.autoComplete}
								options={tags}
								getOptionLabel={(option) => option.title}
								filterSelectedOptions
								renderInput={(params) => (
									<TextField
										{...params}
										variant="outlined"
										placeholder="Select"
									/>
								)}
							/></Grid>
						</Grid>

					</Grid>

					<div className={classes.paper}>
						<Grid container spacing={2} direction="column" >
							<Typography className={classes.title}>Product Image</Typography>
							<Grid item xs={12}>
								{this.state.file !== null ?
									<div className={classes.dragContainer}
									// style={{ display: "block", height: 150 }}
									>
										<div>
											<img src={this.state.imgSrc} alt="org" width={100} height="auto" />
										</div>
										<div>
											<input
												accept="image/*"
												className={classes.inputimage}
												id="text-button-file1"
												multiple
												type="file"
												onChange={this.fileHandler}
											/>
											<label htmlFor="text-button-file1">
												<Button component="span" variant="contained" className={classes.uploadButton} >
													Change
												</Button>
											</label>
										</div>
									</div>
									:
									<div className={classes.dragContainer}
										onDragOver={this.dragOver}
										onDragEnter={this.dragEnter}
										onDragLeave={this.dragLeave}
										onDrop={this.fileDrop}
									>
										<Typography style={{ fontSize: 14, color: "#000", padding: "10px 0px", fontFamily: "SourceSansPro-Regular" }}>Drag and drop files here</Typography>
										<Typography style={{ fontSize: 13, color: "#666666", fontFamily: "SourceSansPro-Regular" }}>or</Typography>
										<input
											accept="image/*"
											className={classes.inputimage}
											id="text-button-file1"
											multiple
											type="file"
											onChange={this.fileHandler}
										/>
										<label htmlFor="text-button-file1">
											<Button component="span" variant="contained" className={classes.uploadButton} >
												Upload
											</Button>
										</label>

									</div>}


								<hr
									style={{
										margin: "24px 0px",
										alignSelf: "stretch",
										border: "1px solid #E1E0E0",
										marginLeft: "-17px",
										marginRight: "-17px"
									}}
								/>

								<Grid container direction="row">
									<Grid item xs={5}>
										<Typography className={classes.title}>Efficiency profile</Typography>
									</Grid>
									<Grid item xs={8} sm={7} style={{ direction: "rtl" }}>
										<input
											accept=".csv"
											className={classes.inputimage}
											id="text-button-file2"
											multiple
											type="file"
											onChange={this.efficiencyProfile}
										/>
										<label htmlFor="text-button-file2">
											<Button component="span" variant="outlined" className={classes.uploadFileButton}>Upload File</Button>
										</label>
									</Grid>
								</Grid>

							</Grid>
						</Grid>
					</div>
				</div>

				<Dialog open={this.state.loading}
					classes={{
						paper: classes.dialogPaper,
					}}
				>
					<div style={{ boxShadow: 0, overflow: "none" }}>
						<CircularProgress color="primary" size={50} />
					</div>
				</Dialog>

				<Grid container spacing={2} className={classes.topcontainer}>
					{this.state.fcu.map((item, indx) => {
						return (
							<Grid item xs={12} sm={6} md={1} onClick={() => this.setState({ selectedFcu: item })}>
								<CardActionArea>
									<Card className={classes.fcucard}>
										<Typography className={classes.fcutext} key={indx}>FCU {indx + 1}</Typography>
									</Card>
								</CardActionArea>
							</Grid>
						);
					})
					}
				</Grid>

				{this.state.fcu.length > 0 && <>
					<div className={classes.wrapper}>
						<Grid container spacing={2} direction="column" className={classes.paper}>
							{this.state.selectedFcu === "" ?
								<Typography className={classes.title}>FCU Information</Typography>
								: <Typography className={classes.title}>{this.state.selectedFcu} Details</Typography>
							}
							<Grid container direction="row">
								<Grid item xs={5}>
									<Typography className={classes.textFiledText}>FCU Code</Typography>
								</Grid>
								<Grid item xs={8} sm={7}>
									<TextField
										placeholder="Enter FCU Code"
										variant="filled"
										onChange={(event) => this.setState({ fcucode: event.target.value, fcucode_error: false, error_text: null })}
										InputProps={{ classes: { input: classes.inputStyle, underline: classes.underline, root: classes.inputRoot } }}
										fullWidth
										autoComplete="off"
									/>
								</Grid>
							</Grid>

							<Grid container direction="row">
								<Grid item xs={5}>
									<Typography className={classes.textFiledText}>FCU Name</Typography>
								</Grid>
								<Grid item xs={8} sm={7}>
									<TextField
										placeholder="Enter FCU Name"
										variant="filled"
										onChange={(event) => this.setState({ fcuname: event.target.value, fcuname_error: false, error_text: null })}
										InputProps={{ classes: { input: classes.inputStyle, underline: classes.underline, root: classes.inputRoot } }}
										fullWidth
										autoComplete="off"
									/>
								</Grid>
							</Grid>

							<Grid container direction="row">
								<Grid item xs={5}>
									<Typography className={classes.textFiledText}>Type</Typography>
								</Grid>
								<Grid item xs={8} sm={7}>
									<TextField
										placeholder="Enter FCU type"
										variant="filled"
										onChange={(event) => this.setState({ type: event.target.value, type_error: false, error_text: null })}
										InputProps={{ classes: { input: classes.inputStyle, underline: classes.underline, root: classes.inputRoot } }}
										fullWidth
										autoComplete="off"
									/>
								</Grid>
							</Grid>

							<Grid container direction="row">
								<Grid item xs={5}>
									<Typography className={classes.textFiledText}>Model</Typography>
								</Grid>
								<Grid item xs={8} sm={7}>
									<TextField
										placeholder="Enter Model"
										variant="filled"
										onChange={(event) => this.setState({ model: event.target.value, model_error: false, error_text: null })}
										InputProps={{ classes: { input: classes.inputStyle, underline: classes.underline, root: classes.inputRoot } }}
										fullWidth
										autoComplete="off"
									/>
								</Grid>
							</Grid>

							<Grid container direction="row">
								<Grid item xs={5}>
									<Typography className={classes.textFiledText}>Color</Typography>
								</Grid>
								<Grid item xs={8} sm={7}>
									<TextField
										placeholder="Enter Color"
										variant="filled"
										onChange={(event) => this.setState({ color: event.target.value, color_error: false, error_text: null })}
										InputProps={{ classes: { input: classes.inputStyle, underline: classes.underline, root: classes.inputRoot } }}
										fullWidth
										autoComplete="off"
									/>
								</Grid>
							</Grid>

							<Grid container direction="row">
								<Grid item xs={5}>
									<Typography className={classes.textFiledText}>Capacity</Typography>
								</Grid>
								<Grid item xs={8} sm={7}>
									<TextField
										placeholder="Enter FCU capacity"
										variant="filled"
										onChange={(event) => this.setState({ capacity: event.target.value, capacity_error: false, error_text: null })}
										InputProps={{ classes: { input: classes.inputStyle, underline: classes.underline, root: classes.inputRoot } }}
										fullWidth
										autoComplete="off"
									/>
								</Grid>
							</Grid>

							<Grid container direction="row">
								<Grid item xs={5}>
									<Typography className={classes.textFiledText}>Ideal Temperature</Typography>
								</Grid>
								<Grid item xs={8} sm={7}>
									<TextField
										placeholder="Enter Ideal temperature"
										variant="filled"
										onChange={(event) => this.setState({ idealtemp: event.target.value, idealtemp_error: false, error_text: null })}
										InputProps={{ classes: { input: classes.inputStyle, underline: classes.underline, root: classes.inputRoot } }}
										fullWidth
										autoComplete="off"
									/>
								</Grid>
							</Grid>

							<Grid container direction="row">
								<Grid item xs={5}>
									<Typography className={classes.textFiledText}>Power Consumption</Typography>
								</Grid>
								<Grid item xs={8} sm={7}>
									<TextField
										placeholder="Enter power consumption"
										variant="filled"
										onChange={(event) => this.setState({ powerconsume: event.target.value, powerconsume_error: false, error_text: null })}
										InputProps={{ classes: { input: classes.inputStyle, underline: classes.underline, root: classes.inputRoot } }}
										fullWidth
										autoComplete="off"
									/>
								</Grid>
							</Grid>

							<Grid container direction="row">
								<Grid item xs={5}>
									<Typography className={classes.textFiledText}>Compressor Type</Typography>
								</Grid>
								<Grid item xs={8} sm={7}>
									<TextField
										placeholder="Enter compressor type"
										variant="filled"
										onChange={(event) => this.setState({ compressortype: event.target.value, compressortype_error: false, error_text: null })}
										InputProps={{ classes: { input: classes.inputStyle, underline: classes.underline, root: classes.inputRoot } }}
										fullWidth
										autoComplete="off"
									/>
								</Grid>
							</Grid>

							<Grid container direction="row">
								<Grid item xs={5}>
									<Typography className={classes.textFiledText}>Condensor Coil</Typography>
								</Grid>
								<Grid item xs={8} sm={7}>
									<TextField
										placeholder="Enter condensor coil"
										variant="filled"
										onChange={(event) => this.setState({ condensorcoil: event.target.value, condensorcoil_error: false, error_text: null })}
										InputProps={{ classes: { input: classes.inputStyle, underline: classes.underline, root: classes.inputRoot } }}
										fullWidth
										autoComplete="off"
									/>
								</Grid>
							</Grid>

							<Grid container direction="row">
								<Grid item xs={5}>
									<Typography className={classes.textFiledText}>Indoor Dimention</Typography>
								</Grid>
								<Grid item xs={8} sm={7}>
									<TextField
										placeholder="Enter Indoor Dimention"
										variant="filled"
										onChange={(event) => this.setState({ indoordimention: event.target.value, indoordimention_error: false, error_text: null })}
										InputProps={{ classes: { input: classes.inputStyle, underline: classes.underline, root: classes.inputRoot } }}
										fullWidth
										autoComplete="off"
									/>
								</Grid>
							</Grid>

							<Grid container direction="row">
								<Grid item xs={5}>
									<Typography className={classes.textFiledText}>Outdoor Dimention</Typography>
								</Grid>
								<Grid item xs={8} sm={7}>
									<TextField
										placeholder="Enter Outdoor Dimention"
										variant="filled"
										onChange={(event) => this.setState({ outdoordimention: event.target.value, outdoordimention_error: false, error_text: null })}
										InputProps={{ classes: { input: classes.inputStyle, underline: classes.underline, root: classes.inputRoot } }}
										fullWidth
										autoComplete="off"
									/>
								</Grid>
							</Grid>

							<Grid container direction="row">
								<Grid item xs={5}>
									<Typography className={classes.textFiledText}>Three Star BEE Rating 2020</Typography>
								</Grid>
								<Grid item xs={8} sm={7}>
									<TextField
										placeholder="Enter Three Star BEE Rating 2020"
										variant="filled"
										onChange={(event) => this.setState({ threestarbeerating: event.target.value, threestarbeerating_error: false, error_text: null })}
										InputProps={{ classes: { input: classes.inputStyle, underline: classes.underline, root: classes.inputRoot } }}
										fullWidth
										autoComplete="off"
									/>
								</Grid>
							</Grid>
						</Grid>


						<div className={classes.paper}>
							<Grid container spacing={2} direction="column" >
								{/* <Typography className={classes.title}>FCU Image</Typography> */}
								{this.state.selectedFcu === "" ?
									<Typography className={classes.title}>FCU Image</Typography>
									: <Typography className={classes.title}>{this.state.selectedFcu} Image </Typography>
								}
								<Grid item xs={12}>
									{this.state.file !== null ?
										<div className={classes.dragContainer}
										// style={{ display: "block", height: 150 }}
										>
											<div>
												<img src={this.state.imgSrc} alt="org" width={100} height="auto" />
											</div>
											<div>
												<input
													accept="image/*"
													className={classes.inputimage}
													id="text-button-file1"
													multiple
													type="file"
													onChange={this.fileHandler}
												/>
												<label htmlFor="text-button-file1">
													<Button component="span" variant="contained" className={classes.uploadButton} >
														Change
													</Button>
												</label>
											</div>
										</div>
										:
										<div className={classes.dragContainer}
											onDragOver={this.dragOver}
											onDragEnter={this.dragEnter}
											onDragLeave={this.dragLeave}
											onDrop={this.fileDrop}
										>
											<Typography style={{ fontSize: 14, color: "#000", padding: "10px 0px", fontFamily: "SourceSansPro-Regular" }}>Drag and drop files here</Typography>
											<Typography style={{ fontSize: 13, color: "#666666", fontFamily: "SourceSansPro-Regular" }}>or</Typography>
											<input
												accept="image/*"
												className={classes.inputimage}
												id="text-button-file1"
												multiple
												type="file"
												onChange={this.fileHandler}
											/>
											<label htmlFor="text-button-file1">
												<Button component="span" variant="contained" className={classes.uploadButton} >
													Upload
												</Button>
											</label>

										</div>}


									<hr
										style={{
											margin: "24px 0px",
											alignSelf: "stretch",
											border: "1px solid #E1E0E0",
											marginLeft: "-17px",
											marginRight: "-17px"
										}}
									/>



								</Grid>
							</Grid>
						</div>
					</div>
				</>
				}

				<div className={classes.bottomWrapper}>
					<div className={classes.bottomPaper}>
						<Button variant="contained" className={classes.buttonVariant} onClick={() => this.submit()}
							style={{ display: "flex", justifyContent: "center", backgroundColor: "#FFFFFF", border: "1px solid #616060", width: "100%", borderRadius: "8px" }}>
							<Typography className={classes.textFiledText}>Discard</Typography>
						</Button>
					</div>
					<div className={classes.bottomPaper}>

						<Button variant="contained" className={classes.buttonVariant} onClick={() => this.submit()}
							style={{ padding: "16px", display: "flex", justifyContent: "center", backgroundColor: "#57B78C", width: "100%", borderRadius: "8px" }}>
							Create Product
						</Button>
					</div>
				</div>


			</div>
		);
	}
}

/** Get data from store and assign to props. */
const mapStateToProps = (state) => {
	return {
		productCategories: state.products_reducers.productCategories,
		productsEfficiencyProfile: state.products_reducers.productsEfficiencyProfile
	}

};

export default connect(
	mapStateToProps
)(withStyles(styles)(AddProduct));

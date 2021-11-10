const styles = theme => ({
	root: {
		
		boxShadow: `0 0 35px 0  ${theme.palette.borderShadow}`,
		backgroundColor: "#FAFAFA",
		borderBottom: "1px solid #E1E0E0",
		display: 'flex',
		alignItems: 'center',
		padding: "10px 0px",
		paddingLeft: "271px",
		[theme.breakpoints.down('sm')]: {
			paddingLeft: 0,
		},
		height: theme.topBar.height,
		zIndex: theme.zIndex.appBar
	},
	toolbar: {
		minHeight: 'auto',
		width: '80%',
		justifyContent: "space-between",
		[theme.breakpoints.down('sm')]: {
			justifyContent: "flex-start",
		},
		paddingLeft: 0
	},
	brandWrapper: {
		background: theme.palette.primary.main,
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		width: '271px',
		[theme.breakpoints.down('sm')]: {
			width: 50,
		},
		height: theme.topBar.height,
		flexShrink: 0
	},
	logo: {
		width: 'calc(100% - 160px)',
		maxWidth: '100%',
		margin: 'auto',
		fontFamily: 'Montserrat,sans-serif',
		fontSize: '22px',
		fontWeight: 700,
		letterSpacing: 3,
		color: theme.palette.common.white
	},
	title: {
		marginLeft: theme.spacing(3),
		// textTransform: 'uppercase',
		textDecoration: 'none',
		fontSize: '19px',
		fontWeight: "600",
		fontFamily: "SourceSansPro-Regular",
		color: theme.palette.common.black
	},
	menuButton: {
		color: theme.palette.common.black,
		marginLeft: '-4px'
	},
	notificationsButton: {
		marginLeft: 'auto'
	},
	verticalDivider: {
		margin: "0px 10px",
		padding: "0px 1px",
		backgroundColor: theme.palette.divider
	},
	inputRoot: {
		backgroundColor:"#FFFFFF",
		border: "1px solid #E1E7ED",
		borderRadius: "4px",
		fontSize: "13x !important",
		fontFamily: "SourceSansPro-Regular",
		"&:hover": {
			border: "1px solid #57B78C",
			backgroundColor: "#FFFFFF"
		}
	},
	inputStyle: {
		fontFamily: "SourceSansPro-Regular !important",
		fontSize: "13x !important",
		padding: "10px !important",
		color: "#6E8CA8",

        width: "300px",
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
	row: {
		float: "right",
		display: "flex",
		justifyContent: "space-between"
	},
	userimage: {
		width: 30,
		height: 30,
		borderRadius: "50%",
		padding: 2,
		border: "1px solid #cccccc"
	},
	nameText: {
		paddingRight: 10,
		fontSize: 15,
		color: "#000",
		fontFamily: "SourceSansPro-Regular"
	}
});
export default styles;
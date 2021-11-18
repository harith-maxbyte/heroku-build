const styles = theme => ({
	topbar: {
		position: 'fixed',
		width: '100%',
		top: 0,
		left: 0,
		right: 'auto',
		transition: theme.transitions.create(['margin', 'width'], {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.leavingScreen
		})
	},
	drawerPaper: {
		borderRight: 0,
		zIndex: 1200,
		width: '271px',
		// paddingTop:theme.topBar.height,
		// boxShadow: "0 0 15px rgba(0,0,0,0.4)"
		// top: theme.topBar.height,
		// [theme.breakpoints.down('sm')]: {
		// 	top: 0,
		// },
	},
	sidebar: {
		width: '270px' 
	},
	content: {
		minHeight: '80vh',
		padding: theme.spacing(3),
		paddingTop: theme.spacing(9),
		backgroundColor: "#FAFAFA",
		transition: theme.transitions.create('margin', {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.leavingScreen
		})
	},
	contentShift: {
		marginLeft: '270px',
		minHeight: "80vh"
	},
	[theme.breakpoints.down('sm')]: {
		content: {
			padding: 0,
			paddingTop: theme.spacing(9)
		}
	}
});
export default styles;
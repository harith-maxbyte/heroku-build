
const styles = theme => ({
	root: {
		// backgroundColor: theme.palette.common.commonBackground,
		// display: 'flex',
		// flexDirection: 'column',
		// // height: '100%',
		paddingTop: theme.spacing(3),
		// paddingLeft: theme.spacing(1),
		// paddingRight: theme.spacing(1),
		overflow: 'hidden',
		position: "relative",
		height: "900px",
		left: "0px",
		top: "0px",
		background: "#FFFFFF",
		boxShadow: "4px 0px 15px rgba(0, 0, 0, 0.08)"

	},
	profile: {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		minHeight: 'fit-content'
	},
	avatar: {
		width: '100px',
		height: '100px'
	},
	nameText: {
		marginTop: theme.spacing(2)
	},
	bioText: {},
	profileDivider: {
		marginBottom: theme.spacing(2),
		marginTop: theme.spacing(2)
	},
	listSubheader: {
		color: theme.palette.common.contrastText
	},
	listItem: {
		cursor: 'pointer',
		'&:hover': {
			'& svg': {
				'& path': {
					fill: "#B9B8B8"
				},
			},
			backgroundColor: theme.palette.default.light,
			borderLeft: `3px solid ${theme.palette.primary.main}`,
			// borderRadius: '4px',
			'& $listItemIcon': {
				marginLeft: '-4px'
			}
		},
		'& + &': {
			marginTop: theme.spacing(1)
		}
	},
	activeListItem: {
		borderLeft: `3px solid ${theme.palette.primary.main}`,
		backgroundColor: theme.palette.default.light,
		'& $listItemText': {
			color: theme.palette.primary.main
		},
		// '& $listItemIcon': {
		// 	marginLeft: '-4px',
		// 	color: theme.palette.primary.main
		// },
		'& svg': {
			'& path': {
				fill: "#57B78C"
			},
		},
	},
	listItemIcon: {
		marginRight: 0,
	},

	listItemText: {
		fontWeight: "500",
		color: theme.palette.common.contrastText,
		fontFamily: "SourceSansPro-Regular",
		fontSize: 17


	},
	listDivider: {
		marginBottom: theme.spacing(2),
		marginTop: theme.spacing(2)
	},
	'Mui-selected': {
		display: 'none'
	},
	collapseContainer: { marginTop: theme.spacing(2) },
	nestedItem: {
		cursor: 'pointer',
		paddingLeft: theme.spacing(4),
		position: 'relative',
		paddingTop: '3px',
		paddingBottom: 0,
		'&:before': {
			content: '""',
			position: 'absolute',
			top: '0px',
			left: '20px',
			display: 'block',
			height: ' 100%',
			width: '2px',
			background: '#eee'
		},
		'&:hover:before': {
			background: theme.palette.default.dark
		}
	},
	activeNestedItem: {
		'&:before': {
			background: theme.palette.default.dark
		}
	},
	badgeText: {
		fontFamily: "SourceSansPro-Regular",
		backgroundColor: "#EB7676",
		padding: "2px 10px",
		borderRadius: 15,
		fontSize: 13,
		color: "#fff"
	}
});
export default styles;

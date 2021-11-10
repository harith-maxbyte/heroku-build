// @ts-nocheck
import React from 'react';
import { makeStyles } from '@material-ui/styles';
import CircularProgress from '@material-ui/core/CircularProgress';

const useStyles = makeStyles(theme => ({
	root: { background: "transparent", height: '100vh', display: "flex", justifyContent: 'center', alignItems:"center" },
	progress: { color: "#FAA57E" }
}));
const Loading = () => {
	const classes = useStyles();
	return <div className={classes.root}><CircularProgress size={60} className={classes.progress} /></div>;
};
export default Loading;

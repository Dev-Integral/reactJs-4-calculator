import React, { Component } from 'react';
import "./assets/CSS/admin.css"
import SideBar from './common/sideBar';
import AppBar from '@material-ui/core/AppBar';
import ToolBar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';

// Styling imports
import { withStyles } from '@material-ui/core/styles';
import classNames from 'classnames';
// Drawer imports
import Drawer from '@material-ui/core/Drawer';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Divider from '@material-ui/core/divider';

const drawerWidth = 240;
const styles = theme => ({
	root: {
		display: 'flex'
	},
	toolbar: {
		paddingRight: 24
	},
	drawerPaper: {
		position: 'relative',
		whitespace: 'noWrap',
		width: drawerWidth,
		transition: theme.transitions.create('width', {
			easing: theme.transitions.sharp,
			duration: theme.transitions.duration.enteringScreen
		})
	},
	drawerPaperClose: {
		overflowX: 'hidden',
		width: theme.spacing(7),
		transition: theme.transitions.create('width', {
			easing: theme.transitions.sharp,
			duration: theme.transitions.duration.leavingScreen
		})
	},
	appBarShift: {
		marginLeft: drawerWidth,
		width: `calc(100% - ${drawerWidth}px)`,
		transition: theme.transitions.create(['width', 'margin'], {
			easing: theme.transitions.sharp,
			duration: theme.transitions.duration.enteringScreen
		})
	},
	appBar: {
		zIndex: theme.zIndex.drawer + 1,
		transition: theme.transitions.create(['width', 'margin'], {
			easing: theme.transitions.sharp,
			duration: theme.transitions.duration.leavingScreen
		})
	},
	toolbarIcon: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'flex-end',
		padding: '0 8px',
		...theme.mixins.toolbar
	},
	appbarSpace: theme.mixins.toolbar,
	content: {
		flexGrow: 1,
		padding: theme.spacing(3),
		height: '100vh',
		overflow: 'auto'
	}
}
);

class AdminWrapper extends Component {

	constructor(props) {
		super(props);

		this.state = {
			open: true
		}
	}

	handleDrawerOpen = (e) => {
		this.setState({ open: true });
	}
	handleDrawerClose = (e) => {
		this.setState({ open: false });
	}

	render() {
		const { classes } = this.props;
		return (
			<div id='admin-page' className={classes.root}>
				<AppBar className={classNames(classes.appBar, this.state.open && classes.appBarShift)}>
					<ToolBar className={classes.toolbar}>
						<IconButton onClick={this.handleDrawerOpen}>
							<MenuIcon />
						</IconButton>
						<Typography
							component="h1"
							variant="h6"
							color="inherit"
							noWrap
						>Admin</Typography>
					</ToolBar>
				</AppBar>
				<Drawer
					classes={{
						paper: classNames(classes.drawerPaper, !this.state.open && classes.drawerPaperClose)
					}}
					variant="permanent"
					open={true}
				>
					<div className={classes.toolbarIcon}>
						<IconButton onClick={this.handleDrawerClose}>
							<ChevronLeftIcon />
						</IconButton>
					</div>
					<Divider />
					<SideBar />
				</Drawer>
				<main className={classes.content}>
					<div className={classes.appbarSpace} />
					{this.props.children}
				</main>
				
			</div>
		)
	}
}

export default (withStyles(styles)(AdminWrapper));
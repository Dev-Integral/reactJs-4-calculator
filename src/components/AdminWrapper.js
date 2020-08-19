import React, { Component } from 'react';
import "./assets/CSS/admin.css"

import AppBar from '@material-ui/core/AppBar';
import ToolBar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
// Styling imports

import { withStyles } from '@material-ui/core/styles';

// Drawer imports
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Divider from '@material-ui/core/divider';

const drawerWidth = 240;
const styles = theme => ({
	toolbar: {
		paddingRight: 24
	},
	drawerPaper:{
		position: 'relative',
		whitespace: 'noWrap',
		width: drawerWidth
	},
	appBar: {
		marginLeft: drawerWidth,
		width: `calc(100% - ${drawerWidth}px)`
	},
	toolbarIcon:{
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'flex-end',
		padding: '0 8px',
		...theme.mixins.toolbar
	}

});

class AdminWrapper extends Component {

	constructor(props){
		super(props);

		this.state = {
			open: true
		}
	}

	handleDrawerOpen=(e)=>{
		this.setState({open: true});
	}
	handleDrawerClose=(e)=>{
		this.setState({open: false});
	}

	render() {
		const {classes} =this.props;
		return (
			<div id='admin-page'>
				<AppBar className={classes.appBar}>
					<ToolBar className={classes.toolbar}>
						<IconButton>
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
							paper: classes.drawerPaper}}
						variant="permanent"
						open={true}
					>
						<div className={classes.toolbarIcon}>
							<IconButton onClick={this.handleDrawerClose}>
								<ChevronLeftIcon />
							</IconButton>
						</div>
						<Divider />
						<List>
							<ListItem>
								Dashboard
              </ListItem>
						</List>
					</Drawer>
				
				{this.props.children}
			</div>
		)
	}
}

export default withStyles(styles)(AdminWrapper);
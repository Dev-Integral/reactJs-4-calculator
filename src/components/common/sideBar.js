import React, { Component } from 'react';
import {Link as RouterLink} from 'react-router-dom';

// material-ui components
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

// icon
import FileCopyIcon from '@material-ui/icons/FileCopy';
import FaceIcon from '@material-ui/icons/Face';
import DashboardIcon from '@material-ui/icons/Dashboard';

class  SideBar extends Component {
    render(){
        return(
            <List>
                <ListItem component={RouterLink} to='/admin' button>
                    <ListItemIcon>
                        <DashboardIcon />
                    </ListItemIcon>
                    <ListItemText primary="Dashboard" />
                </ListItem>
                <ListItem button component={RouterLink} to='/admin/posts'>
                    <ListItemIcon>
                        <FileCopyIcon />
                    </ListItemIcon>
                    <ListItemText primary="Posts" />
                </ListItem >
                <ListItem component={RouterLink} to='/admin/users' button>
                    <ListItemIcon>
                        <FaceIcon />
                    </ListItemIcon>
                    <ListItemText primary="Users" />
                </ListItem>
            </List>
        )
    }
}

export default SideBar;
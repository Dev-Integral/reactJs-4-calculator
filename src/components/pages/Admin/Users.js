import React, {Component} from 'react';

import TableView  from "../../common/TableView";
import Fab from '@material-ui/core/Fab';
import EditIcon from '@material-ui/icons/Edit';

import {connect} from 'react-redux';
import * as AdminActions from '../../../store/actions/adminActions';
import { Link as RouterLink } from 'react-router-dom';
import { withStyles } from '@material-ui/core';

const columns =[
    {label:'ID', name: 'id'},
    {label: 'Email', name: 'email'},
    {label: 'Name', name: 'name'}
];
const styles = (theme) => ({
    fab: {
        position: 'fixed',
        bottom: '50px',
        right: '50px'
    }
});

class Users extends Component{

    componentDidMount() {
        this.props.getUsers(this.props.auth.token);
    }
    render(){
        const users = this.props.admin.users;
        const {classes} = this.props
        return(
            <div>
                <h1>Users</h1>
                <TableView
                     columns={columns}
                     rows={users}
                     whereToRoute={'user'}
                />
                <Fab color="secondary" component={RouterLink} to='/admin/users/add'  aria-label="Add" className={classes.fab}>
                    <EditIcon />
                </Fab>
            </div>
            
        )
    }
}

const mapStateToProps = state => {
    return {
        auth: state.auth,
        admin: state.admin
    }
}
const mapDispatchToPRops = dispatch => {
    return {
        getUsers: (token) => {
            dispatch(AdminActions.getUsers(token));
        }
    }
}

export default withStyles(styles)(connect(
    mapStateToProps,
    mapDispatchToPRops
)(Users));
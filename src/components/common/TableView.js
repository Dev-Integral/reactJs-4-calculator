import React, { Component } from 'react';
import {Link as RouterLink} from 'react-router-dom';

// imports from material-ui
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import Paper from '@material-ui/core/Paper';
import Link from '@material-ui/core/Link';

class TableView extends Component {
    render() {
        const { rows, columns, whereToRoute } = this.props;
        return (
            <Paper>
                <Table>
                    <TableHead>
                        <TableRow>
                            {
                                columns ?
                                    columns.map((col, colIndex) => {
                                        return (
                                            <TableCell key={colIndex}>{col.label}</TableCell>
                                        )
                                    })
                                    : null
                            }
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {
                            rows ?
                                rows.map((row, rowIndex) => {
                                    return (
                                        <TableRow key={rowIndex}>
                                            {
                                                columns.map((col, colIndex) => {
                                                    return(
                                                    <TableCell key={colIndex}>
                                                        { col.name==='id' ?
                                                        <Link component={RouterLink} to={
                                                            whereToRoute==='user' ? `/admin/users/edit/${row[col.name]}` : `/admin/posts/edit/${row[col.name]}`
                                                            } >
                                                            {row[col.name]}
                                                        </Link>
                                                        :
                                                        row[col.name]
                                                        }
                                                    </TableCell>
                                                )})
                                            }
                                        </TableRow>
                                    )}
                                )
                                : null}
                    </TableBody>
                </Table>
            </Paper>
        )
    }
}

export default TableView;
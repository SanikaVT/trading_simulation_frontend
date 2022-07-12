import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import {Card} from "@mui/material";
import "./PortfolioTable.css";
import TableFooter from '@mui/material/TableFooter';
import Typography from '@mui/material/Typography';
import {Grid} from "@mui/material";

function createData(
    stockname: string,
    buydate: string,
    qty: number,
    avgcost: number,
    currentval: number,
) {
    return { stockname, buydate, qty, avgcost, currentval };
}

const rows = [
    createData('Robert Engineers', '12/2/2020',80, 12.22, 13.4),
    createData('Jio Telecommunications', '12/2/2022',2000, 1233.22, 1223.4),
    createData('Starlite Power', '12/2/2020',122, 1.22, 1.4)
];

export default function BasicTable() {
    return (
        <Card className="center">
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell><Typography variant="h6">Stock Name</Typography></TableCell>
                            <TableCell align="right">
                                <Typography variant="h6">B. Date</Typography></TableCell>
                            <TableCell align="right"><Typography variant="h6">Qty.</Typography></TableCell>
                            <TableCell align="right"><Typography variant="h6">Avg.</Typography></TableCell>
                            <TableCell align="right"><Typography variant="h6">Current Value</Typography></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => (
                            <TableRow
                                // key={row.name}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    {row.stockname}
                                </TableCell>
                                <TableCell align="right">{row.buydate}</TableCell>
                                <TableCell align="right">{row.qty}</TableCell>
                                <TableCell align="right">{row.avgcost}</TableCell>
                                <TableCell align="right">{row.currentval}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
                <TableFooter>
                    <TableRow>
                        <TableCell>
                            <Grid container direction="row" alignItems="right" justifyContent="center" spacing={4} >
                                <Grid item>
                                    <Typography variant="h5">Total investment: $982.77</Typography>
                                </Grid>
                                <Grid item>
                                    <Typography variant="h6" color="#4CAF50">Profit: $12.67</Typography>
                                </Grid>
                                <Grid item>
                                    <Typography variant="h6" color="#f55723">Loss: $4.67</Typography>
                                </Grid>
                            </Grid>
                        </TableCell>
                    </TableRow>
                </TableFooter>
            </TableContainer>
        </Card>
    );
}

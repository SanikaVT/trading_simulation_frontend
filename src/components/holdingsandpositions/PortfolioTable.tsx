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
    createData('Adani Power', '12/2/2020', 40, 12.22, 13.4),
    createData('Reliance', '30/4/2021',10, 1200.22, 1123.4),
    createData('BSNL', '12/4/2022',50, 2.22, 3.4),
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
                    <TableRow bgcolor="#EEEEEE">
                        <TableCell>Stock Name</TableCell>
                        <TableCell align="right">B. Date</TableCell>
                        <TableCell align="right">Qty.</TableCell>
                        <TableCell align="right">Avg. Cost</TableCell>
                        <TableCell align="right">Current Value</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <TableRow
                            key={row.name}
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
                                <Typography variant="h5">Total investment: $23,982.77</Typography>
                            </Grid>
                            <Grid item>
                                <Typography variant="h6" color="#00FF00">Profit: $120.67</Typography>
                            </Grid>
                            <Grid item>
                                <Typography variant="h6" color="#FF0000">Loss: $540.67</Typography>
                            </Grid>
                        </Grid>
                    </TableCell>
                </TableRow>
            </TableFooter>
        </TableContainer>
        </Card>
    );
}

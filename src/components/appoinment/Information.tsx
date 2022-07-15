import * as React from 'react';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import Button from '@mui/material/Button';
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios"

const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 150 },
    { field: 'email', headerName: 'email', width: 150, editable: true },
    {
        field: 'firstName',
        headerName: 'First name',
        width: 150,
        editable: true,
    },
    {
        field: 'lastName',
        headerName: 'Last name',
        width: 150,
        editable: true,
    },
    {
        field: 'age',
        headerName: 'Age',
        type: 'number',
        width: 110,
        editable: true,
    },
    {
        field: 'address',
        headerName: 'location',
        type: 'string',
        width: 210,
        editable: true,
    },
    {
        field: 'date',
        headerName: 'Date',
        type: 'date',
        width: 210,
        editable: true,
    },
    {
        field: "button",
        headerName: "Make an appointment",
        width: 200,
        renderCell: (appointment) => {

            return (
                <>
                    <Button variant="contained" onClick={() => {
                        axios.delete('/api/appointment/' + appointment.id).then((result) => {
                            console.log('deleted');
                            window.location.reload();
                        }).catch((err) => {
                            console.log('error')
                            console.log(err);
                        })
                    }}>Cancel</Button>

                </>
            );
        }
    }
    // {
    //     field: 'fullName',
    //     headerName: 'Full name',
    //     description: 'This column has a value getter and is not sortable.',
    //     sortable: false,
    //     width: 160,
    //     valueGetter: (params: GridValueGetterParams) =>
    //         `${params.row.firstName || ''} ${params.row.lastName || ''}`,
    // },
];


export default function Information() {
    interface characterData {
        id: number;
        title: string,
        lastName: string,
        firstName: string,
        age: number,
        address: string,
        email: string
    }
    const params = useParams()
    // const id = params.id;
    const [data, setData] = useState<characterData[]>([]);
    useEffect(() => { fetchData() }, [])
    const fetchData = () => {
        axios.get('/api/appointment/' + localStorage.getItem("userID") ).then((result) => {
            setData(result.data.appointment)  
            console.log(result)  
        }).catch((err) => {
            console.log('error')
            console.log(err);
        })
    }
    

    return (
        <div>
            <div>Your made these appoinments with our financial advisor</div>
            <div style={{ height: 400, width: '100%' }}>
                <DataGrid
                    rows={data}
                    columns={columns}
                    pageSize={5}
                    rowsPerPageOptions={[5]}
                    checkboxSelection
                    disableSelectionOnClick
                />
            </div>

        </div>

    );
}

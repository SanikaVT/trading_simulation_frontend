//Author: qiwei sun
import { DataGrid, GridColDef, gridColumnsSelector} from '@mui/x-data-grid';
import Button from '@mui/material/Button';
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios"

// Definded the columns for grid
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
        headerName: "Cancel an appointment",
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
];

// Information components module
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
    const [data, setData] = useState<characterData[]>([]);

    // get appointment data from database
    useEffect(() => { fetchData() }, [])
    const fetchData = () => {
        axios.get('/api/appointment/' + localStorage.getItem("userID") ).then((result) => {
            let arr = result.data.appointment;
            if(arr[0])
            {
                setData(result.data.appointment);
            }
                      
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

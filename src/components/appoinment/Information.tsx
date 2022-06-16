import * as React from 'react';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';

const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 90 },
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
        field: 'location',
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
        field: 'fullName',
        headerName: 'Full name',
        description: 'This column has a value getter and is not sortable.',
        sortable: false,
        width: 160,
        valueGetter: (params: GridValueGetterParams) =>
            `${params.row.firstName || ''} ${params.row.lastName || ''}`,
    },
];

const rows = [
    { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 ,location: 'halifax',date:'2020-06-16'},
    { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42, location: 'spring garden road ',date: '2020-06-16' },
];

export default function DataGridDemo() {
    return (
        <div>
            <div>Your made these appoinments with our financial advisor</div>
            <div style={{ height: 400, width: '100%' }}>
                <DataGrid
                    rows={rows}
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

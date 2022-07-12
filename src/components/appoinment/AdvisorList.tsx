import axios from "axios";
import { userInfo } from "os";
import { useEffect, useState } from "react";
import { createSearchParams, useNavigate } from "react-router-dom";
import Avatar from '@mui/material/Avatar';
import Grid from '@mui/material/Grid';
import { Box } from "@mui/material";
import InputBase from '@mui/material/InputBase';
import Paper from '@mui/material/Paper';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import Button from '@mui/material/Button';





const AdvisorList = () => {
    const navigate = useNavigate();
    const [searchWord, setSearchWord] = useState<string>("");

    interface characterData {
        id: number;
        title: string,
        lastName: string,
        firstName: string,
        picture: string,
        email: string
    }
    const [data, setData] = useState<characterData[]>([])
    const [dataCopy, setDataCopy] = useState<characterData[]>([])
    useEffect(() => { fetchData() }, [])
    const fetchData = () => {
        axios.get('https://tutorial4-api.herokuapp.com/api/users/').then((result) => {
            setData(result.data.data)
            setDataCopy(result.data.data)
        }).catch((err) => {
            console.log("something went wrong");
        })
    }
    useEffect(() => {
        if (data && data.length > 0) {
            data.map((user, index) => {
                if (user.firstName.toLowerCase() === searchWord.toLowerCase() || user.lastName.toLowerCase() === searchWord.toLowerCase()) {
                    const rows = [
                        { id: user.id, title: user.title, lastName: user.lastName, firstName: user.firstName, email: user.email, picture: user.picture },
                    ];
                    setData(rows)
                    return;
                } 

            })
        } 

    }, [searchWord])



    const onChange = (event: any) => {
        event.persist();
        const value = event.target.value
      
        setSearchWord(value);
        console.log(searchWord)
    }

    const columns: GridColDef[] = [

        { field: 'title', headerName: 'Title', width: 150 },
        {
            field: 'firstName',
            headerName: 'First name',
            width: 150,
            editable: false,
        },
        {
            field: 'lastName',
            headerName: 'Last name',
            width: 150,
            editable: false,
        },
        {
            field: 'email',
            headerName: 'Email',
            width: 150,
            editable: false,
        },
        {
            field: "user",
            headerName: "Advisor",
            width: 150,
            renderCell: (user) => {

                return (
                    <>
                        <Avatar alt="Remy Sharp" src={user.row.picture} />

                    </>
                );
            }
        },
        {
            field: "button",
            headerName: "Make an appointment",
            width: 200,
            renderCell: (user) => {

                return (
                    <>
                        <Button variant="contained" onClick={() => navigate(
                            '/advisor/' + user.id)}>Book an appointment</Button>

                    </>
                );
            }
        },


    ];







    return (

        <>
            <Box
                display="flex"
                alignItems="center"
                justifyContent="center"
            >
                <Paper
                    component="form"
                    sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', justifyContent: 'center', width: 1 / 4 }}
                >
                    <InputBase type="text" placeholder="Enter first name or last name "
                        value={searchWord} onChange={onChange} sx={{ ml: 1, flex: 1 }} />
                    <IconButton type="submit" sx={{ mr: 1, p: '10px' }} aria-label="search">
                        <SearchIcon />
                    </IconButton>
                </Paper>
            </Box>
           




            <Box component="span" sx={{ p: '2px' }} display="flex"
                alignItems="center"
                justifyContent="center">


                <div style={{ height: 400, width: '80%' }}>

                    <DataGrid
                        rows={data}
                        columns={columns}
                        pageSize={5}
                        rowsPerPageOptions={[5]}
                        disableSelectionOnClick

                    />
                </div>



            </Box>


        </>


    )
}
export default AdvisorList;
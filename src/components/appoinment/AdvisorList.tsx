import axios from "axios";
import { userInfo } from "os";
import { useEffect, useState } from "react";
import { createSearchParams, useNavigate } from "react-router-dom";
import Avatar from '@mui/material/Avatar';
import Grid from '@mui/material/Grid';
import { Box } from "@mui/material";



const AdvisorList = () => {
    const navigate = useNavigate();
    const [searchWord, setSearchWord] = useState<string>('');
    interface characterData {
        id: number;
        title: string,
        lastName: string,
        firstName: string,
        picture: string,
        email: string
    }
    const [data, setData] = useState<characterData[]>([])
    useEffect(() => { fetchData() }, [])
    const fetchData = () => {
        axios.get('https://tutorial4-api.herokuapp.com/api/users/').then((result) => {
            setData(result.data.data)
        }).catch((err) => {
            console.log("something went wrong");
        })
    }
    console.log(data)
   
    const onChange = (event: any) => {
        event.persist();
        setSearchWord(event.target.value);
    }


    return (
        <>
            <div >

                <input  type="text" placeholder="enter first name or last name " 
                    value={searchWord} onChange={onChange}></input>
                <div>
                    {data?.length ? data.map((user, index) => {

                        if (user.firstName === searchWord || user.lastName === searchWord) {
                            return (
                                <div key={user.id} onClick={() => navigate(
                                    '/advisor/' + user.id

                                )}>
                                    <img src={user.picture}></img>
                                    <div >
                                        <a >{user.title}</a>
                                        <a >{user.firstName} {user.lastName}</a>
                                        <a >{user.email}</a>
                                    </div>
                                </div>
                            )
                        }

                    }) : null}
                </div>

            </div>
            <div >

                {data?.length ? data.map((user) => {
                    return (<div className="item" key={user.id} onClick={() => {
                        navigate('/advisor/' + user.id)

                    }}>
                        <Box sx={{ flexGrow: 1 }}>
                            <Grid container spacing={1}>
                                <Grid item xs={2}>
                                    <img  alt="Remy Sharp" src={user.picture} />


                                </Grid>
                                <Grid item xs={4}>
                                    <Box>
                                        <p >{user.title}</p>
                                        <p >{user.firstName} {user.lastName}</p>
                                        <p >{user.email}</p>
                                    </Box>

                                </Grid>
                                <Grid item xs={4}>

                                </Grid>
                                <Grid item xs={8}>

                                </Grid>
                            </Grid>
                        </Box>


                        <div >




                        </div>
                    </div>)
                }) : null}

            </div>

        </>


    )
}
export default AdvisorList;
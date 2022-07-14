import * as React from 'react';
import BlogCard from "./BlogCard";
import Grid from '@mui/material/Grid';
import Box from "@mui/material/Box";
import AddIcon from '@mui/icons-material/Create';
import Button from "@mui/material/Button";
export default function Blog () {

    function  write () {
        console.log("write blog");
        window.location.href="/writeblog";
    }



    const buttonprop ={
         top: 5,
      bgcolor: "#2E8BC0",
        float: 'right',
        borderRadius: '15px'

    };

    return(

<Box sx={{ flexGrow: 1 }}>
    <Button variant="contained" endIcon={<AddIcon />} sx={buttonprop} onClick={write}> Write blog</Button>
    <Grid container spacing={2} columns={{ xs: 4, sm: 8, md: 12 }}>

        <BlogCard/>
        <BlogCard/>
        <BlogCard/>
        <BlogCard/>
        <BlogCard/>
        <BlogCard/>

    </Grid>


</Box>
    );
             }

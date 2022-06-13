import * as React from 'react';
import BlogCard from "./BlogCard";
import Grid from '@mui/material/Grid';
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import {ButtonBase} from "@mui/material";
import AddIcon from '@mui/icons-material/Create';

import Button from "@mui/material/Button";
import {auto} from "framer-motion/types/render/dom/value-types/type-auto";
import Typography from "@mui/material/Typography";
export default function Blog () {

    function  hello () {
        console.log("hello ji");
    }

const icon1 ={
        height:100,
        width:100,
        color:"#2E8BC0"
    // display: 'flex',
    // alignItems: 'center',

};

    const card_1 = {
        backgroundColor: "white",
        borderRadius: "10px",
        borderWidth: 1,
         // margin: "10px",
        // height: "full",
        padding: "10px",
        // size: 100
    };
    return(
        // <Grid><BlogCard/></Grid>
<Box sx={{ flexGrow: 1 }}>
    <Grid container spacing={2} columns={{ xs: 4, sm: 8, md: 12 }}>

        <BlogCard/>
        <BlogCard/>
        <BlogCard/>
        <BlogCard/>
        <BlogCard/>
        <BlogCard/>
        <Grid item xs={6} md={3}>
            <ButtonBase onClick={hello}>

            <Card variant="outlined" style={card_1} sx={{ height: 500, maxWidth: 320}}>

                   <Grid container spacing={25} alignItems={"center"} justifyContent={"center"} direction={"row"}>
                   <Grid item xs={12} md={12} >
                    <AddIcon style={icon1} />
                   </Grid>
                       <Grid item xs={12} md={12} >
                          <Typography variant="h4"  > Add Blog</Typography>
                       </Grid>
                   </Grid>
            </Card>
        </ButtonBase>
        </Grid>
    </Grid>
</Box>
    );
             }

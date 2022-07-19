import { ButtonBase, CardActionArea } from "@mui/material";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import * as React from "react";
import Grid from "@mui/material/Grid";

export default function BlogCard(props: any) {


  function openblog(id: string) {
    window.location.href = `/blogdetails/${id}`;
    console.log("hello ji");
  }

  const card_border = {
    backgroundColor: "white",
    borderRadius: "10px",
    borderWidth: 1,
  height:"100%",
    display: 'flex',
  };


  return (
    <Grid item xs={12} md={3} style={{display: 'flex'}} >
      <Card sx={{  height:300, width:300, maxWidth: 300, maxHeight: 500}} style={card_border}>
        <ButtonBase onClick={() => openblog(props.blogsID)}>
          {/* <CardActionArea> */}

            <CardContent>

              <Typography gutterBottom variant="h5" component="div" align={"center"}>
                 {props.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {props.description}
              </Typography>
            </CardContent>
          {/* </CardActionArea> */}
        </ButtonBase>
      </Card>
    </Grid>
  );
}

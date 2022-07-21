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
  }

  const card_border = {
    backgroundColor: "white",
    borderRadius: "10px",
    border: "2px solid #2E8BC0",
    height: "15rem",
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };

  return (
    <Grid item xs={12} md={3} style={{ display: "flex" }}>
      <Card
        style={card_border}
        elevation={5}
        onClick={() => openblog(props.blogsID)}
      >
        <ButtonBase>
          {/* <CardActionArea> */}

          <CardContent>
            <Typography
              gutterBottom
              variant="h5"
              component="div"
              align={"center"}
              style={{ color: "black", fontWeight: "bolder" }}
            >
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

/**
 * Author: Dharmik Hiteshkumar Soni
 * BannerID: B00867641
 * Email: dh657288@dal.ca
 */


/**
 * This component will render when there are no favorite stocks for current user
 * Once user add somthing to favorite this component will be removed dynamically
 */
import React from "react";
import { Card, CardActionArea, CardContent, Typography } from "@mui/material";

function NoFavorite() {
  return (
    <Card
      sx={{ width: "100%", height: "20rem" }}
      style={{
        backgroundColor: "#b9b4b45c",
        border: "1px solid transparent",
        borderRadius: "1px",
        padding: "5spx",
        alignItems: "center",
        justifyContent: "center",
        display: "flex",
      }}
    >
      <CardActionArea>
        <CardContent
          style={{
            alignItems: "center",
            justifyContent: "center",
            display: "flex",
          }}
        >
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            style={{
              fontWeight: "bolder",
              color: "#000000",
              backgroundColor: "white",
              padding: "5px",
              boxShadow: "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px",
            }}
          >
            No Current Favorite Stocks
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default NoFavorite;

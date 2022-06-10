import React from "react";
import { Routes, Route } from "react-router-dom";
import Recommendation from "../components/Recommendation";
import { Stack } from "@mui/material";
import Favorites from "./Favorites";


function Home() {
  return (
    <>
   
      <Stack>
        <Recommendation />
        <Favorites />
      </Stack>
    </>
  );
}

export default Home;

import React from "react";
import { Link } from "@mui/material";
import { Grid } from "@mui/material";

function FooterLinksComp(props: any) {
  return (
    <Grid color="white" textAlign="center" sx={{ pt: 1 }}>
      <Link
        href={props.link}
        style={{ color: "inherit", textDecoration: "none" }}
      >
        {props.name}
      </Link>
    </Grid>
  );
}

export default FooterLinksComp;

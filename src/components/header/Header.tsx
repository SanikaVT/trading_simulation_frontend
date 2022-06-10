import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import { styled, alpha } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Toolbar from "@mui/material/Toolbar";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import Tooltip, { tooltipClasses } from "@mui/material/Tooltip";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 1),
    color: "black",
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

const BootstrapTooltip = styled(({ className, ...props }) => (
  <Tooltip {...props} arrow classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.arrow}`]: {
    color: theme.palette.common.black,
  },
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: theme.palette.common.black,
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

function Header() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" style={{ backgroundColor: "#2E8BC0" }}>
        <Toolbar>
          <Typography
            variant="h6"
            component="div"
            color={"white"}
            fontWeight={"bolder"}
            sx={{ flexGrow: 1 }}
          >
            DTrade
          </Typography>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search Here......"
              inputProps={{ "aria-label": "search" }}
            />
          </Search>

          <BootstrapTooltip title="Go to Profile Page">
            <Button
              style={{
                color: "white",
                fontWeight: "bolder",
                border: "1px solid white",
              }}
            >
              Profile
            </Button>
          </BootstrapTooltip>

          <BootstrapTooltip title="Technical Support">
            <Button
              style={{
                color: "white",
                marginRight: "1rem",
                fontWeight: "bolder",
              }}
            >
              Support
            </Button>
          </BootstrapTooltip>

          <BootstrapTooltip title="Go to Login">
            <Button
              style={{
                color: "black",
                background: "white",
                fontWeight: "bolder",
                border: "1px solid #2E8BC0",
              }}
            >
              LOGOUT
            </Button>
          </BootstrapTooltip>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Header;
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Toolbar from "@mui/material/Toolbar";
import { useNavigate } from "react-router-dom";
import Tooltip from "@mui/material/Tooltip";

import PersonIcon from "@mui/icons-material/Person";

function Header() {
  let navigate = useNavigate();
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

          <Tooltip title="Go to Profile Page" arrow>
            <PersonIcon className="profile"></PersonIcon>
          </Tooltip>

          <Tooltip title="Order Status" arrow>
            <Button className="header" onClick={() => navigate("/orderstatus")}>
              Orders
            </Button>
          </Tooltip>

          <Tooltip title="Technical Support" arrow>
            <Button className="header">Support</Button>
          </Tooltip>

          <Tooltip title="Go to Login Page" arrow>
            <Button className="header">LOGOUT</Button>
          </Tooltip>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Header;

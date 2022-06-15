import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Toolbar from "@mui/material/Toolbar";
import { useNavigate } from "react-router-dom";
import Tooltip from "@mui/material/Tooltip";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import PersonIcon from "@mui/icons-material/Person";

function Header() {
  /** https://mui.com/material-ui/react-menu/ To be cited.*/
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
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
            <PersonIcon className="profile"  onClick={() => {
                    navigate("/profile");
                  }}></PersonIcon>
          </Tooltip>

          <Tooltip title="Portfolio" arrow>
            <>
              <Button
                className="header"
                aria-controls={open ? "basic-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
                onClick={handleClick}
              >
                Orders
              </Button>
              <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                  "aria-labelledby": "basic-button",
                }}
              >
                <MenuItem onClick={handleClose}>Positions</MenuItem>
                <MenuItem onClick={handleClose}>Holdings</MenuItem>
                <MenuItem
                  onClick={() => {
                    navigate("/orderstatus");
                  }}
                >
                  Orders
                </MenuItem>
              </Menu>
            </>
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

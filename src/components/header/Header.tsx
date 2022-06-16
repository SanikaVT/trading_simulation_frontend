import * as React from "react";
import AppBar from "@mui/material/AppBar";
import { useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Toolbar from "@mui/material/Toolbar";
import { useNavigate } from "react-router-dom";
import Tooltip from "@mui/material/Tooltip";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import PersonIcon from "@mui/icons-material/Person";
import SimpleForm from "../chatbot/SimpleForm";



function Header() {
  /** https://mui.com/material-ui/react-menu/ To be cited.*/
  const [openChatModal, setOpenChatModal] = useState(false);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const openChatBotModal = (event: any) => {
    setOpenChatModal(true);
  };
  let navigate = useNavigate();
  return (
    
    <>
    <SimpleForm
        openModal={openChatModal}
        setOpenModal={setOpenChatModal}
          />
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
                <MenuItem onClick={() => {
                  navigate("/Holdings");
                }}>Positions</MenuItem>
                <MenuItem onClick={() => {
                  navigate("/Holdings");
                }}>Holdings</MenuItem>
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
            <Button className="header" onClick={openChatBotModal}>Support</Button>
          </Tooltip>

          {/* <BootstrapTooltip title="Go to Login">
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
          <BootstrapTooltip title="Go to stock league">
            <Button
              onClick = {() => navigate('/stockLeague')}
              style={{
                color: "black",
                background: "white",
                fontWeight: "bolder",
                border: "1px solid #2E8BC0"
              }
            }
            >
              stock league
              
            </Button>
          </BootstrapTooltip>
          <BootstrapTooltip title="Go to appointment">
            <Button
              onClick={() => navigate('/advisors')}
              style={{
                color: "black",
                background: "white",
                fontWeight: "bolder",
                border: "1px solid #2E8BC0"
              }
              }
            >
             Appointment

            </Button>
          </BootstrapTooltip> */}
        </Toolbar>
      </AppBar>
    </Box>
    </>
  );
}

export default Header;

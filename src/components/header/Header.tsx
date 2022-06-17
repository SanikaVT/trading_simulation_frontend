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
  const [anchorEl2, setAnchorEl2] = React.useState<null | HTMLElement>(null);

  const open = Boolean(anchorEl);
  const [
    anchorProfileEl,
    setAnchorProfileEl,
  ] = React.useState<null | HTMLElement>(null);
  const openProfile = Boolean(anchorProfileEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const open2 = Boolean(anchorEl2);
  const handleClick2 = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl2(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleClose2 = () => {
    setAnchorEl2(null);
  };
  const openChatBotModal = (event: any) => {
    setOpenChatModal(true);
  };
  let navigate = useNavigate();
  return (
    <>
      <SimpleForm openModal={openChatModal} setOpenModal={setOpenChatModal} />
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

          <Tooltip title="Menu" arrow>
            <>
              <Button
                  className="header"
                  aria-controls={open2 ? "basic-menu1" : undefined}
                  aria-haspopup="true"
                  aria-expanded={open2 ? "true" : undefined}
                  onClick={handleClick2}
              >
                Menu
              </Button>
              <Menu
                  id="basic-menu1"
                  anchorEl={anchorEl2}
                  open={open2}
                  onClose={handleClose2}
                  MenuListProps={{
                    "aria-labelledby": "basic-button",
                  }}
              >
                <MenuItem onClick={() => {
                  navigate("/News");
                }}>News</MenuItem>
                <MenuItem onClick={() => {
                  navigate("/blog");
                }}>Blogs</MenuItem>
                <MenuItem
                    onClick={() => {
                      navigate("/league");
                    }}
                >
                  League
                </MenuItem>

                <MenuItem onClick={() => {
                  navigate("/News");
                }}>News</MenuItem>
                <MenuItem onClick={() => {
                  navigate("/appointment");
                }}>Appointment</MenuItem>
              </Menu>
            </>
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
                  navigate("/Positions");
                }}>Positions</MenuItem>
                <MenuItem onClick={() => {
                  navigate("/Holdings");
                }}>Holdings</MenuItem>
                <MenuItem
                  onClick={() => {
                    navigate("/orderstatus");
                  }}
                > Orders
                </MenuItem>
              </Menu>
            </>
          </Tooltip>

            <Tooltip title="Technical Support" arrow>
              <Button className="header" onClick={openChatBotModal}>Support</Button>
            </Tooltip>



            <Tooltip title="Go to Profile Page" arrow>
            <PersonIcon className="profile"  onClick={() => {
              navigate("/profile");
            }}></PersonIcon>
          </Tooltip>
        </Toolbar>
      </AppBar>
    </Box>
    </>
  );
}

export default Header;

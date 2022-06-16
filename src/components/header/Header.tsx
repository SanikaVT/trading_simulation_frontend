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
  const handleProfileClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorProfileEl(event.currentTarget);
  };
  const handleProfileClose = () => {
    setAnchorProfileEl(null);
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

            <Tooltip title="Profile" arrow>
              <>
                <Button
                  className="header"
                  aria-controls={open ? "basic-menu" : undefined}
                  aria-haspopup="true"
                  aria-expanded={open ? "true" : undefined}
                  onClick={handleProfileClick}
                >
                  <PersonIcon className="profile"></PersonIcon>
                </Button>
                <Menu
                  id="basic-menu"
                  anchorEl={anchorProfileEl}
                  open={openProfile}
                  onClose={handleProfileClose}
                  MenuListProps={{
                    "aria-labelledby": "basic-button",
                  }}
                >
                  <MenuItem
                    onClick={() => {
                      navigate("/profile");
                    }}
                  >
                    Profile
                  </MenuItem>
                  <MenuItem
                    onClick={() => {
                      navigate("/login");
                    }}
                  >
                    Log out
                  </MenuItem>
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
                  <MenuItem
                    onClick={() => {
                      navigate("/Holdings");
                    }}
                  >
                    Holdings
                  </MenuItem>
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
            <Tooltip title="Advisor" arrow>
              <>
                <Button
                  className="header"
                  aria-controls={open ? "basic-menu" : undefined}
                  aria-haspopup="true"
                  aria-expanded={open ? "true" : undefined}
                  onClick={() => { navigate("/advisors"); }}
                >
                 Advisor
                 </Button>     
              </>
            </Tooltip>
            <Tooltip title="StockLeague" arrow>
              <>
                <Button
                  className="header"
                  aria-controls={open ? "basic-menu" : undefined}
                  aria-haspopup="true"
                  aria-expanded={open ? "true" : undefined}
                  onClick={() => { navigate("/stockLeague"); }}
                >
                  StockLeague
                </Button>
              </>
            </Tooltip>

            <Tooltip title="Technical Support" arrow>
              <Button className="header" onClick={openChatBotModal}>
                Support
              </Button>
            </Tooltip>
            
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
}

export default Header;

//@author:qiwei sun
// The UI components modified from Material UI
import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemText from "@mui/material/ListItemText";
import Avatar from "@mui/material/Avatar";
import { Grid } from "@mui/material";
import GroupIcon from "@mui/icons-material/Group";
import Button from "@mui/material/Button";


function generate(element: any) {
  return [0, 1, 2, 4, 5, 6, 7, 8, 9, 10].map((value) =>
    React.cloneElement(element, {
      key: value,
    })
  );
}

const Demo = styled("div")(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
}));
const handleClick = ()=>{
  alert("Application sended!")
}

export default function InteractiveList() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={12}>
          <Demo>
            
            <List>
              {generate(
                <ListItem
                  secondaryAction={<Button variant="outlined" onClick={handleClick}>Join</Button>}
                >
                  <ListItemAvatar>
                    <Avatar>
                      <GroupIcon />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText primary="A stock league " />
                </ListItem>
              )}
            </List>
          </Demo>
        </Grid>
      </Grid>
    </Box>
  );
}

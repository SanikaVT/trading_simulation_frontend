import Paper from "@mui/material/Paper";
import React from "react";
import Grid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Fab from "@mui/material/Fab";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import SendRoundedIcon from "@mui/icons-material/SendRounded";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { Button } from "@mui/material";
import PieChartComponent from "./PieChartComp";
import { ToastContainer, toast, Bounce } from "react-toastify";

//Code Reference: https://codesandbox.io/s/kqv1w?file=/src/ChartFirst.tsx:269-273
function ForumComp() {
  const [open, setOpen] = React.useState(false);

  const notify = () => {
    toast(` Comment posted successfully!`, {
      transition: Bounce,
    });
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const [openDelete, setOpenDelete] = React.useState(false);

  const handleClickOpenDelete = () => {
    setOpenDelete(true);
  };

  const handleCloseDelete = () => {
    setOpenDelete(false);
  };
  return (
    <>
      <Grid container>
        <Grid item md={12} xs={12}>
          <Typography variant="h5" className="header-message">
            Forum
          </Typography>
        </Grid>
      </Grid>
      <Grid container component={Paper} style={chatSection}>
        <Grid item md={3} xs={12} style={borderRight500} padding={4}>
          <PieChartComponent />
        </Grid>
        <Grid item md={9} xs={12}>
          <List>
            <ListItem key="1">
              <Grid container>
                <Grid item md={12} xs={12} marginBottom={3}>
                  <ListItemText>
                    <b>Comments</b>
                  </ListItemText>
                </Grid>
                <Grid item md={10} xs={12}>
                  <ListItemText primary="I bought this stock a year ago! "></ListItemText>
                </Grid>
                <Grid item md={1} xs={12}>
                  <DeleteIcon onClick={handleClickOpenDelete} />
                </Grid>
                <Grid item md={1} xs={12}>
                  <EditIcon onClick={handleClickOpen} />
                </Grid>
                <Grid item md={12} xs={12}>
                  <ListItemText secondary="09:30"></ListItemText>
                </Grid>
              </Grid>
            </ListItem>
            <ListItem key="2">
              <Grid container>
                <Grid item md={10} xs={12}>
                  <ListItemText primary="Hey! I am not sure if I should invest here."></ListItemText>
                </Grid>
                <Grid item md={1} xs={12}>
                  <DeleteIcon onClick={handleClickOpenDelete} />
                </Grid>
                <Grid item md={1} xs={12}>
                  <EditIcon onClick={handleClickOpen} />
                </Grid>
                <Grid item md={12} xs={12}>
                  <ListItemText secondary="09:31"></ListItemText>
                </Grid>
              </Grid>
            </ListItem>
            {/* <ListItem key="3">
                        <Grid container>
                            <Grid item md={10} xs={12}>
                                <ListItemText primary="Don't worry! I will help you"></ListItemText>
                            </Grid>
                            <Grid item md={1} xs={12}>
                                <DeleteIcon onClick={handleClickOpenDelete}/>
                            </Grid>
                            <Grid item md={1} xs={12}>
                                <EditIcon onClick={handleClickOpen}/>
                            </Grid>
                            <Grid item md={12} xs={12}>
                                <ListItemText secondary="10:30"></ListItemText>
                            </Grid>
                        </Grid>
                    </ListItem> */}
          </List>
          <Divider />
          <Grid container style={{ padding: "20px" }}>
            <Grid item md={10} xs={12}>
              <TextField
                id="outlined-basic-email"
                label="Write a comment"
                fullWidth
              />
            </Grid>
            <Grid md={1} xs={12} paddingLeft={3}>
              <Fab color="primary" aria-label="add" onClick={notify}>
                <SendRoundedIcon />
              </Fab>
              <ToastContainer
                className="toast"
                autoClose={1000}
                position="bottom-right"
                toastStyle={{
                  color: "black",
                  fontWeight: "bolder",
                }}
              />
            </Grid>
          </Grid>
        </Grid>
        <Dialog
          fullWidth={true}
          maxWidth={"lg"}
          open={open}
          onClose={handleClose}
        >
          <DialogTitle>Edit Comment</DialogTitle>
          <DialogContent>
            <TextField
              autoFocus
              margin="dense"
              id="name"
              type="text"
              fullWidth
              variant="standard"
              defaultValue="I bought this stock a year ago!"
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Save</Button>
          </DialogActions>
        </Dialog>

        <Dialog fullWidth={true} open={openDelete} onClose={handleCloseDelete}>
          <DialogTitle>Confirm Delete?</DialogTitle>
          <DialogActions>
            <Button onClick={handleCloseDelete}>Delete</Button>
          </DialogActions>
        </Dialog>
      </Grid>
    </>
  );
}

const chatSection = {
  width: "100%",
  height: "100%",
};

const borderRight500 = {
  borderRight: "1px solid #e0e0e0",
};

export default ForumComp;

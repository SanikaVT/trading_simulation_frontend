import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import * as React from "react";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import DialogTitle from "@mui/material/DialogTitle";
import DialogActions from "@mui/material/DialogActions";
import Dialog from "@mui/material/Dialog";
import axios from "axios";
export default function CommentCard(props: any) {
  const [open, setOpen] = React.useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  const form_data = {
    commentID: props.commentID,
  };
  const gotpage = () => {
    axios
      .post("/api/comments/delete", form_data)
      .then((response) => {
        // window.location.href = "/blog";
        setOpen(false);
        window.location.reload();
      })
      .catch(function(error) {
        alert("Can not delete Comment!");
        console.log(error);
      });
  };

  const confirmdelete = () => {
    setOpen(true);
  };
  const card_border = {
    backgroundColor: "white",
    // borderRadius: "10px",
    borderWidth: 1,
    paddingBottom: 2,
    // alignLeft:20,
  };
  var buttonDisabled = true;
  if (props.userID === localStorage.getItem("userID")) {
    buttonDisabled = false;
  }
  return (
    <Card style={card_border} sx={{ pl: 1, pb: 1, mb: 1 }}>
      <Grid container>
        <Grid item xs={9} md={9}>
          <Typography variant="body1">{props.first_name}</Typography>
          <Typography color="text.secondary" variant="body2">
            {props.comment}
          </Typography>
        </Grid>

        <Grid item xs={3} md={3}>
          <Button disabled={buttonDisabled} onClick={confirmdelete}>
            Delete
          </Button>
        </Grid>
      </Grid>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Are you sure you want to delete this Comment?"}
        </DialogTitle>

        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={gotpage} autoFocus>
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    </Card>
  );
}

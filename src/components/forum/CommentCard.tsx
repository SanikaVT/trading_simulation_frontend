import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import {
  Button,
  CardActionArea,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Grid,
  TextField,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import axios from "axios";

function CommentCard(props: any) {
  document.body.style.overflow = "scroll";
  const [open, setOpen] = React.useState(false);
  const [comment, setComment] = React.useState("");
  const [commentID, setCommentID] = React.useState(props.commentID);
  const [analyticsID, setAnalyticsID] = React.useState(props.analyticsID);
  const [loading, setLoading] = React.useState({});

  const handleClickOpen = () => {
    setCommentID(props.commentID);
    setAnalyticsID(props.analyticsID);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const [openDelete, setOpenDelete] = React.useState(false);

  const handleClickOpenDelete = () => {
    setCommentID(props.commentID);
    setAnalyticsID(props.analyticsID);
    setOpenDelete(true);
  };

  const handleCloseDelete = () => {
    deleteComment();
    setOpenDelete(false);
  };

  function updateComment() {
    if (comment.trim() !== "") {
      axios
        .put(`http://localhost:3100/api/forum`, {
          analyticsID: analyticsID,
          commentID: commentID,
          comment: comment,
        })
        .then((res) => {
          console.log(res.data);
          setOpen(false);
          props.rerender(res.data);
        });
    } else {
      setOpen(false);
    }
  }
  function deleteComment() {
    axios
      .put(`http://localhost:3100/api/forum/delete`, {
        analyticsID: analyticsID,
        commentID: commentID,
      })
      .then((res) => {
        console.log(analyticsID);
        console.log(commentID);
        console.log(res.data);
        setOpenDelete(false);
        props.rerender(res.data);
        // window.location.reload();
      });
  }
  return (
    <>
      <Card
        style={{
          // border: "1px solid transparent",
          padding: "5spx",
        }}
      >
        <CardActionArea>
          <CardContent>
            <Grid container>
              <Grid item md={10} xs={12}>
                <Typography>{props.comment}</Typography>
              </Grid>
              <Grid item md={1} xs={12}>
                <DeleteIcon onClick={handleClickOpenDelete} />
              </Grid>
              <Grid item md={1} xs={12}>
                <EditIcon onClick={handleClickOpen} />
              </Grid>
              <Grid item md={12} xs={12}>
                <Typography>{props.creation_date}</Typography>
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
                  defaultValue={props.comment}
                  onChange={(event) => setComment(event.target.value)}
                />
              </DialogContent>
              <DialogActions>
                <Button onClick={updateComment}>Save</Button>
              </DialogActions>
            </Dialog>

            <Dialog
              fullWidth={true}
              open={openDelete}
              onClose={handleCloseDelete}
            >
              <DialogTitle>Confirm Delete?</DialogTitle>
              <DialogActions>
                <Button onClick={deleteComment}>Delete</Button>
              </DialogActions>
            </Dialog>
          </CardContent>
        </CardActionArea>
      </Card>
    </>
  );
}

export default CommentCard;

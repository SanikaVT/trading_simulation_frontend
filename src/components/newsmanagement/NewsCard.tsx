/**

 * Author: Prakrut Suthar

 * BannerID: B00885349

 * Email:prakrut@dal.ca

*/

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

function NewsCard(props: any) {
  document.body.style.overflow = "scroll";
  const [open, setOpen] = React.useState(false);
  const [news_topic, setNewsTopic] = React.useState("");
  const [news_content, setNewsContent] = React.useState("");
  const [newsID, setNewsID] = React.useState(props.newsID);
  const [userID, setUserID] = React.useState(props.userID);
  const [loading, setLoading] = React.useState({});

  var buttonDisabled = true;

  if (props.userID === localStorage.getItem("userID")) {
    buttonDisabled = false;
  }

  const handleClickOpen = () => {
    setNewsTopic(props.news_topic);
    setNewsContent(props.news_content);
    setNewsID(props.newsID);
    setUserID(props.userID);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const [openDelete, setOpenDelete] = React.useState(false);

  const handleClickOpenDelete = () => {
    setNewsTopic(props.newsTopic);
    setNewsContent(props.newsContent);
    setNewsID(props.newsID);
    setUserID(props.userID);
    setOpenDelete(true);
  };

  const handleCloseDelete = () => {
    deleteNews();
    setOpenDelete(false);
  };

  function updateNews() {
    if (news_topic.trim() !== "") {
      axios
        .put(`/api/news`, {
          userID: userID,
          newsID: newsID,
          news_topic: news_topic,
          news_content: news_content,
        })
        .then((res) => {
          setOpen(false);
          props.rerender(res.data);
        });
    } else {
      setOpen(false);
    }
  }
  function deleteNews() {
    axios
      .put(`/api/news/delete`, {
        userID: userID,
        newsID: newsID,
      })
      .then((res) => {
        setOpenDelete(false);
        props.rerender(res.data);
      });
  }
  return (
    <>
      <Card
        style={{
          padding: "5spx",
        }}
      >
        <CardActionArea>
          <CardContent>
            <Grid container>
              <Grid item md={10} xs={12}>
                <Typography>
                  <b>{props.news_topic}</b>
                </Typography>
              </Grid>
              <Grid item md={10} xs={12}>
                <Typography>{props.news_content}</Typography>
              </Grid>
              <Grid item md={1} xs={12}>
                <Button
                  disabled={buttonDisabled}
                  onClick={handleClickOpenDelete}
                  startIcon={<DeleteIcon></DeleteIcon>}
                >
                  Delete
                </Button>
              </Grid>
              <Grid item md={1} xs={12}>
                <Button
                  disabled={buttonDisabled}
                  onClick={handleClickOpen}
                  startIcon={<EditIcon></EditIcon>}
                >
                  Edit
                </Button>
              </Grid>

              <Grid item md={12} xs={12}>
                <Typography>{props.creation_date}</Typography>
              </Grid>
            </Grid>

            <Dialog
              fullWidth={true}
              maxWidth={"sm"}
              open={open}
              onClose={handleClose}
            >
              <DialogTitle>Edit News</DialogTitle>
              <DialogContent>
                <Typography>News Topic</Typography>
                <TextField
                  autoFocus
                  margin="dense"
                  id="name"
                  type="text"
                  fullWidth
                  variant="standard"
                  defaultValue={props.news_topic}
                  onChange={(event) => setNewsTopic(event.target.value)}
                />
                <Typography>News</Typography>
                <TextField
                  autoFocus
                  margin="dense"
                  id="name"
                  type="text"
                  fullWidth
                  variant="standard"
                  defaultValue={props.news_content}
                  onChange={(event) => setNewsContent(event.target.value)}
                />
              </DialogContent>
              <DialogActions>
                <Button onClick={updateNews}>Save</Button>
              </DialogActions>
            </Dialog>

            <Dialog
              fullWidth={true}
              open={openDelete}
              onClose={handleCloseDelete}
            >
              <DialogTitle>Confirm Delete?</DialogTitle>
              <DialogActions>
                <Button onClick={deleteNews}>Delete</Button>
              </DialogActions>
            </Dialog>
          </CardContent>
        </CardActionArea>
      </Card>
    </>
  );
}

export default NewsCard;

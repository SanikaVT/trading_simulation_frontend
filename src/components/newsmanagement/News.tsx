// Author: Prakrut Suthar

import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import NewsCard from "./NewsCard";
import { INews } from "../../types/INews";
import { useEffect, useState } from "react";
import axios from "axios";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material";

const initialNews: INews[] = [
  {
    userID: "1",
    newsID: "1",
    news_topic: "ABC Scam",
    news_content:
      "Understanding how disasters happened to investors in the past can help current investors avoid them in the future. Here are some of the all-time most significant cases of companies betraying their investors. Some of these cases are truly amazing. Try to look at them from a shareholder's perspective. Unfortunately, the shareholders involved had no way of knowing what was really happening as they were being tricked into investing.",
  },
];
//Code Reference: https://codesandbox.io/s/kqv1w?file=/src/ChartFirst.tsx:269-273
function NewsComp() {
  const [newsData, setNewsData] = useState(initialNews);
  const [open, setOpen] = useState(false);
  const [news_topic, setNewsTopic] = useState("");
  const [news_content, setNewsContent] = useState("");
  const [loading, setLoading] = useState("");
  const user_ID = localStorage.getItem("userID");
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    axios
      .get(`/api/news/`, {
        responseType: "json",
      })
      .then(function(response) {
        setNewsData(response.data.news);
        // console.log(response.data.comments);
      });
  }, [loading]);

  function postNews() {
    setOpen(false);
    axios
      .post(`/api/news/`, {
        userID: user_ID,
        news_topic: news_topic,
        news_content: news_content,
      })
      .then((res) => {
        console.log(res.data);
        setLoading(Math.random().toString());
      });
  }

  return (
    <>
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
      >
        <Grid item md={12} xs={12}>
          <Typography
            variant="h6"
            alignItems="center"
            className="header-message"
          >
            News
          </Typography>
        </Grid>
      </Grid>
      <Grid item md={12} xs={12}>
        <Grid container sx={{ pt: 1, pb: 1 }}>
          <Box sx={{ flexGrow: 1 }}></Box>
          <Button
            sx={{ width: 300 }}
            variant="contained"
            onClick={handleClickOpen}
          >
            Post a news
          </Button>
        </Grid>
      </Grid>
      <Divider />

      <Grid container component={Paper} style={newsSection}>
        <Grid item md={12} xs={12}>
          <Grid item md={12} xs={12}>
            {newsData.map((myVariable) => {
              return (
                <NewsCard
                  news_topic={myVariable.news_topic}
                  news_content={myVariable.news_content}
                  newsID={myVariable.newsID}
                  userID={myVariable.userID}
                  rerender={setLoading}
                />
              );
            })}
          </Grid>

          <Dialog
            fullWidth={true}
            maxWidth={"sm"}
            open={open}
            onClose={handleClose}
          >
            <DialogTitle>Add News</DialogTitle>
            <DialogContent>
              <Typography>News Topic</Typography>
              <TextField
                autoFocus
                margin="dense"
                id="name"
                type="text"
                fullWidth
                variant="standard"
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
                onChange={(event) => setNewsContent(event.target.value)}
              />
            </DialogContent>
            <DialogActions>
              <Button onClick={postNews}>Post</Button>
            </DialogActions>
          </Dialog>
        </Grid>
      </Grid>
    </>
  );
}

const newsSection = {
  width: "100%",
  height: "100%",
};

export default NewsComp;

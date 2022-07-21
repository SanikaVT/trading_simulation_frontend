// @author Dharmay Dineshchandra Sureja
// Banner id (B00904061)
// email : dh276903@dal.ca
// This component is responsible to show blog dashboard on blogs page
import * as React from "react";
import BlogCard from "./BlogCard";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import AddIcon from "@mui/icons-material/Create";
import Button from "@mui/material/Button";
import { useEffect, useState } from "react";
import axios from "axios";
import { Zoom } from "@mui/material";
import Card from "@mui/material/Card";
import Container from "@mui/material/Container";
export default function Blog() {
  const initialBlogs = [
    {
      title: "Title",
      description: "Short Description",
      content: "The brief content",
      blogsID: "1",
      userID: "11",
    },
  ];

  const [blogsData, setBlogsData] = useState(initialBlogs);

  useEffect(() => {
    axios
      .get(`/api/blogs/`, {
        responseType: "json",
      })
      .then(function(response) {
        setBlogsData(response.data.blogs);
      });
  }, []);

  function write() {
    window.location.href = "/writeblog";
  }

  const buttonprop = {
    top: 5,
    bgcolor: "#2E8BC0",
    float: "right",
    borderRadius: "15px",
  };

  // @ts-ignore
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Button
        variant="contained"
        endIcon={<AddIcon />}
        sx={buttonprop}
        onClick={write}
      >
        {" "}
        Write blog
      </Button>
      <Container component="main" maxWidth="lg">
        <Card
          variant="outlined"
          style={{
            border: "none",
            boxShadow: "none",
            margin: "10px",
            padding: "10px",
          }}
        >
          <Box
            sx={{
              marginTop: 4,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Grid container spacing={2}>
              {blogsData?.map(
                (blog: {
                  title: any;
                  description: any;
                  content: any;
                  blogsID: any;
                  userID: any;
                }) => {
                  return (
                    <BlogCard
                      key={Math.random()}
                      title={blog.title}
                      description={blog.description}
                      content={blog.content}
                      blogsID={blog.blogsID}
                      userID={blog.userID}
                    />
                  );
                }
              )}
            </Grid>
          </Box>
        </Card>
      </Container>
    </Box>
  );
}

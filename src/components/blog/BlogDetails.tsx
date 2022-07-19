import Snackbar from '@mui/material/Snackbar';
import Typography from "@mui/material/Typography";
import * as React from "react";

import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Card from "@mui/material/Card";
import Button from '@mui/material/Button';
import FavoriteIcon from '@mui/icons-material/Favorite';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Divider from '@mui/material/Divider';
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogActions from "@mui/material/DialogActions";
import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import axios from "axios";
import CommentCard from "./CommentCard";

export default function BlogDetails() {
    const { id } = useParams();

    const form_data = {
        blogsID:id
    };
    const userID1 = localStorage.getItem("userID");
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [content, setContent] = useState("");
    const [blogsID, setBlogsID] = useState();
    const [userID, setuserID] = useState();
    const [likes, setLikes] = useState();
    const [first_name, setFname] = useState();





    const initialComments = [
        {
            blogsID: "",
            comment: "",
            commentID: "",
            first_name: "",
            id: "",
            userID: ""
        },
    ];

    const [commentsData, setCommentsData] = useState(initialComments);


    useEffect(() => {
        axios
            .post("/api/blogs/details", form_data)
            .then((response) => {

                setTitle(response.data.blogs.title)
                setDescription(response.data.blogs.description)
                setContent(response.data.blogs.content)
                setBlogsID(response.data.blogs.blogsID)
                setuserID(response.data.blogs.userID)
                setLikes(response.data.blogs.likes)

            })
            .catch(function(error) {
                alert("Can not get blog!");
                console.log(error);
                console.log("Exception occured");
            });

        axios
            .get(`/api/users`, {
                responseType: "json",
                params: { userID: userID1 },
            })
            .then(function (response) {
                setFname(response.data.prof.first_name);
            });


        axios
            .post("/api/comments", form_data)
            .then((response) => {

           setCommentsData(response.data.comments);

            })
            .catch(function(error) {
                alert("Can not get blog!");
                console.log(error);
                console.log("Exception occured");
            });


    }, []);
console.log("ccomments data ",commentsData);
    var buttonDisabled = true;
    if (userID === localStorage.getItem("userID")) {
        buttonDisabled = false;

    }
    const [likeOpen, setlikeOpen] = React.useState(false);

    const [open, setOpen] = React.useState(false);
    const handleClose = () => {
        setOpen(false);
    };

    const confirmdelete = () => {
        setOpen(true);
    }
    const card_border = {
        backgroundColor: "white",
        // borderRadius: "10px",
        borderWidth: 1,
        paddingBottom: 2,
        // alignLeft:20,
    };

    const editblog = () => {

        window.location.href = `/editblog/${id}`;
    }
    const gotpage = () => {

        axios
            .post("/api/blogs/delete", form_data)
            .then((response) => {
                window.location.href = "/blog";
            })
            .catch(function(error) {
                alert("Can not delete blog!");
                console.log(error);
                console.log("Exception occured");
            });


    }
    const initialValues = {
       comment:""
    };
    const [formValue, setFormValue] = useState(initialValues);

    const handleChange = (e: { target: { name: any; value: any } }) => {
        const { name, value } = e.target;
        setFormValue({ ...formValue, [name]: value });
    };
    const addComment = () =>{

        const comment_data ={
            blogsID:id,
            userID:localStorage.getItem("userID"),
            comment:formValue.comment,
            first_name: first_name

        }

        axios
            .put("/api/comments", comment_data)
            .then((response) => {

            })
            .catch(function(error) {
                alert("Can not add comment!");
                console.log(error);
                console.log("Exception occured");
            });
    }

    const likeblog = () => {
        axios
            .post("/api/blogs/like", form_data)
            .then((response) => {
                setlikeOpen(true);
                window.location.reload();

            })
            .catch(function(error) {
                alert("Can not like blog!");
                console.log(error);
                console.log("Exception occured");
            });
        // setlikeOpen(true);
    }
    const likeblogclose = (event: React.SyntheticEvent | Event, reason?: string) => {
        if (reason === 'clickaway') {
            return;
        }

        setlikeOpen(false);
    };

    const action = (
        <React.Fragment>

            <IconButton
                size="small"
                aria-label="close"
                color="inherit"
                onClick={likeblogclose}
            >
                <CloseIcon fontSize="small"/>
            </IconButton>
        </React.Fragment>
    );

    return (
        <Grid container spacing={2}>
            <Grid item xs={12} md={8}><Button onClick={editblog} disabled={buttonDisabled}>Edit Blog</Button>
                <Button onClick={confirmdelete} disabled={buttonDisabled}>Delete Blog</Button>
            </Grid>
            <Grid item xs={12} md={8}>

                <Card style={card_border} sx={{pl: 3, pb: 1, mb: 1}}>
                    <Grid container
                          spacing={0}
                          direction="column"
                          alignItems="center"
                          justifyContent="center"
                          maxWidth={"md"}
                    >
                        <Grid item xs={12}>
                            <Typography variant="h3">
                                {title}
                            </Typography>
                        </Grid>

                        <Grid item sm={12}>
                            <Typography variant="subtitle1" gutterBottom>
                                 {content}
                            </Typography></Grid>
                    </Grid></Card>
                <Grid item sm={12}>
                    <Typography variant={"h6"}> Total Likes: {likes}</Typography>
                </Grid>
            </Grid>

            <Grid item xs={12} md={4}>
                Like Blog
                <IconButton aria-label="like" onClick={likeblog} color="error">
                    <FavoriteIcon/>
                </IconButton>
                <Snackbar
                    open={likeOpen}
                    autoHideDuration={2000}
                    message="Blog Liked"
                    onClose={likeblogclose}
                    action={action}

                />
                <form onSubmit={addComment}>
                    <TextField
                        fullWidth
                        label="Write Comment"
                        name={"comment"}
                        multiline
                        onChange={handleChange}
                        value={formValue.comment}
                        required
                        sx={{marginTop: 1, marginBottom: 2}}
                    />
                    <Button
                        type="submit"
                        variant="contained"
                        sx={{marginBottom: 2, bgcolor: "#2E8BC0"}}
                    >
                        Submit
                    </Button>
                </form>
                <Divider variant="middle"/>
                <Typography variant="h5" component="div">
                    Comments
                </Typography>
                {commentsData?.map((comments2: { userID: any; commentID: any; comment: any; first_name: any; }) => {
                    return (
                        <CommentCard
                            userID = {comments2.userID}
                            commentID = {comments2.commentID}
                            comment = {comments2.comment}
                            first_name = {comments2.first_name}
                            // rerender={setLoading}
                        />
                    );
                })}
            </Grid>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">
                    {"Are you sure you want to delete this blog?"}
                </DialogTitle>

                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button onClick={gotpage} autoFocus>
                        Delete
                    </Button>
                </DialogActions>
            </Dialog>
        </Grid>

    );

}
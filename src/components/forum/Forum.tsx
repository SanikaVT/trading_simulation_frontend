import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Fab from "@mui/material/Fab";
import SendRoundedIcon from "@mui/icons-material/SendRounded";
import PieChartComponent from "./PieChartComp";
import { ToastContainer, toast, Bounce } from "react-toastify";
import CommentCard from "./CommentCard";
import { IComment } from "../../types/IComment";
import { useEffect, useState } from "react";
import axios from "axios";

const initialCommentsList: IComment[] = [
  {
    symbol: "ABA",
    commentID: "2",
    comment: "Hello",
    creation_date: "01-03-2022",
  },
  {
    symbol: "ABA",
    commentID: "2",
    comment: "Hi",
    creation_date: "01-03-2022",
  },
];
//Code Reference: https://codesandbox.io/s/kqv1w?file=/src/ChartFirst.tsx:269-273
function ForumComp() {
  const [commentData, setCommentData] = useState(initialCommentsList);
  const [commentSet, setComment] = useState("");
  const [loading, setLoading] = useState("");
  const [chartData, setChartData] = useState({
    labels: ["Bought", "Sold"],
    datasets: [
      {
        data: [0, 0],
        backgroundColor: ["#4CAF50", "#f55723"],
      },
    ],
  });
  const [ordersData, setOrdersData] = useState([{ symbol: "", orderType: "" }]);
  var buyCount = 10;
  var sellCount = 10;

  useEffect(() => {
    axios
      .get(`http://localhost:3100/api/forum/`, {
        responseType: "json",
        params: { symbol: "ABA" },
      })
      .then(function(response) {
        setCommentData(response.data.comments);
        console.log(response.data.comments);
      });
    axios
      .get(`http://localhost:3100/api/order/`, {
        responseType: "json",
        params: { symbol: "ABA" },
      })
      .then(function(response) {
        setOrdersData(response.data.orders);
        console.log(response.data.orders);
        calculateChartResult();
      });
  }, [loading]);

  function calculateChartResult() {
    for (var i = 0; i < ordersData.length; i++) {
      let obj = ordersData[i];
      if (obj.symbol === "ABA") {
        if (obj.orderType === "Buy") {
          buyCount += 1;
        } else {
          sellCount += 1;
        }
      }
    }
    setChartData({
      labels: ["Bought", "Sold"],
      datasets: [
        {
          data: [buyCount, sellCount],
          backgroundColor: ["#4CAF50", "#f55723"],
        },
      ],
    });
  }
  function postComment() {
    axios
      .post(`http://localhost:3100/api/forum/`, {
        symbol: "ABA",
        comment: commentSet,
      })
      .then((res) => {
        // notify;
        setComment("");
        console.log(res.data);
        setLoading(Math.random().toString());
      });
  }
  function formatDate(date: any) {
    var d = new Date(date),
      month = "" + (d.getMonth() + 1),
      day = "" + d.getDate(),
      year = d.getFullYear();

    if (month.length < 2) month = "0" + month;
    if (day.length < 2) day = "0" + day;

    return [year, month, day].join("-");
  }

  const notify = () => {
    toast(` Comment posted successfully!`, {
      transition: Bounce,
    });
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
          <PieChartComponent chartData={chartData} />
        </Grid>
        <Grid item md={9} xs={12}>
          <Grid padding={2}>
            <b>Comments</b>
          </Grid>
          <Grid item md={10} xs={12}>
            {commentData.map((myVariable) => {
              return (
                <CommentCard
                  creation_date={formatDate(myVariable.creation_date)}
                  comment={myVariable.comment}
                  commentID={myVariable.commentID}
                  symbol={myVariable.symbol}
                  rerender={setLoading}
                />
              );
            })}
            {/* <CommentCard commentData={commentData}></CommentCard> */}
          </Grid>
          <Divider />
          <Grid container style={{ padding: "20px" }}>
            <Grid item md={10} xs={12}>
              <TextField
                id="text"
                label="Write a comment"
                fullWidth
                onChange={(event) => setComment(event.target.value)}
              />
            </Grid>
            <Grid md={1} xs={12} paddingLeft={3}>
              <Fab color="primary" aria-label="add" onClick={postComment}>
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

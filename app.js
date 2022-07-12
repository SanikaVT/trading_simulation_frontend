const express = require("express");
const mongoose = require("mongoose");

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const userRoute = require("./api/routes/userRoute");


const mongoUrl = "mongodb+srv://tut7admin:admin@tutorialseven.irnvjfz.mongodb.net/?retryWrites=true&w=majority"
mongoose.connect(mongoUrl, { useNewUrlParser: true })
    .then(() => {
        console.log("Connected to MongoDB.");
    })
    .catch((err) => {
        console.log("Error: " + err);
    });

app.use("/", userRoute);


module.exports = app;
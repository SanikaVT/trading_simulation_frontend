const express = require('express');
const mongoose = require('mongoose');
const users = require('../model/users');

const router = express.Router();

var userObj = require('../model/users');


router.get("/users", (req, res) => {

    userObj.find().exec().then(result => {

        try {
            if (!userObj || !userObj.length) {
                return res
                    .status(404)
                    .json({ success: "false", data: "users not found!!" });
            }

            return res.status(200).json({ success: "true", data: result });

        } catch (err) {

            return res.status(500).json({ message: "Internal server error!!" });
        }
    });
});



router.post("/add", (req, res) => {

    const email = req.body.email;
    const firstName = req.body.firstName;

    const newUser = new userObj({
        _id: new mongoose.Types.ObjectId(),
        email,
        firstName
    });

    newUser.save().then(result => {

        return res.status(200).json({ message: "user added", success: true });
    }).catch(err => {
        console.log(err);
        return res.status(500).json({ message: "Internal server error!!" });
    });
});



router.put('/update/:id', (req, res) => {


    userObj.findByIdAndUpdate({ _id: req.params.id }, req.body).then(function () {
        userObj.findOne({ _id: req.params.id }).then(function (result) {
            return res
                .status(200)
                .json({ success: "true", message: "user updated!!", data: result });
        });
    }).catch(err => {
        console.log(err);
        return res.status(500).json({ message: "Internal server error!!" });
    });
});


router.delete('/delete/:id', function (req, res) {

    userObj.findByIdAndRemove({ _id: req.params.id }).then(function (result) {
        return res
            .status(200)
            .json({ success: "true", data: "user deleted!!" });
    }).catch(err => {
        console.log(err);
        return res.status(500).json({ message: "Internal server error!!" });
    });
});


router.get("/user/:id", (req, res) => {

    userObj.findById({ _id: req.params.id }).exec().then(result => {

        try {
            if (!userObj || !userObj.length) {
                return res
                    .status(404)
                    .json({ success: "false", data: "user not found!!" });
            }

            return res.status(200).json({ success: "true", data: result });

        } catch (err) {

            return res.status(500).json({ message: "Internal server error!!" });
        }
    });
});





module.exports = router;
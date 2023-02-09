const express = require("express");
const userRouter = express.Router();
const axios = require("axios");
const {userModel}  = require("../model/user.model");
userRouter.post("/addUsers", async (req, res)=>{
    try{
        const data = await axios.get("https://randomuser.me/api/?results=50")
         const users = data.data.results
         console.log("here is data")
        console.log(users)
        await userModel.insertMany({userData:users});
        res.send("data is added");
    }catch(err){
        console.log("something went wrong!")
    }
})

userRouter.get("/getData", async(req, res)=>{
    try{
        const getUser = await userModel.find();
        res.send(getUser);
    }catch(err){
        console.log("no data");
    }
})

userRouter.delete("/deleteUser", async(req, res)=>{
    try{
        await userModel.deleteMany();
        res.send("deleted");
    }catch(err){
        console.log("data is not deleted!")
    }
})
module.exports = { userRouter };

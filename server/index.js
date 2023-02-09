const express = require("express");
const cors = require("cors");
const { connection } = require("./config/db");
require("dotenv").config();
const app = express();
app.use(express.json());
app.use(cors())

const { userRouter } = require("./router/user.router");

app.use("/", userRouter);

app.listen(process.env.PORT, async ()=>{
    try{
        await connection;
        console.log("connection is successful!");
    }catch(err){
        console.log("connection is failed");
    }
    console.log(`server listen on port ${process.env.PORT}`);
})
require("dotenv").config();
const express = require("express");
const app = express();
const authRouter = require("./router/auth-router")
const connectDB = require("../server/utils/db")

app.use(express.json());
app.use("/api/auth",authRouter);

 
const PORT = 5000

connectDB().then(()=>{
    app.listen(PORT,(req,res)=>{
        console.log(`server is listening at port ${PORT}`)
    })
})


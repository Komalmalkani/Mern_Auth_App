require("dotenv").config();
const express = require("express");
const app = express();
const router = require("./router/auth-router")
const connectDB = require("../server/utils/db")
const errorMiddleware = require("../server/middlewares/error-middleware")

app.use(express.json());
app.use("/api/auth",router);
app.use(errorMiddleware);

const PORT = 3000

connectDB().then(()=>{
    app.listen(PORT,(req,res)=>{
        console.log(`server is listening at port ${PORT}`)
    })
})


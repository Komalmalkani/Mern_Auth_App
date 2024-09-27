require("dotenv").config();
const express = require("express");
const app = express();
const authRouter = require("./router/auth-router")
const contactRoute = require("./router/contact-router")
const connectDB = require("../server/utils/db")
const errorMiddleware = require("../server/middlewares/error-middleware")

app.use(express.json());
app.use("/api/auth",authRouter);
app.use("/api/form",contactRoute);
app.use(errorMiddleware);

const PORT = 5000

connectDB().then(()=>{
    app.listen(PORT,(req,res)=>{
        console.log(`server is listening at port ${PORT}`)
    })
})


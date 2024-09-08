const mongoose = require("mongoose");
// const URI = "mongodb://127.0.0.1:27017/mern_admin"
const URI = "mongodb+srv://malkanianita15:komal123@cluster0.y0dqi.mongodb.net/Mern_Auth_App?retryWrites=true&w=majority&appName=Cluster0"

const connectDB = async()=>{
try {
  await mongoose.connect(URI);
  console.log("DB is connected successfully");
} catch (error) {
  res.status(400).json({message:"DB connection failed"})
}
}

module.exports = connectDB
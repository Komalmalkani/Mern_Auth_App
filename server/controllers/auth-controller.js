// ****************_____CONTROLLERS________*****************
const User = require("../models/user-model");
const bcrypt = require("bcrypt")
//  * _________________
//       Home Logic
// * _________________


const home = async (req,res)=>{
    try {
        res
        .status(200)
        .send("Welcome to this new home page by controller")
    } catch (error) {
        console.log(error)
    }
}

//  * _________________
//      Registeration Logic
// * _________________

const register = async (req,res)=>{
    try {
       console.log(req.body)
        const {username,email,phone,password} = req.body

        const userExist = await User.findOne({email});

        if(userExist){
            return res.status(400).json({msg:"email already exist"});
        }
        // const saltRound = 10;
        // const hash_password = await bcrypt.hash(password,saltRound)
         const userCreated = await User.create({
            username,
            email,
            phone,
            password 
        })
        res
        .status(200).json({
            msg: "registeration successful",
           token: await userCreated.generateToken(),
            userId : userCreated._id.toString()

        });
    } catch (error) {
        res.status(500).json("internal server error");
    }
}

//  * _________________
//     Login Logic
// * _________________

const login = async (req,res)=>{
 try {
    const {email,password} = req.body;
    const userExist = await User.findOne({email})
    console.log(userExist)

    if(!userExist){
        return res.status(400).json({message:"Invalid Credentials"})
    }
         
    const user = await userExist.comparePassword(password)
    if(user){ 
        res.status(200).json({
            msg:"Login Successful",
            token:await userExist.generateToken(),
            userId: userExist._id.toString(),
        })
    }else{
        res.status(401).json({message:"Invalid email or password"})
    }

 } catch (error) {
    res.status(500).json("internal server error");
 }
}

module.exports = {home,register,login}
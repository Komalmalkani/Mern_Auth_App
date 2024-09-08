const {Schema , model} = require("mongoose");
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")

const userSchema = new Schema({
    username:{
        type:String,
        require:true,
    },
    email:{
        type:String,
        require:true
    },
    phone:{
        type:String,
        required:true,
    },
    password:{
        type:String,
        required:true,
    },
    isAdmin :{
        type:Boolean,
        default:false,
    }
})

// * ______________________________________________________________________*
//                 Secure the password with the bcrypt
//  *_______________________________________________________________________*


userSchema.pre("save",async function(next){
    // console.log("pre method", this)
   const user = this ;
if(!user.isModified("password")){
    next();
}
try{
    const hash_password = await bcrypt.hash(user.password,10);
    user.password = hash_password;
}catch(error){
    next(error);
}
});

userSchema.methods.comparePassword = async function (password) {
    return bcrypt.compare(password,this.password)
}

userSchema.methods.generateToken = async function(){
  try {
    return jwt.sign({
        userId: this._id.toString(),
        email:this.email,
        isAdmin:this.isAdmin,
    },
    process.env.JWT_STRING
    ,
    {
        "expiresIn":"30d"
    }
)
  } catch (error) {
    console.error(error);
  }
}


const User = new model("User",userSchema);
module.exports = User;
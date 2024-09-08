const express = require("express");
const router = express.Router();
const authController = require("../controllers/auth-controller");
const signupSchema = require("../validators/auth-validators");
const validate = require("../middlewares/validate-middlewares")

// ________________1st method___________
// router.get("/",(req,res)=>{
//     console.log("succesfull");
//     res
//     .status(200)
//     .send("This is new home page")
// });

// ________________2st method___________
router.route("/").get(authController.home);
router.route("/register").post(validate(signupSchema),authController.register);
router.route("/login").post(authController.login);

 module.exports = router
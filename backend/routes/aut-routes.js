let express = require('express');
let router=express.Router();
let auth_coutrollers=require("../controllers/auth-controllers");
router.route("/register").post(auth_coutrollers.Register)
router.route("/login").post(auth_coutrollers.Login)

module.exports=router
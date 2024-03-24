const express=require("express")
const router=express.Router();
const {registerUser, loginUser, logOut}=require("../controllers/userController");
const { protect } = require("../middleware/authMiddleware");


router.post("/register",registerUser);
router.post("/login",loginUser)
router.get("/logout",logOut)

module.exports=router;

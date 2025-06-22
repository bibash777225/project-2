import express,{Router} from "express";
import  AuthController  from "../../../controller/globals/auth/authController";

import asyncErrorHandle from "../../../../services/asyncErrorHandel";
const router:Router =express.Router()
router.route("/register").post(AuthController.registerUser)
router.route("/login").post( asyncErrorHandle(AuthController.loginUser) )
export default router

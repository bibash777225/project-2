
import express,{Router} from "express";
import InsituteController from "../../controller/institute/instituteController";
import Middleware from "../../middleware/middleware";
import asyncErrorHandle from "../../../services/asyncErrorHandel";

const router:Router =express.Router()


router.route("/").post(  asyncErrorHandle(Middleware.isLoggedIn) , asyncErrorHandle (Middleware.restrictTO),asyncErrorHandle(InsituteController.createInstitute))

export default router

import express,{Router} from "express";
import InsituteController from "../../controller/institute/instituteController";
import Middleware from "../../middleware/middleware";

const router:Router =express.Router()


router.route("/").post(Middleware.isLoggedIn,Middleware.restrictTO,InsituteController.createInstitute)

export default router
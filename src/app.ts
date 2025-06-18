 import express from 'express' //ecma script
 const app= express()


import authRoute from './route/gobals/auth/authRoute'
import instituteRoute from "./route/institute/instituteRoute"
app.use(express.json())
//alternative boday-parser
app.use("/api",authRoute)
app.use("/api/institute",instituteRoute)

// router.route("/register").post(AuthController.registerUser)




 export default app
 import express from 'express' //ecma script
 const app= express()


import authRoute from './route/gobals/auth/authRoute'

app.use(express.json())
//alternative boday-parser
app.use("/api",authRoute)

// router.route("/register").post(AuthController.registerUser)




 export default app
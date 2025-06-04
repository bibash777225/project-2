 import express from 'express' //ecma script
 const app= express()

import authRoute from "./route/gobals/auth/authRoute"
import router from './route/gobals/auth/authRoute'

app.use("/api",authRoute)




 export default app
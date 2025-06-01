import app from "./src/app";
import { config } from "dotenv";
config()

//databse connection import
//imoport garena vane connect hhudainah or file execute hudhainah
import"./database/connection"
function startServer(){
    const port =process.env.PORT
    app.listen(port,function(){

      console.log(`server has started at port ${port}`)

    })
}

startServer()
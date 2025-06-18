import { NextFunction, Request,Response } from "express"
import User from "../database/models/user.model"
import   jwt from "jsonwebtoken"
interface IExtendRequest extends Request{
    User?:{   
      email:string,
    role:string, 
    username:string |null
    }  
}


class Middleware{
    static  async isLoggedIn(req:IExtendRequest,res:Response,next:NextFunction){
     //CHECK IF LOGIN OR NOT 
  // token accpect,    ahiley chai auhtorization ko through token accpet garum hai tah 
 
  const token=req.headers.authorization   
  //jwt
 // eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiYWRtaW4iOnRydWUsImlhdCI6MTUxNjIzOTAyMn0.KMUFsIDTnFmyG3nMiGM6H9FNFUROf3wh7SmqJp-QV30
 console.log(token,"TOKEN")
 if(!token){
    res.status(401).json({
        message:"please provide token "
    })
    return
 }
  //verifyc garne
   jwt.verify(token,`this is secret `,async(err,resultaayo :any)=>{
if(err){
    res.status(403).json({
        message:"token is invalid vayou"
    })
}else{
    console.log(resultaayo,"result aayou ")
//    await User.findAll({
//         where:{
//             id:resultaayo:id
//         }
//     })
const UserData= await User.findByPk(resultaayo.id)
    if(!UserData){
        res.status(403).json({
            message:"no user with that id ,invalid token"
        })
    }
    else{
        console.log("succesfully verified")
        
        req.User=UserData

    }
}
  next()
   })                                   //(error ayou, result aayou)=>{}
   
    }

    static restrictTO(req:Request,res:Response){

    }
}
export default Middleware
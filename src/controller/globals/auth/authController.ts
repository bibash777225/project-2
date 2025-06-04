//logical code lekhaum hai tah 


/*
kasari project suru garny 

authentication garn kojdha k k feature hunxa pahila sochney
  
REGISTER
 first mah vaneko incomming data k k ayunah sakla tah   incoming data--> username,email,password        parllelly u data store garna table xa ki nai herney xienah vaney vanununey
 processing/checking--. email valid,compulsory data aauna paryou
 db-->table--> querry--. table ma insert /read/delete/update
LOGIN/SISNUP
LOGOUT
RESET PASSWORD/OTP
*/
// two apprpach xa funtional based mah orr op type
 import{Request,Response}from "express"
import User from "../../../database/models/user.model"
const registerUser = async(req:Request,res:Response)=>{
    // const username=req.body.username
    // const email=req.body.email
    // const password=req.body.password or simply destrucure
    const{username,password,email}=req.body
    // kunai miss hunu vayenah sabaii data ayunnu paryou
    if(!username|| !password|| !email){
     res.status(400).json({
        message:"please provide username, password,email"
     })
     return  // like else mathi ko vo baney yeha nai stop nabaye muni ko executed hunxa
    } 
  //inset into user table 
   await User.create({
    username:username,
    password:password,
    email:email,

  })
  res.status(200).json({
    message:" gareko  kura pura voo hjr ko"
  })

     
    

}//FUnction
export {registerUser}
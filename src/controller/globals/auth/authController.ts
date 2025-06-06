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
import bcrypt from"bcrypt"
// const registerUser = async(req:Request,res:Response)=>{
//     // const username=req.body.username
//     // const email=req.body.email
//     // const password=req.body.password or simply destrucure
//     const{username,password,email}=req.body
//     // kunai miss hunu vayenah sabaii data ayunnu paryou
//     if(!username|| !password|| !email){
//      res.status(400).json({
//         message:"please provide username, password,email"
//      })
//      return  // like else mathi ko vo baney yeha nai stop nabaye muni ko executed hunxa
//     } 
//   //inset into user table 
//    await User.create({
//     username:username,
//     password:password,
//     email:email,

//   })
//   res.status(200).json({
//     message:" gareko  kura pura voo hjr ko"
//   })

     
    

// }//FUnction
// export {registerUser}
/*
login flow 
email/username,password(basic)
email,password--data accept-->validation-->
//first check wmail exits or not (werify)--yes--checkpassword--now--not register
gogle login,fb,github,(auth)
email login (ssd)
*/
class AuthController{
    static async registerUser(req:Request,res:Response){
        if(req.body==undefined){
            console.log("tiggred")
            res.status(400).json({
                message:"no data sent !!"
            })
            return
        }
        const {username,password,email}=req.body
         if(!username|| !password|| !email){
     res.status(400).json({
        message:"please provide username, password,email"
     })
     return  // like else mathi ko vo baney yeha nai stop nabaye muni ko executed hunxa
    } 
      //insert into user table  
      await User.create({
    username:username,
    password: bcrypt.hashSync(password,8),
    email:email,

  })
  res.status(201).json({
    message:" gareko  kura pura voo hjr ko"
  })
    }
   async loginUser(req:Request,res:Response){
      const{email,password}=req.body
      if(!email|| !password){
        res.status(201).json({
          message:"please provide email,password "
        })
        return
      }
      //check if email exits or npt in our table 
      await User.findAll({
        where:{
          email:email
        }
      })
      //array return garxa always
      if(data.length==0){
        res.status(404).json({
          message:"not registered"
        })
      }else{
        //check password ,neoal123  -->hashconversion->
        //passeord hash form mah basya xa so 
        //comapre(plain password user bata akoo password,hasg password register hudha )
       const isPassswordMatch= bcrypt.compareSync(password, data[0].password) 
 if(isPassswordMatch){
  //login vayou token generation
  
 }else{
  res.status(401).json({
    message:"Invalid email or password"
  })
 }
      }
    }
}
export default AuthController
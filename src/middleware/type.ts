import { Request } from "express"


 export interface IExtendRequest extends Request{
    User?:{   
      email:string,
    role:string, 
    username:string |null
    id:string
    }  
}

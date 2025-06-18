import { Request } from "express"


interface IExtendRequest extends Request{
user:{
   id:string
}
}
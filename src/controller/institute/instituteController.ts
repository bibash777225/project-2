import { Request,Response } from "express";
import sequelize from "../../database/connection";
import generateRandomInstituteNumber from "../../../services/generateRandomInstituteNumber";
import { IExtendRequest } from "../../middleware/type";






class InstituteController{
   static async createInstitute(req:IExtendRequest,res:Response){
      console.log(req.User,"name from middleware")
   const{instituteName,instituteEmail,institutePhoneNumber,instituteAddress}=req.body

   const {instituteVatNO}=req.body ||null
   const{ institutePanNO}=req.body ||null
   if(!instituteName || !instituteAddress || !institutePhoneNumber || !instituteEmail  ){
    res.status(401).json({
        message:" please provide all required informantion:instiuteEmail,insituteName,instituteAdress"
        
    })
    return
   }
   
   ///ayou vaney --isntitute create garnu oaryou-->instiute--1242323
   //course--123
   //institute(name)
   const instituteNumber =generateRandomInstituteNumber();
  await sequelize.query(`CREATE TABLE IF NOT EXISTS institute_${instituteNumber}(

id INT NOT NULL PRIMARY KEY  AUTO_INCREMENT,
instituteName VARCHAR(255) NOT NULL,
instituteEmail VARCHAR(255) NOT NULL,
institutePhoneNumber VARCHAR(255) NOT NULL UNIQUE,
instituteAddress VARCHAR(255) NOT NULL,
institutePanNO VARCHAR(255),
instituteVatNO VARCHAR(255),
createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
updatedAt   TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
 )`)

 await sequelize.query(`INSERT INTO institute_${instituteNumber}( instituteName,instituteEmail,institutePhoneNumber,instituteAddress,institutePanNO,instituteVatNO) VALUES ( ?,?,?,?,?,?)`,{
replacements:[instituteName,instituteEmail,institutePhoneNumber,instituteAddress,institutePanNO,instituteVatNO]
 })

 await sequelize.query(`CREATE TABLE IF NOT EXISTS institute_${instituteNumber}_teacher(
 id INT NOT NULL PRIMARY KEY  AUTO_INCREMENT,
 teacherName VARCHAR(255) NOT NULL,
teacherEmail VARCHAR(255) NOT NULL,
teacherPhoneNumber  VARCHAR(255) NOT NULL UNIQUE
    )`)

 res.status(201).json({
    message:" institute created!"
 })
    
    }
}


export default InstituteController
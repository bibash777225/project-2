import{ Sequelize} from 'sequelize-typescript'

const  sequelize= new Sequelize({

     database:process.env.DB_NAME,  //database ko name
     username:process.env.DB_USERNAME , // username of data base  by default 
    password:process.env.DB_PASSWORD 
      , // databse ko password by default 
      dialect:"mysql",
     host:process.env.DB_HOST,// dadta base ko location  kaha xa vaney kura localhost (MYCOMPUTER)
     port:Number(process.env.DB_PORT),
     models:[__dirname+'./models']

})
sequelize.authenticate()
    .then(()=>{
      console.log("authentication,connected vayou hai tah ")   
    })
    .catch((err)=>{
        console.log("error ayou"+err)
    })

//migrate garnu paryou /push garnu parxa
sequelize.sync({force:false})
.then(()=>{
  console.log("migrate vayou hai tah sathi")
})

        export default sequelize
    

import { Table,Column,Model,DataType } from "sequelize-typescript";


@Table({
    tableName: 'users',//utha gui dekhiney table ko name 
    modelName:'User',    //project vitra mathi ko table lai access garna name   dherai jasto mofel name kai name liyera class liney garinca
    timestamps:true
})


class User extends Model{

    @Column({
        primaryKey:true,
        type:DataType.UUID,
        defaultValue:DataType.UUIDV4
    })
    @Column({
type:DataType.STRING
    })

    declare username: string  //userrname vaney co,lume vanuney voo jasley string accept garxa
    @Column({
    type:DataType.STRING
    })

    declare password:string
     @Column({
        type:DataType.STRING,
        unique:true
    })

    declare email:string

    @Column({
        type:DataType.ENUM('teacher','institute','superadmin','student'),
        defaultValue:'student',
    })

    declare role:string
}
export default User
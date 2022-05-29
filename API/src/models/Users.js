const { DataTypes } =require('sequelize')

module.exports=(sequelize)=>{

    sequelize.define('users',{
        id:{
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
            unique:true,
            allowNull:false
        },

        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },

        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate:{
                isEmail: true, 
            }
        },

        hashedPassword: {
            type: DataTypes.STRING(60),
   
            allowNull: false,
        },

        perfil: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        },

        perfil_address: {
            type: DataTypes.STRING,

        },

        perfil_photo: {
            type: DataTypes.STRING
        }

    })
}
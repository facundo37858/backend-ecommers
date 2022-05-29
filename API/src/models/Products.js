const { DataTypes } =require('sequelize')

module.exports=(sequelize)=>{

    sequelize.define('products',{
        id:{
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
            unique:true,
            allowNull:false
        },

        ISBN:{
            type: DataTypes.STRING,
            unique: true,
            
        },

        typeProduct:{
            type: DataTypes.ENUM('book','others'),


        },

        code:{
            type:DataTypes.STRING
        },


        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },

        price: {
            type: DataTypes.INTEGER,
            allowNull: false,
            
        },

        author:{
            type: DataTypes.STRING,

        },

        editorial:{
            type: DataTypes.STRING
        },
        
        stock:{
            type: DataTypes.INTEGER,
            allowNull:false,
            validate:{
                max: 100,                  
                min: 1, 
            }

        },

    })
}
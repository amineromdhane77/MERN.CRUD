const mongoose=require('mongoose')

const productSchema = new mongoose.Schema(
    {
        name:{
            type:String,
            required:true
        },
    
        quantity:{
            type:Number,
            required:true
        },
        price:{
            type:Number,
            required:true
        },
        image:{
            type:String,
            required:false
        },
   
    },
    {
        timestamps:true
    }
    )
     const Product =mongoose.model('Products',productSchema)
     
    module.exports= Product
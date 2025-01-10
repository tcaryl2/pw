import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    image:{
        type:String,
        required:true
    },
}, {
    timestamps:true // Stores when each product was added to the database, good for scaling
});

const Product = mongoose.model('Product', productSchema); // Specify Product in ...model('Product'...) as capitalized and singular. MongoDB will automatically convert Product to products in its post processing

export default Product;
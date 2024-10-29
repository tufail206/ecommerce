let {Schema,model}=require("mongoose")

let productSchema=new Schema({
    name:{type:String,required:true},
    price:{type:Number,required:true},
    category: { type: String, required: true, enum: ["Mens", "Women", "Shoes", "Dress","Bed Room","Hot Sale","Office",
        "Living Room","Dining Room"] ,default: "Mens"},
    image:{type:String,required:true},
    stock:{type:Number,required:true,default:0},
    sold: { type: Number, default: 0 },
    quantity:{type:Number,required:true,default:0},
    description: { type: String, required: true, maxlength: 500 }
},{timestamps:true})


let Prodcut=new model("Prodcut",productSchema);

module.exports=Prodcut;
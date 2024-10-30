let Product=require("../models/products-model")
let GetAllProducts=async(req,res)=>{
    try {
        
        const products = await Product.find();
res.send("all products")
    } catch (error) {
        console.log(error)
    }
}
let GetSingleProduct=async(req,res)=>{
    try {
        let id=req.params.id
        const product = await Product.findById(_id);
        console.log(product)

res.send("single products")
    } catch (error) {
        console.log(error)
    }
}
let EditSingleProduct=async(req,res)=>{

    try {
        res.send("edit products")
    } catch (error) {
        
    }
    
}
module.exports={GetAllProducts,GetSingleProduct,EditSingleProduct};
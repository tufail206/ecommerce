const {Schema,model}=require("mongoose")
let ContactSchema=new Schema({
    fullName:{required:true,type:String},
    email:{requiredd:true,type:String,unique:true},
    subject:{required:true,type:String,},
    message:{required:true,type:String}
})

const Contact=new model("Contact",ContactSchema)
module.exports = Contact
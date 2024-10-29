let bcrypt=require("bcryptjs")
let jwt=require("jsonwebtoken")
let {Schema,model}=require("mongoose")
let userSchema = new Schema({
      username:{required:true,type:String},
      email:{required:true,type:String},
      phone:{required:true,type:String},
      password:{required:true,type:String},
      isAdmin:{type:Boolean,default:false}
},{timestamps:true})
// hesh the password before save
userSchema.pre("save", function(next){
        let user = this;
        if(!user.isModified("password")){
            next()
        }
        user.password = bcrypt.hashSync(user.password,10)
        next();
})
///////////////GENERATE TOKEN

userSchema.methods.generateToken = function() {
    return jwt.sign(
        {
            username: this.username,
            id: this._id,
            isAdmin: this.isAdmin
        },
        process.env.SECRET_KEY,
        { expiresIn: "3d" }
    );
};

userSchema.methods.comparePassword=function(pass){
    return bcrypt.compareSync(pass,this.password)
 
}



let User= new model("User",userSchema)

module.exports=User
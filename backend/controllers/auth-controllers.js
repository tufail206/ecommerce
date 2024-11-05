let User=require("../models/user-model")
let Register=async(req,res)=>{
    try{
        const {name, email,phone, password} = req.body;
         const existingUser=await User.findOne({email});
         if(existingUser) return res.status(400).json({error: "User already exists"});
       

         const user=await User.create({name, email,phone, password});

        res.status(201).json({msg:"Register Succesfully",success: true});


    }catch(error){
        res.status(400).json({error: error.message});
    }
}

let Login=async (req, res) =>{
  try {
   const {email, password}=req.body;
   const user=await User.findOne({email}).select('+password');
   if(!user) return res.status(400).json({error: "User not found"});
   const isMatch=await user.comparePassword(password);   
    if(!isMatch){
        return res.status(400).json({error: "Invalid credentials"});
    }  
    let token=await user.generateToken();
  
    res.json({token, user: {id: user._id, name: user.name, email: user.email,isAdmin:user.isAdmin}});

  } catch (error) {
    console.log(error);
  }
}

module.exports={Register, Login}
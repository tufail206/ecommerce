let jwt=require("jsonwebtoken")
let AuthMiddleware=async(req,res,next)=>{

    let token=req.headers.authorization?.split(' ')[1]
    if(!token){
        return res.status(401).json({message:"Token is required"})
    }
    let verifyToken=jwt.verify(token,process.env.SECRET_KEY)
    if(!verifyToken){
        return res.status(403).json({message:"Token is invalid"})
    }
    req.user=verifyToken.user
    next()

}
let AdminMiddleware =async (req,res,next)=>{
    if(!req.user ||!req.user.isAdmin){
        return res.status(403).json({message:"Unauthorized access"})
    }
    next()
 
}
module.exports={AuthMiddleware,AdminMiddleware}
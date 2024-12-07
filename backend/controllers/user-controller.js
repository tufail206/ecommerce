const User = require("../models/user-model")


let getAllUser=async(req,res)=>{
    try {
        const users = await User.find()
        if (!users){
            return res.status(404).json({msg:"no user found"})
        }
        res.status(200).send(users)
    } catch (error) {
        
    }
}
let deletUser = async (req, res) => {
    try {
        let id=req.params.id
        const users = await User.findByIdAndDelete(id)
        if (!users) {
            return res.status(404).json({ msg: "no user found" })
        }
      res.status(202).json({ msg: "deleted successfully" })
    } catch (error) {
        res.status(500).json({ msg: "internel server error" })
    }
}

module.exports={getAllUser,deletUser}
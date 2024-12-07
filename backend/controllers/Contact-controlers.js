const Contact=require("../models/contact-model")
let CreateContact=async(req,res)=>{
    try {

        let { fullName,
            email,
            subject,
            message }=req.body

        const IsEmailExist = await Contact.findOne({email})
        if (IsEmailExist){
          return  res.status(409).json({msg:"contact already exist"})
        }
      let CreatedContact=  await Contact.create({
            fullName,
            email,
            subject,
            message
})
        res.status(201).json({msg:CreatedContact})
    } catch (error) {
        console.log(error)
    }
}
let GetAllContact=async(req,res)=>{
    try {
        res.send("all user")
    } catch (error) {
        
    }
}
let DeleteContact = async (req, res) => {
    try {
        let id=req.params.id
        res.send("delete user")
    } catch (error) {

    }
}

module.exports = {CreateContact,GetAllContact,DeleteContact}
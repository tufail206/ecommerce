let express= require('express');
let router=express.Router();
let {AuthMiddleware ,AdminMiddleware}=require('../middleware/auth-middleware')
let product_controller=require("../controllers/prodcut-controllers")
router.route("/prodcuts").get(product_controller.GetAllProducts)
router.route("/prodcut/:id").get(product_controller.GetSingleProduct)
router.route("/prodcut/:id").patch( AuthMiddleware,AdminMiddleware ,product_controller.EditSingleProduct)

module.exports =router
let express= require('express');
let router=express.Router();
let {AuthMiddleware ,AdminMiddleware}=require('../middleware/auth-middleware')
let product_controller=require("../controllers/prodcut-controllers")
router.route("/products").get(product_controller.GetAllProducts).post(AuthMiddleware,product_controller.CreateProducts);
router.route("/product/:id").get(product_controller.GetSingleProduct);
router.route("/product").get(product_controller.GetUserProducts);
router.route("/product/:id").put(AuthMiddleware,AdminMiddleware ,product_controller.EditSingleProduct);
router.route("/userproducts").get(AuthMiddleware,product_controller.GetUserProducts);

module.exports =router
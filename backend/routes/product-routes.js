const express = require("express");
const app=express()
const router = express.Router();
const { AuthMiddleware, AdminMiddleware } = require("../middleware/auth-middleware");
const upload = require("../middleware/upload");
const productController = require("../controllers/prodcut-controllers");

// Serve static files (move this line to your main app file)
app.use("/uploads", express.static("uploads"));

// Product routes
router.route("/products")
    .get(productController.GetAllProducts) // Public - Get all products
    .post(AuthMiddleware, upload.single("image"), productController.CreateProducts); // Authenticated - Create a product with image upload

router.route("/product/:id")
    .get(productController.GetSingleProduct) // Public - Get single product
    .put(AuthMiddleware, AdminMiddleware, productController.EditSingleProduct).delete(productController.DeleteSingleProduct); // Admin - Edit a single product

// User-specific product routes
router.get("/userproducts", AuthMiddleware, productController.GetUserProducts); // Authenticated - Get user-specific products

module.exports = router;

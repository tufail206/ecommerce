// routes/cart-routes.js
const express = require("express");
const router = express.Router();
const cartController = require("../controllers/cart-controllers");
const { AuthMiddleware } = require("../middleware/auth-middleware");

router.route("/cart")
    .post(AuthMiddleware, cartController.addToCart)        // Add item to cart
    .get(AuthMiddleware, cartController.getCart);          // Get user's cart

router.route("/cart/item")
    .put(AuthMiddleware, cartController.updateCartItem)    // Update item quantity in cart
    .delete(AuthMiddleware, cartController.removeCartItem); // Remove item from cart

module.exports = router;

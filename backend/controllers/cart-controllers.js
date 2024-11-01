// controllers/cart-controller.js
const Cart = require("../models/cart-model");
const Product = require("../models/products-model");

const addToCart = async (req, res) => {
    try {
        const { productId, quantity } = req.body;
        const userId = req.user.id;

        // Validate product ID and quantity
        if (!productId || !quantity || quantity < 1) {
            return res.status(400).json({ error: "Invalid product ID or quantity." });
        }

        const product = await Product.findById(productId);
        if (!product) {
            return res.status(404).json({ error: "Product not found." });
        }

        let cart = await Cart.findOne({ userId });

        if (!cart) {
            cart = new Cart({ userId, items: [{ productId, quantity }] });
        } else {
            const productIndex = cart.items.findIndex(item => item.productId.toString() === productId);

            if (productIndex > -1) {
                cart.items[productIndex].quantity += quantity;
            } else {
                cart.items.push({ productId, quantity });
            }
        }

        await cart.save();
        res.status(200).json({ message: "Product added to cart", cart });
    } catch (error) {
        console.error("Error adding to cart:", error);
        res.status(500).json({ error: "Server error" });
    }
};

const getCart = async (req, res) => {
    try {
        const cart = await Cart.findOne({ userId: req.user.id }).populate("items.productId", "name price image");
        if (!cart) {
            return res.status(404).json({ message: "Cart is empty" });
        }
        res.status(200).json(cart);
    } catch (error) {
        console.error("Error fetching cart:", error);
        res.status(500).json({ error: "Server error" });
    }
};

const updateCartItem = async (req, res) => {
    try {
        const { productId, quantity } = req.body;
        if (!productId || quantity < 1) {
            return res.status(400).json({ error: "Invalid product ID or quantity." });
        }

        const cart = await Cart.findOne({ userId: req.user.id });
        if (!cart) return res.status(404).json({ message: "Cart not found" });

        const productIndex = cart.items.findIndex(item => item.productId.toString() === productId);

        if (productIndex === -1) return res.status(404).json({ message: "Product not found in cart" });

        cart.items[productIndex].quantity = quantity;
        await cart.save();

        res.status(200).json({ message: "Cart item updated", cart });
    } catch (error) {
        console.error("Error updating cart:", error);
        res.status(500).json({ error: "Server error" });
    }
};

const removeCartItem = async (req, res) => {
    try {
        const { productId } = req.body;
        if (!productId) {
            return res.status(400).json({ error: "Product ID is required." });
        }

        const cart = await Cart.findOne({ userId: req.user.id });
        if (!cart) return res.status(404).json({ message: "Cart not found" });

        cart.items = cart.items.filter(item => item.productId.toString() !== productId);
        await cart.save();

        res.status(200).json({ message: "Product removed from cart", cart });
    } catch (error) {
        console.error("Error removing cart item:", error);
        res.status(500).json({ error: "Server error" });
    }
};

module.exports = {
    addToCart,
    getCart,
    updateCartItem,
    removeCartItem
};

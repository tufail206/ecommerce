// models/Cart.js
const { Schema, model } = require("mongoose");

const cartSchema = new Schema({
    userId: { type: Schema.Types.ObjectId, ref: "User", required: true },
    items: [
        {
            productId: { type: Schema.Types.ObjectId, ref: "Product", required: true },
            quantity: { type: Number, required: true, default: 1 }
        }
    ]
}, { timestamps: true });

const Cart =new model("Cart", cartSchema);

module.exports = Cart;

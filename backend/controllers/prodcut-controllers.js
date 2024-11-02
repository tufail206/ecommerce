let Product = require("../models/products-model")
let CreateProducts = async (req, res) => {
    try {
        let { name, image, description, category, stock, price, quantity, sold } = req.body;

        let isExistProduct = await Product.findOne({ name })
        if (isExistProduct) {
            return res.status(409).json({ msg: "product is already exist" })
        }

        let created = await Product.create({ name, image, description, category, stock, price, quantity, sold, userId: req.user.id })
        res.status(200).json({ created })

    } catch (error) {
        console.log(error)
    }
}
let GetAllProducts = async (req, res) => {
    try {

        const products = await Product.find();
        res.status(200).send(products)
    } catch (error) {
        console.log(error)
    }
}
let GetSingleProduct = async (req, res) => {
    try {
        let id = req.params.id
        const product = await Product.findById(id);
        if (!product){
            return res.status(404).json({msg:"no products found"})
        }
        
        res.status(200).send(product)
    } catch (error) {
        console.log(error)
    }
}
let EditSingleProduct = async (req, res) => {
    console.log(req.body)
    try {
        res.send("edit products")
    } catch (error) {

    }

}


let GetUserProducts = async (req, res) => {
    try {

        const userProducts = await Product.find({ userId: req.user.id });
        console.log("user id", req.user.id)
        if (userProducts.length === 0) {
            return res.status(404).json({ message: "No products found for this user." });
        }

        // Send the user's products as a response
        res.status(200).json(userProducts);
    } catch (error) {
        console.error("Error fetching user products:", error);
        res.status(500).json({ error: "Server error" });
    }
};
module.exports = { CreateProducts, GetAllProducts, GetSingleProduct, EditSingleProduct, GetUserProducts };
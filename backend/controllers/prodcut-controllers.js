const Product = require("../models/products-model");
const upload = require("../middleware/upload"); // Import the multer middleware
const GetAllProducts = async (req, res) => {
    try {
        const products = await Product.find();
        res.status(200).json(products);
    } catch (error) {
        console.error("Error fetching products:", error);
        res.status(500).json({ msg: "Server error" });
    }
};

// Controller to create a product
const CreateProducts = async (req, res) => {
    try {
        // Run multer to handle file upload
        upload.single("image")(req, res, async (err) => {
            if (err) {
                return res.status(400).json({ msg: err.message });
            }

            // Destructure data from the request body
            const { name, description, category, stock, price, quantity, sold } = req.body;

            // Check if product already exists
            let isExistProduct = await Product.findOne({ name });
            if (isExistProduct) {
                return res.status(409).json({ msg: "Product already exists" });
            }

            // Save the image path from multer upload
            const imagePath = req.file ? req.file.path : null;

            // Create the product in the database
            let created = await Product.create({
                name,
                image: imagePath,
                description,
                category,
                stock,
                price,
                quantity,
                sold,
                userId: req.user.id
            });

            res.status(200).json({ created });
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: "Server error" });
    }
};
const GetSingleProduct = async (req, res) => {
    try {
        const { id } = req.params;
        const product = await Product.findById(id);

        if (!product) {
            return res.status(404).json({ msg: "Product not found" });
        }

        res.status(200).json(product);
    } catch (error) {
        console.error("Error fetching product:", error);
        res.status(500).json({ msg: "Server error" });
    }
};
const DeleteSingleProduct = async (req, res) => {
    try {
        const { id } = req.params;
        const product = await Product.findByIdAndDelete(id);

        if (!product) {
            return res.status(404).json({ msg: "Product not found" });
        }

        res.status(200).json(product);
    } catch (error) {
        console.error("Error delete product:", error);
        res.status(500).json({ msg: "Server error" });
    }
};
const EditSingleProduct = async (req, res) => {
    try {
        const { id } = req.params;
        const { name, description, category, stock, price, quantity, sold } = req.body;
        const imagePath = req.file ? req.file.path : null;  // Handling optional image update

        // Find and update the product
        const updatedProduct = await Product.findByIdAndUpdate(
            id,
            {
                name,
                image: imagePath || undefined,  // Only update image if a new file is uploaded
                description,
                category,
                stock,
                price,
                quantity,
                sold
            },
            { new: true }  // Return the updated product
        );

        if (!updatedProduct) {
            return res.status(404).json({ msg: "Product not found" });
        }

        res.status(200).json(updatedProduct);
    } catch (error) {
        console.error("Error updating product:", error);
        res.status(500).json({ msg: "Server error" });
    }
};
const GetUserProducts = async (req, res) => {
    try {
        const userProducts = await Product.find({ userId: req.user.id });

        if (userProducts.length === 0) {
            return res.status(404).json({ msg: "No products found for this user" });
        }

        res.status(200).json(userProducts);
    } catch (error) {
        console.error("Error fetching user products:", error);
        res.status(500).json({ msg: "Server error" });
    }
};

module.exports = {
    CreateProducts,
    GetAllProducts,
    GetSingleProduct,
    EditSingleProduct,
    GetUserProducts, DeleteSingleProduct
};

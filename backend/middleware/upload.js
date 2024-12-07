const multer = require("multer");
const path = require("path");

// Configure multer to save files in the "uploads" directory with unique filenames
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "uploads/"); // Ensure "uploads" folder exists
    },
    filename: (req, file, cb) => {
        const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1E9);
        cb(null, uniqueSuffix + path.extname(file.originalname));
    }
});

const fileFilter = (req, file, cb) => {
    // Only accept image files
    if (file.mimetype.startsWith("image")) {
        cb(null, true);
    } else {
        cb(new Error("Only image files are allowed!"), false);
    }
};

const upload = multer({ storage, fileFilter });

module.exports = upload;

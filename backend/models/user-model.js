const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { Schema, model } = require("mongoose");

const userSchema = new Schema(
    {
        name: { type: String, required: true },
        email: { type: String, required: true, unique: true },
        phone: { type: String, required: true },
        password: { type: String, required: true },
        isAdmin: { type: Boolean, default: false },
    },
    { timestamps: true }
);

// Hash the password before saving
userSchema.pre("save", async function (next) {
    if (!this.isModified("password")) return next();

    try {
        const salt = await bcrypt.genSalt(10);
        this.password = await bcrypt.hash(this.password, salt);
        next();
    } catch (error) {
        next(error);
    }
});

// Generate a JWT token
userSchema.methods.generateToken = function () {
    return jwt.sign(
        {
            username: this.username,
            id: this._id,
            isAdmin: this.isAdmin,
        },
        process.env.SECRET_KEY,
        { expiresIn: "3d" }
    );
};

// Compare password for authentication
userSchema.methods.comparePassword = async function (pass) {
    return bcrypt.compare(pass, this.password);
};

// Define and export the User model
const User = model("User", userSchema);

module.exports = User;

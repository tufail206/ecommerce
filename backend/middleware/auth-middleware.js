const jwt = require("jsonwebtoken");

const AuthMiddleware = async (req, res, next) => {
    try {
        // Extract token from the authorization header
        const token = req.headers.authorization?.split(' ')[1];

        if (!token) {
            return res.status(401).json({ message: "Token is required" });
        }

        // Verify the token
        const verifyToken = jwt.verify(token, process.env.SECRET_KEY);

        // Attach verified user data to request
        req.user = verifyToken;
        next();

    } catch (error) {
        // Handle specific JWT errors
        if (error.name === "JsonWebTokenError") {
            return res.status(403).json({ message: "Invalid token format or token error" });
        }
        if (error.name === "TokenExpiredError") {
            return res.status(401).json({ message: "Token has expired, please log in again" });
        }
        // General error handler
        console.error("Authentication error:", error.message);
        return res.status(500).json({ message: "Server error", error: error.message });
    }
};

const AdminMiddleware = async (req, res, next) => {
    if (!req.user) {
        return res.status(401).json({ message: "User not authenticated" });
    }
    if (!req.user.isAdmin) {
        return res.status(403).json({ message: "Admin privileges required" });
    }
    next();
};

module.exports = { AuthMiddleware, AdminMiddleware };

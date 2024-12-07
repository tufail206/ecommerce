let error_middleware = (err, req, res, next) => {
    const status = err.status || 500;
    const msg = err.msg || "Internal Server Error";
    const extraDetails = err.extraDetails || "Internal server error or backend error";

    // Send the error response to the client
    res.status(status).json({
        success: false,
        message: msg,
        details: extraDetails
    });
};

module.exports = error_middleware;

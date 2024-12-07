require("dotenv").config();
let express = require('express');
let cors = require("cors")
let app = express();
let auth_router = require("./routes/aut-routes");
let product_router = require("./routes/product-routes")
let user_router = require("./routes/user-routes")
let contact_router = require("./routes/contact-routes")
let ConnectDb = require("./utils/db");
const error_middleware = require("./middleware/error-middelware");
let corsData = {
    origin: "http://localhost:5173",
    method: ["GET", "PUT", "PATCH", "DELETE", "HEAD"],
    creadintials: true
}
app.use(cors(corsData))
app.use(express.json());
let PORT = process.env.PORT
// Routes
app.use("/api/v1", auth_router)
app.use("/api/v1", product_router)
app.use("/api/v1", user_router)
app.use("/api/v1", contact_router)
app.use(error_middleware)
ConnectDb().then(() => {
    console.log("Database connected successfully");
    app.listen(PORT, () => {
        console.log('Server is running on port ' + PORT);
    });
}).catch(err => {
    console.log("Error connecting to the database", err);
    process.exit(1);  // Exit the application with a non-zero status code. 1 indicates a failure. 0 indicates success.  });
})

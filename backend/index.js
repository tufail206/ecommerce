require("dotenv").config();
let express = require('express');
let app = express();
let auth_router=require("./routes/aut-routes");
let product_router=require("./routes/product-routes")
let cart_router=require("./routes/cart-routes")
let ConnectDb=require("./utils/db")
app.use(express.json());
let PORT=process.env.PORT
// Routes
app.use("/api/v1/",auth_router)
app.use("/api/v1/",product_router)
app.use("/api/v1/",cart_router)

ConnectDb().then(()=>{
    console.log("Database connected successfully");
    app.listen(PORT, () => {
        console.log('Server is running on port '+PORT);
    });
}).catch(err => {
    console.log("Error connecting to the database", err);
    process.exit(1);  // Exit the application with a non-zero status code. 1 indicates a failure. 0 indicates success.  });
})

let express = require('express');
let router = express.Router();
let user_controller = require("../controllers/user-controller");
const { AuthMiddleware, AdminMiddleware } = require('../middleware/auth-middleware');
router.route("/user").get(AuthMiddleware,AdminMiddleware,user_controller.getAllUser)
router.route("/user/:id").delete(AuthMiddleware,AdminMiddleware,user_controller.deletUser)

module.exports = router
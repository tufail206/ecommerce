let express = require('express');
let router = express.Router();
let Contact_coutrollers = require("../controllers/Contact-controlers");
router.route("/contacts").get(Contact_coutrollers.GetAllContact).post(Contact_coutrollers.CreateContact)
router.route("/contact/:id").delete(Contact_coutrollers.DeleteContact)

module.exports = router
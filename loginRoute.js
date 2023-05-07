const express = require("express");
const router = express.Router();
const loginController = require("../controllers/loginController");

router.post("/add", loginController.adddata);
router.get("/add", loginController.getUserData);
router.post("/add/login", loginController.loginUser);

module.exports = router;

//->To get the data path is==localhost:4000/add/add
//->To add the data path is==loaclhost:4000/add/add
//->To get the data of login==localhost:4000/add/add/login

const express = require("express");
const router = express.Router();
const registerController = require("../controllers/RegisterController");

router.post("/addregi", registerController.addregidata);
router.get("/getregi", registerController.getRegiData);
router.post("/register/login", registerController.loginUser);

router.get("/register/:id", registerController.getUserById);
router.get("/userrole", registerController.getUserDataWithRole);
module.exports = router;

//To get the register data ==>localhost:4000/register/getregi
//To post the register data==>localhost:4000/register/addregi
//To login with user data==>localhost:4000/register/register/login
//To get the data by id path is ==>localhost:4000/register/register/id
//To get the data with user role==?localhost:4000/register/userrole

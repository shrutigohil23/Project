const express = require("express");
const router = express.Router();
const roleController = require("../controllers/Rolecontroller");

router.post("/addrole", roleController.addRole);
router.get("/getrole", roleController.getAllRoles);

module.exports = router;

//To add role the path is==>localhost:4000/role/addrole
//To get the all roles path is==>localhost:4000/role/getrole

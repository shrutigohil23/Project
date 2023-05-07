const express = require("express");
const router = express.Router();
const clinicController = require("../controllers/ClinicController");

router.post("/addclinic", clinicController.clinicdata);
router.get("/getclinic", clinicController.getclinicdata);
router.get("/clinic/:id", clinicController.getUserById);

//To get the clinic path is ==>localhost:4000/clinic/getclinic
//To add the clinic path is==>localhost:4000/clinic/addclinic
//To get the data with id==>localhost:4000/clinic/clinic/id
module.exports = router;

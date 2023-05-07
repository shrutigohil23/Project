const express = require("express");
const router = express.Router();
const AppointmentController = require("../controllers/AppointmentController");

router.post("/appointment", AppointmentController.appotmentdata);
router.get("/appointment", AppointmentController.getappointmentdata);

router.delete("/appointment/:id", AppointmentController.deleteappointment);
router.get(
  "/clinicwithapp",
  AppointmentController.getappointmentdataWithClinic
);
router.get(
  "/doctordatabyid/:id",
  AppointmentController.getappointmentdataWithClinicid
);

//To get the appointment data==>localhost:4000/appointment/appointment
//To add the appointment data==?localhost:4000/appointment/appointment
//To get the data with appointment data with clinic==>localhost:4000/appointment/clinicwithapp
//To delete the data ==>localhost:4000/appointment/appointment/id
//localhost:4000/appointment/doctordatabyid/id

module.exports = router;

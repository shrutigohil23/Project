const express = require("express");
const router = express.Router();
const citycontroller = require("../controllers/CityController");

router.post("/addcity", citycontroller.addcity);
router.get("/getcity", citycontroller.getAllcity);


//To add the city=>localhost:4000/city/addcity
//To get the city=>localhost:4000/city/getcity
module.exports = router;
 
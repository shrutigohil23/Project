const express = require("express");
const router = express.Router();
const statecontroller = require("../controllers/StateController");

router.post("/addstate", statecontroller.addstate);
router.get("/getstate", statecontroller.getAllstate);


//To get the state ==>localhost:4000/state/getstate
//To add the state==>localhost:4000/state/addstate
module.exports = router;

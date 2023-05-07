const express = require("express");
const router = express.Router();

const filecontroller = require("../controllers/FileandDocController");

router.post("/upload", filecontroller.uploadFile);
router.get("/getdata", filecontroller.getProductData);

router.get("/getdata/:id", filecontroller.getUserById);

router.get("/docandclinic/:id", filecontroller.getdoctorandclinicbyId);
router.get("/docandclinic",filecontroller.getDoctorDatawithClinic);
router.get("/search/:query", filecontroller.searchProduct);
module.exports = router;

//To post the data==>localhost:4000/file/upload
//To get the data==>localhost:4000/file/getdata
//To get the data with id==>localhost:4000/file/getdata/id
//To search the product path is==>localhost:4000/file/search/query
//To get the doctor data with clinic path is=localhost:4000/file/docandclinic

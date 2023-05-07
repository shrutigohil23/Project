const clinicSchema = require("../schema/ClinicSchema");

const clinicdata = (req, res) => {
  const clinic = new clinicSchema(req.body);
  clinic.save((err, data) => {
    if (err) {
      res.status(500).json({
        message: "error in adding clinic.....",
      });
    } else {
      res.status(201).json({
        message: "Clinic added successfully",
        data: data,
      });
    }
  });
};

const getclinicdata = (req, res) => {
  clinicSchema.find((err, success) => {
    if (err) {
      res.status(404).json({
        message: "error in fetching  clinic data",
      });
    } else {
      res.status(200).json({
        message: "data fetched successfully",
        data: success,
      });
    }
  });
};


const getUserById = (req, res) => {
  var id = req.params.id;

  clinicSchema.findById(id, (err, data) => {
    if (err) {
      res.status(404).json({
        message: "error in fetching data",
      });
    } else {
      res.status(200).json({
        message: "data fetched successfully",
        data: data,
      });
    }
  });
};



module.exports = {
  clinicdata,
  getclinicdata,
  getUserById
};

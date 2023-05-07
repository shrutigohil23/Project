const appotschema = require("../schema/AppointmentSchema");

const appotmentdata = (req, res) => {
  const appotment = new appotschema(req.body);
  appotment.save((err, data) => {
    if (err) {
      res.status(200).json({
        message: "error in adding appointment.....",
      });
    } else {
      res.status(201).json({
        message: "Appointment added successfully",
        data: data,
      });
    }
  });
};

const getappointmentdata = (req, res) => {
  appotschema.find((err, success) => {
    if (err) {
      res.status(404).json({
        message: "error in fetching appointment data",
      });
    } else {
      res.status(200).json({
        message: " appointment data fetched successfully",
        data: success,
      });
    }
  });
};

const getappointmentdataWithClinic = (req, res) => {
  appotschema
    .find()
    .populate("clinic")
    .populate("doctor")

    .exec((err, users) => {
      if (err) {
        res.status(404).json({
          message: "Error in getting users",
          err: err,
        });
      } else {
        if (users != null || users != undefined || users.length != 0) {
          res.status(200).json({
            message: "Users fetched successfully with clinic",
            users: users,
          });
        } else {
          res.status(404).json({
            message: "Users not found",
          });
        }
      }
    });
};

const deleteappointment = (req, res) => {
  const id = req.params.id;
  appotschema.findByIdAndDelete(id, (err, success) => {
    if (err) {
      res.status(404).json({
        message: "error in deleting user",
      });
    } else {
      res.status(200).json({
        message: "user deleted successfully",
        data: success,
      });
    }
  });
};

const getappointmentdataWithClinicid = (req, res) => {
  appotschema
    .find({ doctor: req.params.id })
    .populate("clinic")
    .populate("doctor")

    .exec((err, users) => {
      if (err) {
        res.status(404).json({
          message: "Error in getting doctor data",
          err: err,
        });
      } else {
        if (users != null || users != undefined || users.length != 0) {
          res.status(200).json({
            message: "Users fetched successfully with clinic and doctor data",
            users: users,
          });
        } else {
          res.status(404).json({
            message: "Users not found",
          });
        }
      }
    });
};

module.exports = {
  appotmentdata,
  getappointmentdata,
  getappointmentdataWithClinic,
  deleteappointment,
  getappointmentdataWithClinicid,
};

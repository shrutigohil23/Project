const StateSchema = require("../schema/StateSchema");

const addstate = (req, res) => {
  const state = new StateSchema(req.body);
  state.save((err, data) => {
    if (err) {
      res.status(500).json({
        message: "Error in adding state",
        err: err,
      });
    } else {
      res.status(201).json({
        message: "state added successfully",
        data: data,
      });
    }
  });
};

const getAllstate = (req, res) => {
  StateSchema.find((err, data) => {
    if (err) {
      res.status(500).json({
        message: "Error in fetching state",
        err: err,
      });
    } else {
      if (data != null || data != undefined || data.length != 0) {
        res.status(200).json({
          message: "state fetched successfully",
          data: data,
        });
      } else {
        res.status(404).json({
          message: "state not found",
        });
      }
    }
  });
};

module.exports = {
  addstate,
  getAllstate,
};

const cityschema = require("../schema/CitySchema");

const addcity = (req, res) => {
  const city = new cityschema(req.body);
  city.save((err, data) => {
    if (err) {
      res.status(500).json({
        message: "Error in adding city",
        err: err,
      });
    } else {
      res.status(201).json({
        message: "city added successfully",
        data: data,
      });
  }
  });
};

const getAllcity = (req, res) => {
  cityschema.find((err, data) => {
    if (err) {
      res.status(500).json({
        message: "Error in fetching city",
        err: err,
      });
    } else {
      if (data != null || data != undefined || data.length != 0) {
        res.status(200).json({
          message: "city fetched successfully",
          data: data,
        });
      } else {
        res.status(404).json({
          message: "city not found",
        });
      }
    }
  });
};

module.exports = {
  addcity,
  getAllcity,
};

const { populate } = require("../schema/loginSchema");
const loginSchema = require("../schema/loginSchema");

const adddata = (req, res) => {
  const login = new loginSchema(req.body);
  login.save((err, data) => {
    if (err) {
      res.status(500).json({
        message: "error in adding user",
      });
    } else {
      res.status(201).json({
        message: "user added successfully",
        data: data,
      });
    }
  });
};

const getUserData = (req, res) => {
  loginSchema.find((err, data) => {
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

const loginUser = (req, res) => {
  var email = req.body.email;
  var password = req.body.password;

  if (
    email != undefined &&
    password != undefined &&
    email != "" &&
    password != ""
  ) {
    loginSchema
      .find({ email: email, password: password })
      .populate("role")
      .exec((err, data) => {
        if (err) {
          res.status(500).json({
            message: "error while fetching user",
          });
        } else {
          if (data != undefined && data != null && data.length > 0) {
            res.status(200).json({
              message: "user found",
              data: data,
            });
          } else {
            res.status(404).json({
              message: "user not found",
            });
          }
        }
      });
  } else {
    res.status(404).json({
      message: "email and password both are required",
    });
  }
};


module.exports = {
  adddata,
  getUserData,
  loginUser,
};

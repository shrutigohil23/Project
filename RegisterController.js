const RegisterSchema = require("../schema/RegisterSchema");
const mailer = require("../util/mailer");

const addregidata = async (req, res) => {
  const hash = await req.body.password;
  console.log(hash);
  const userData = {
    name: req.body.name,
    email: req.body.email,
    password: hash,
    age: req.body.age,
    role: req.body.role,
  };
  const regi = new RegisterSchema(userData);
  regi.save(async (err, data) => {
    if (err) {
      res.status(501).json({
        message: "error in adding user",
        err: err,
      });
    } else {
      const mailres = await mailer.sendMail(
        req.body.email,
        "Welcome to our website Online doctor System"
      );
      console.log(mailres);
      if (mailres) {
        res.status(201).json({
          message: "user added successfully",
          data: data,
        });
      } else {
        res.status(500).json({
          message: "error in sending mail",
        });
      }
    }
  });
};

const getRegiData = (req, res) => {
  RegisterSchema.find((err, data) => {
    if (err) {
      res.status(404).json({
        message: "error in fetching register data",
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
    RegisterSchema.find({ email: email, password: password })
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

const getUserById = (req, res) => {
  var id = req.params.id;

  RegisterSchema.findById(id, (err, data) => {
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

const getUserDataWithRole = (req, res) => {
  RegisterSchema.find()
    .populate("role")
    .exec((err, users) => {
      if (err) {
        res.status(500).json({
          message: "Error in getting users",
          err: err,
        });
      } else {
        if (users != null || users != undefined || users.length != 0) {
          res.status(200).json({
            message: "Users fetched successfully",
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
  addregidata,
  getRegiData,
  loginUser,
  getUserById,
  getUserDataWithRole,
};

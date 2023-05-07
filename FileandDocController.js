const path = require("path");
const multer = require("multer");
const FileUpload = require("../schema/FileUploadSchema");

const storage = multer.diskStorage({
  destination: "/uploads",
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

const upload = multer({
  storage: storage,
  limits: {
    fileSize: 9000000,
  },
}).single("file");

const uploadFile = (req, res) => {
  console.log(req.file);
  upload(req, res, (err) => {
    if (err) {
      res.status(500).json({
        error: err,
        message: "Error uploading file",
      });
    } else {
      console.log(req.file.originalname);
      //size
      console.log(req.file.size);
      //abs path
      console.log(req.file.path);
      var p = path.join(__dirname, "../uploads/" + req.file.originalname);
      console.log(p);

      //type

      if (req.file == undefined) {
        res.status(400).json({
          message: "No file selected",
        });
      } else {
        const fileUpload = new FileUpload({
          name: req.file.originalname,
          size: req.file.size,
          url: p,
          type: req.file.mimetype,
          DrName: req.body.DrName,
          Qualification: req.body.Qualification,
          Specalization: req.body.Specalization,
          Experiance: req.body.Experiance,
          Fees: req.body.Fees,
          About: req.body.About,
          clinic: req.body.clinic,
        });
        fileUpload.save((err, data) => {
          if (err) {
            res.status(500).json({
              error: err,
              message: "Error uploading file to db",
            });
          } else {
            res.status(200).json({
              message: "File uploaded successfully",
              file: req.file.originalname,
            });
          }
        });

        // res.status(200).json({
        //     message: 'File uploaded successfully',
        //     file: req.file.originalname
        // })
      }
    }
  });
};

const getProductData = (req, res) => {
  FileUpload.find((err, data) => {
    if (err) {
      res.status(404).json({
        message: "error in fetching product",
      });
    } else {
      res.status(200).json({
        message: "product fetched successfully",
        data: data,
      });
    }
  });
};

const getUserById = (req, res) => {
  var id = req.params.id;

  FileUpload.findById(id, (err, data) => {
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

const searchProduct = async (req, res) => {
  const query = req.params.query;
  FileUpload.find(
    {
      $or: [
        {
          DrName: { $regex: query, $options: "$i" },
        },
      ],
    },
    (err, products) => {
      res.status(200).json({
        message: "Search fetched successfully",
        products: products,
      });
    }
  );
};

const getDoctorDatawithClinic = (req, res) => {
  FileUpload.find()
    .populate("clinic")
    .exec((err, users) => {
      if (err) {
        res.status(500).json({
          message: "Error in getting doctor data with clinic",
          err: err,
        });
      } else {
        if (users != null || users != undefined || users.length != 0) {
          res.status(200).json({
            message: "Doctor data with clinic  fetched successfully",
            users: users,
          });
        } else {
          res.status(404).json({
            message: "doctor data with clinic not found",
          });
        }
      }
    });
};

const getdoctorandclinicbyId = (req, res) => {
  var id = req.params.id;

  FileUpload.findById(id, (err, data) => {
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
  uploadFile,
  getProductData,
  getUserById,
  searchProduct,
  getDoctorDatawithClinic,
  getdoctorandclinicbyId
};

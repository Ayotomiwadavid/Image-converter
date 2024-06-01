const multer = require("multer");
const webp = require("webp-converter");
const path = require("path");

// Configure storage for Multer
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "Uploads");
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + "-" + file.originalname;
    cb(null, file.fieldname + "-" + uniqueSuffix);
  },
});

const upload = multer({ storage: storage }).single("file");

const receiveUpload = (req, res) => {
  upload(req, res, (err) => {
    if (err) {
      console.error("Error uploading file:", err);
      return res.status(500).send({ message: "Error uploading file", error: err.message });
    }
    
    const converted_Webp_Image = Date.now() + "-result.webp"; // Corrected file name
    
    const result = webp.cwebp(req.file.path, converted_Webp_Image, "-q 80");
    result.then(() => {
      const convertedImagePath = path.join(__dirname, '..', '..', converted_Webp_Image); // Adjusted file path
      res.sendFile(convertedImagePath, (err) => {
        if (err) {
          console.error("Error during file send:", err);
          res.status(500).send({ message: "Error sending file", error: err.message });
        }
      });
    }).catch((err) => {
      console.error("Error converting file to WebP:", err);
      res.status(500).send({ message: "Error converting file to WebP", error: err.message });
    });
  });
};

module.exports = { receiveUpload };

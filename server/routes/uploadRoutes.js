const express = require("express");
const upload = require("../config/upload");
const fs = require("fs");
const path = require("path");
const router = express.Router();

router.post(
  "/",
  upload.single("image"),
  (req, res) => {
    res.json({
      imageUrl:
        "http://localhost:5000/uploads/" +
        req.file.filename,
    });
  }
);
router.delete("/:filename", (req, res) => {
  const filePath = path.join(
    __dirname,
    "../uploads",
    req.params.filename
  );

  fs.unlink(filePath, (err) => {
    if (err) {
      return res.status(404).json({
        message: "File not found",
      });
    }

    res.json({
      message: "Image deleted",
    });
  });
});
module.exports = router;
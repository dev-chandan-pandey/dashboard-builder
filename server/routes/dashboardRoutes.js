const express = require("express");

const {
  saveDashboard,
  getDashboard,
} = require("../controllers/dashboardController");

const router = express.Router();

router.post("/save", saveDashboard);

router.get("/latest", getDashboard);

module.exports = router;
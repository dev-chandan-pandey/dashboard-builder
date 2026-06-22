const express = require("express");
const cors = require("cors");
require("dotenv").config();
const path = require("path");
const initializeDatabase = require("./config/initDB");
const dashboardRoutes = require("./routes/dashboardRoutes");
const uploadRoutes = require("./routes/uploadRoutes");
const app = express();

app.use(
  cors({
    origin: "*",
  })
);
app.use(express.json({
  limit: "20mb",
}));
app.use(
  "/uploads",
  express.static(
    path.join(__dirname, "uploads")
  )
);
app.use("/api/upload", uploadRoutes);
app.use(express.urlencoded({
  extended: true
}));

app.use("/api/dashboard", dashboardRoutes);

app.get("/", (req, res) => {
  res.json({
    message: "Dashboard Builder API Running",
  });
});

const PORT = process.env.PORT || 5000;

async function startServer() {
  await initializeDatabase();

  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
}

startServer();
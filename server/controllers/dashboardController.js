const db = require("../config/db");

exports.saveDashboard = async (req, res) => {
  try {
    const { name, layout } = req.body;

    // await db.execute(
    //   "INSERT INTO dashboards (name, layout_json) VALUES (?, ?)",
    //   [name, JSON.stringify(layout)]
    // );
    await db.execute({
  sql: `
    INSERT INTO dashboards
    (name, layout_json)
    VALUES (?, ?)
  `,
  args: [
    name,
    JSON.stringify(layout),
  ],
});

    res.status(201).json({
      success: true,
      message: "Dashboard saved successfully",
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      error: error.message,
    });
  }
};

exports.getDashboard = async (req, res) => {
  try {
    const result = await db.execute(
      "SELECT * FROM dashboards ORDER BY id DESC LIMIT 1"
    );

    const dashboard = result.rows[0];

    if (!dashboard) {
      return res.status(404).json({
        message: "No dashboard found",
      });
    }

    dashboard.layout_json = JSON.parse(
      dashboard.layout_json
    );

    res.json(dashboard);
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
};
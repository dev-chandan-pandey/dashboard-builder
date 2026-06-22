import { useState, useEffect } from "react";
import DashboardCanvas from "./components/DashboardCanvas";
import Toolbar from "./components/Toolbar";
import API from "./services/api";
import { ToastContainer, toast } from "react-toastify";

function App() {
  const [widgets, setWidgets] = useState([
    {
      i: "text1",
      x: 0,
      y: 0,
      w: 4,
      h: 3,
      type: "text",
      content: "Welcome to your Dashboard Builder",
    },
  ]);

  useEffect(() => {
    loadDashboard();
  }, []);

  const deleteWidget = async (id) => {
  const widget = widgets.find(
    (w) => w.i === id
  );

  if (
    widget?.type === "image" &&
    widget.image
  ) {
    const filename =
      widget.image.split("/").pop();

    try {
      await axios.delete(
        `http://localhost:5000/api/upload/${filename}`
      );
    } catch (error) {
      console.error(error);
    }
  }

  setWidgets(
    widgets.filter(
      (widget) => widget.i !== id
    )
  );
};

  const loadDashboard = async () => {
    try {
      const response = await API.get("/latest");
      if (response.data?.layout_json) {
        setWidgets(response.data.layout_json);
        toast.success("Dashboard dynamically loaded!");
      }
    } catch (error) {
      console.log("No previous layout setup found on server.", error);
    }
  };

  const saveDashboard = async () => {
    try {
      await API.post("/save", {
        name: "Dashboard Workspace",
        layout: widgets,
      });
      toast.success("Changes deployed safely.");
    } catch (error) {
      console.error(error);
      toast.error("Failed to sync architecture changes.");
    }
  };

  const addTextWidget = () => {
    const id = Date.now().toString();
    setWidgets([
      ...widgets,
      { i: id, x: 0, y: Infinity, w: 4, h: 4, type: "text", content: "" },
    ]);
  };

  const addChartWidget = () => {
    const id = Date.now().toString();
    const randomData = Array.from({ length: 5 }, () => Math.floor(Math.random() * 100));
    const chartType = Math.random() > 0.5 ? "line" : "bar";

    setWidgets([
      ...widgets,
      { i: id, x: 0, y: Infinity, w: 6, h: 5, type: "chart", chartType, data: randomData },
    ]);
  };

  const addImageWidget = () => {
    const id = Date.now().toString();
    setWidgets([
      ...widgets,
      { i: id, x: 0, y: Infinity, w: 4, h: 4, type: "image", image: "" },
    ]);
  };

  return (
    <div className="dashboard-container">
      <ToastContainer position="top-right" autoClose={3000} theme="light" />
      
      {/* Sidebar navigation context */}
      <aside className="sidebar">
        <div className="sidebar-brand">
          <h1>Dashboard Builder</h1>
        </div>
        <Toolbar
          addTextWidget={addTextWidget}
          addChartWidget={addChartWidget}
          addImageWidget={addImageWidget}
          saveDashboard={saveDashboard}
          loadDashboard={loadDashboard}
        />
      </aside>

      {/* Main viewport canvas */}
      <main className="main-workspace">
        <DashboardCanvas
          widgets={widgets}
          setWidgets={setWidgets}
          deleteWidget={deleteWidget}
        />
      </main>
    </div>
  );
}

export default App;
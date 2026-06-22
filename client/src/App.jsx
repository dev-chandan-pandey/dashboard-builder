import { useState } from "react";
import DashboardCanvas from "./components/DashboardCanvas";
import Toolbar from "./components/Toolbar";
import API from "./services/api";
import { useEffect } from "react";
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
      content: "Text Widget",
    },
  ]);
  useEffect(() => {
    loadDashboard();
  }, []);
  const deleteWidget = (id) => {
    setWidgets(
      widgets.filter(
        (widget) => widget.i !== id
      )
    );
  };
  const loadDashboard = async () => {
    try {
      const response =
        await API.get("/latest");

      setWidgets(
        response.data.layout_json
      );
      toast.success("Dashboard loaded.");
    } catch (error) {
      console.log(error);
    }
  };
  const saveDashboard = async () => {
    try {
      await API.post("/save", {
        name: "Dashboard",
        layout: widgets,
      });

      toast.success("Dashboard saved.");
    } catch (error) {
      console.error(error);
    }
  };
  const addTextWidget = () => {
    const id = Date.now().toString();

    setWidgets([
      ...widgets,
      {
        i: id,
        x: 0,
        y: Infinity,
        w: 4,
        h: 4,
        type: "text",
        content: "",
      },
    ]);
  };

  const addChartWidget = () => {
  const id = Date.now().toString();

  const randomData = Array.from(
    { length: 5 },
    () => Math.floor(Math.random() * 100)
  );

  const chartType =
    Math.random() > 0.5
      ? "line"
      : "bar";

  setWidgets([
    ...widgets,
    {
      i: id,
      x: 0,
      y: Infinity,
      w: 5,
      h: 6,
      type: "chart",
      chartType,
      data: randomData,
    },
  ]);
};

  const addImageWidget = () => {
    const id = Date.now().toString();

    setWidgets([
      ...widgets,
      {
        i: id,
        x: 0,
        y: Infinity,
        w: 4,
        h: 4,
        type: "image",
        image: "",
      },
    ]);
  };

  return (
    <div className="dashboard-container">
      <h1 className="dashboard-title">
        Dashboard Builder
      </h1>
     <ToastContainer />
      <Toolbar
        addTextWidget={addTextWidget}
        addChartWidget={addChartWidget}
        addImageWidget={addImageWidget}
        saveDashboard={saveDashboard}
        loadDashboard={loadDashboard}
      />

      <DashboardCanvas
        widgets={widgets}
        setWidgets={setWidgets}
        deleteWidget={deleteWidget}
      />
    </div>
  );
}

export default App;
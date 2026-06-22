import { useState } from "react";
import DashboardCanvas from "./components/DashboardCanvas";
import Toolbar from "./components/Toolbar";

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

    setWidgets([
      ...widgets,
      {
        i: id,
        x: 0,
        y: Infinity,
        w: 5,
        h: 5,
        type: "chart",
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

      <Toolbar
        addTextWidget={addTextWidget}
        addChartWidget={addChartWidget}
        addImageWidget={addImageWidget}
      />

      <DashboardCanvas
        widgets={widgets}
        setWidgets={setWidgets}
      />
    </div>
  );
}

export default App;
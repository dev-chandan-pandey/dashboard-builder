import {
  Responsive,
  WidthProvider,
} from "react-grid-layout";

import TextWidget from "../widgets/TextWidget";
import ChartWidget from "../widgets/ChartWidget";
import ImageWidget from "../widgets/ImageWidget";
import { ToastContainer, toast }from "react-toastify";
const ResponsiveGridLayout =
  WidthProvider(Responsive);

export default function DashboardCanvas({
  widgets,
  setWidgets,
  deleteWidget
}) {
  const layout = widgets.map((widget) => ({
    i: widget.i,
    x: widget.x,
    y: widget.y,
    w: widget.w,
    h: widget.h,
  }));

  const handleLayoutChange = (layouts) => {
    const updated = widgets.map((widget) => {
      const found = layouts.find(
        (item) => item.i === widget.i
      );

      return {
        ...widget,
        ...found,
      };
    });

    setWidgets(updated);
  };

  return (
    <ResponsiveGridLayout
      layouts={{ lg: layout }}
      cols={{ lg: 12 }}
      breakpoints={{ lg: 1200 }}
      rowHeight={40}
      onLayoutChange={handleLayoutChange}
      draggableHandle=".widget-header"
      draggableCancel=".ql-editor"
    >
      {widgets.length === 0 && (
        <h2>
          Add widgets to start building
          your dashboard.
        </h2>
      )}
  
      {widgets.map((widget) => (
        <div key={widget.i}>
          <div
            style={{
              background: "#fff",
              borderRadius: "10px",
              overflow: "hidden",
              boxShadow:
                "0 2px 10px rgba(0,0,0,0.1)",
              height: "100%",
            }}
          >
            <div
              className="widget-header"
              style={{
                display: "flex",
                justifyContent: "space-between",
                padding: "10px",
                background: "#eee",
                cursor: "move",
                fontWeight: "bold",
              }}
            >
              <span>Drag Here</span>
              <button onClick={() => deleteWidget(widget.i)}>X</button>
            </div>

            <div style={{ padding: "10px" }}>
              {widget.type === "text" && (
                <TextWidget
                  widget={widget}
                  widgets={widgets}
                  setWidgets={setWidgets}
                />
              )}

              {widget.type === "chart" && (
                <ChartWidget widget={widget} />
              )}

              {widget.type === "image" && (
                <ImageWidget
                  widget={widget}
                  widgets={widgets}
                  setWidgets={setWidgets}
                />
              )}
            </div>
          </div>
        </div>
      ))}
    </ResponsiveGridLayout>
  );
}
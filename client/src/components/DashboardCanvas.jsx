import React from "react";
import { Responsive, WidthProvider } from "react-grid-layout";
import { FiMove, FiTrash2, FiFileText, FiBarChart2, FiImage, FiGrid } from "react-icons/fi";
import TextWidget from "../widgets/TextWidget";
import ChartWidget from "../widgets/ChartWidget";
import ImageWidget from "../widgets/ImageWidget";

const ResponsiveGridLayout = WidthProvider(Responsive);

export default function DashboardCanvas({ widgets, setWidgets, deleteWidget }) {
  const layout = widgets.map((widget) => ({
    i: widget.i,
    x: widget.x,
    y: widget.y,
    w: widget.w,
    h: widget.h,
  }));

  const handleLayoutChange = (layouts) => {
    const updated = widgets.map((widget) => {
      const found = layouts.find((item) => item.i === widget.i);
      return {
        ...widget,
        ...found,
      };
    });
    setWidgets(updated);
  };

  // Render glowing contextual type badges
  const renderWidgetBadge = (type) => {
    switch (type) {
      case "text":
        return (
          <span className="widget-badge badge-text">
            <FiFileText size={12} /> TEXT BLOCK
          </span>
        );
      case "chart":
        return (
          <span className="widget-badge badge-chart">
            <FiBarChart2 size={12} /> ANALYTICS
          </span>
        );
      case "image":
        return (
          <span className="widget-badge badge-image">
            <FiImage size={12} /> MEDIA
          </span>
        );
      default:
        return null;
    }
  };

  return (
    <div className="canvas-wrapper">
      {/* Dynamic Blank State Illustration */}
      {widgets.length === 0 && (
        <div className="empty-canvas-blueprint">
          <div className="empty-icon-glow">
            <FiGrid size={40} />
          </div>
          <h2>Your Workspace is Empty</h2>
          <p>Choose interactive blocks from the left sidebar panel to begin mapping out your data metrics canvas.</p>
        </div>
      )}

      <ResponsiveGridLayout
        layouts={{ lg: layout }}
        cols={{ lg: 12 }}
        breakpoints={{ lg: 1200 }}
        rowHeight={55}
        margin={[20, 20]}
        containerPadding={[0, 0]}
        onLayoutChange={handleLayoutChange}
        draggableHandle=".widget-header"
        // Prevent form inputs, buttons, and text fields from accidental drag actions
        draggableCancel=".ql-editor, input, button, select, textarea"
      >
        {widgets.map((widget) => (
          <div key={widget.i} className="grid-item-animate-wrap">
            <div className="widget-card-container">
              
              {/* Premium Dashboard Header Control Strip */}
              <div className="widget-header">
                <div className="widget-header-meta">
                  <div className="drag-grip-indicator">
                    <FiMove size={14} />
                  </div>
                  {renderWidgetBadge(widget.type)}
                </div>
                
                <button 
                  className="widget-delete-action-btn"
                  onClick={() => deleteWidget(widget.i)}
                  title="Remove Component"
                >
                  <FiTrash2 size={14} />
                </button>
              </div>

              {/* Component Content Canvas Area */}
              <div className="widget-body-content">
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
    </div>
  );
}
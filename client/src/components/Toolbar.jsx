import {
  FaFont,
  FaChartBar,
  FaImage,
  FaSave,
  FaDownload,
} from "react-icons/fa";

export default function Toolbar({
  addTextWidget,
  addChartWidget,
  addImageWidget,
  saveDashboard,
  loadDashboard,
}) {
  return (
    <div
      style={{
        display: "flex",
        gap: "10px",
        marginBottom: "20px",
      }}
    >
      <button onClick={addTextWidget}>
        <FaFont /> Text
      </button>

      <button onClick={addChartWidget}>
        <FaChartBar /> Chart
      </button>

      <button onClick={addImageWidget}>
        <FaImage /> Image
      </button>

      <button onClick={saveDashboard}>
        <FaSave /> Save
      </button>

      <button onClick={loadDashboard}>
        <FaDownload /> Load
      </button>
    </div>
  );
}
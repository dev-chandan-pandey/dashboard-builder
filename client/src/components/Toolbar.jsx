export default function Toolbar({
  addTextWidget,
  addChartWidget,
  addImageWidget,
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
        Add Text
      </button>

      <button onClick={addChartWidget}>
        Add Chart
      </button>

      <button onClick={addImageWidget}>
        Add Image
      </button>
    </div>
  );
}
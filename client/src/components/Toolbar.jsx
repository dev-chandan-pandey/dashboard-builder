import { FiType, FiBarChart2, FiImage, FiSave, FiDownload } from "react-icons/fi";
import "../styles/Toolbar.css"; // Create or add this directly to your CSS styles folder

function Toolbar({ addTextWidget, addChartWidget, addImageWidget, saveDashboard, loadDashboard }) {
  return (
    <div className="toolbar-wrapper">
      <div className="toolbar-section">
        <span className="section-label">Add Elements</span>
        <button className="btn-tool" onClick={addTextWidget}><FiType /> Text Block</button>
        <button className="btn-tool" onClick={addChartWidget}><FiBarChart2 /> Analytics Chart</button>
        <button className="btn-tool" onClick={addImageWidget}><FiImage /> Image Container</button>
      </div>

      <hr className="toolbar-divider" />

      <div className="toolbar-section">
        <span className="section-label">Actions</span>
        <button className="btn-action save" onClick={saveDashboard}><FiSave /> Save Structure</button>
        <button className="btn-action load" onClick={loadDashboard}><FiDownload /> Sync Cloud Data</button>
      </div>
    </div>
  );
}

export default Toolbar;
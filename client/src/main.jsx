import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import "./styles/dashboard.css";
import App from './App.jsx'
// main.jsx
import "react-grid-layout/css/styles.css";
import "react-resizable/css/styles.css";
import process from "process";
import "react-toastify/dist/ReactToastify.css";
window.process = process;
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

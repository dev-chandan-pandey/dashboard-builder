// import axios from "axios";

// export default axios.create({
//   baseURL: "http://localhost:5000/api",
// });

import axios from "axios";

const API = axios.create({
  baseURL: "https://dashboard-builder-6jxk.onrender.com/api/dashboard",
});

export default API;
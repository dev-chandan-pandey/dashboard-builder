// import axios from "axios";

// export default axios.create({
//   baseURL: "http://localhost:5000/api",
// });

import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000/api/dashboard",
});

export default API;
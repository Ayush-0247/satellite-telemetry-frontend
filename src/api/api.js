import axios from "axios";
// https://satellite-telemetry-project-auth.onrender.com
const api = axios.create({
  // baseURL: "https://satellite-telemetry-project-auth.onrender.com/api",
  baseURL: "https://satellite-telemetry-backend-1.onrender.com/api",
  // https://satellite-telemetry-backend-1.onrender.com/
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;

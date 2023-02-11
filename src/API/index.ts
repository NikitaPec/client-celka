import axios from "axios";

export const API_URL = "http://localhost:5000/api";

const $api = axios.create({
  withCredentials: true,
  baseURL: API_URL,
});

$api.interceptors.request.use((config) => {
  config.headers.Authorizationt = `Bearer ${localStorage.getItem("token")}`;
  return config;
});

$api.interceptors.response.use(
  (config) => {
    return config;
  },
  async (error) => {
    const orginalRequest = error.config;
    if (error.response.status === 401 && error.config && !error.config._isRetry) {
      orginalRequest._isRetry = true;
      try {
        const response = await axios.get(`${API_URL}/refresh`, { withCredentials: true });
        localStorage.setItem("token", response.data.data.accessToken);
        return $api.request(orginalRequest);
      } catch (error) {
        console.log(error);
      }
    }
    throw error;
  }
);

export default $api;

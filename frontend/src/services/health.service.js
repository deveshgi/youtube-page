import API from "../api/axios.js";

export const healthCheck = async () => {
  const response = await API.get("/healthcheck");
  
  return response.data;
};

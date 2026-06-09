import { healthCheck } from "../services/health.service";

export const checkBackendStatus = async () => {
  try {
    await healthCheck();
    console.log("Backend Connected");
  } catch (error) {
    console.error("Backend Connection Failed");
  }
};


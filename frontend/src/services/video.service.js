import API from "../api/axios";

export const getAllVideos = params =>
  API.get("/videos", { params });

export const getVideoById = videoId =>
  API.get(`/videos/${videoId}`);

export const publishVideo = data =>
  API.post("/videos", data);

export const updateVideo = (videoId, data) =>
  API.patch(`/videos/${videoId}`, data);

export const deleteVideo = videoId =>
  API.delete(`/videos/${videoId}`);

export const togglePublishStatus = videoId =>
  API.patch(`/videos/toggle/publish/${videoId}`);
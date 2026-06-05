import API from "../api/axios";

export const getChannelStats = channelId =>
  API.get(`/dashboard/stats/${channelId}`);

export const getChannelVideos = channelId =>
  API.get(`/dashboard/videos/${channelId}`);
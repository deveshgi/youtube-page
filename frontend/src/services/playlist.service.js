import API from "../api/axios";

export const createPlaylist = data =>
  API.post("/playlist", data);

export const getUserPlaylists = userId =>
  API.get(`/playlist/user/${userId}`);

export const getPlaylistById = playlistId =>
  API.get(`/playlist/${playlistId}`);

export const addVideoToPlaylist = (playlistId, videoId) =>
  API.patch(`/playlist/add/${videoId}/${playlistId}`);

export const removeVideoFromPlaylist = (playlistId, videoId) =>
  API.patch(`/playlist/remove/${videoId}/${playlistId}`);

export const updatePlaylist = (playlistId, data) =>
  API.patch(`/playlist/${playlistId}`, data);

export const deletePlaylist = playlistId =>
  API.delete(`/playlist/${playlistId}`);
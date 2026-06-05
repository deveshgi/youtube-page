import API from "../api/axios";

export const getVideoComments = videoId =>
  API.get(`/comments/${videoId}`);

export const addComment = (videoId, data) =>
  API.post(`/comments/${videoId}`, data);

export const updateComment = (commentId, data) =>
  API.patch(`/comments/c/${commentId}`, data);

export const deleteComment = commentId =>
  API.delete(`/comments/c/${commentId}`);
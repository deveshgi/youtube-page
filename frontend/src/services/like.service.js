import API from "../api/axios";

export const toggleVideoLike = videoId =>
  API.post(`/likes/toggle/v/${videoId}`);

export const toggleCommentLike = commentId =>
  API.post(`/likes/toggle/c/${commentId}`);

export const toggleTweetLike = tweetId =>
  API.post(`/likes/toggle/t/${tweetId}`);

export const getLikedVideos = () =>
  API.get("/likes/videos");

export const getLikedComments = () =>
  API.get("/likes/comments");

export const getLikedTweets = () =>
  API.get("/likes/tweets");
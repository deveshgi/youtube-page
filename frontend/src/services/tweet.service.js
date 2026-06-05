import API from "../api/axios";

export const createTweet = data =>
  API.post("/tweets", data);

export const getUserTweets = userId =>
  API.get(`/tweets/user/${userId}`);

export const updateTweet = (tweetId, data) =>
  API.patch(`/tweets/${tweetId}`, data);

export const deleteTweet = tweetId =>
  API.delete(`/tweets/${tweetId}`);
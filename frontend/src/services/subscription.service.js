import API from "../api/axios";

export const toggleSubscription = channelId =>
  API.post(`/subscriptions/c/${channelId}`);

export const getChannelSubscribers = channelId =>
  API.get(`/subscriptions/channel/${channelId}`);

export const getUserSubscriptions = userId =>
  API.get(`/subscriptions/user/${userId}`);

export const getMySubscriptionInfo = () =>
  API.get("/subscriptions/me");

export const getMySubscribers = () =>
  API.get("/subscriptions/subscribers");
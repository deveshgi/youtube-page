import API from "../api/axios";

export const getCurrentUser = () =>
  API.get("/users/current-user");

export const changePassword = data =>
  API.post("/users/change-password", data);

export const updateAccountDetails = data =>
  API.patch("/users/update-account", data);

export const updateAvatar = data =>
  API.patch("/users/avatar", data);

export const updateCoverImage = data =>
  API.patch("/users/cover-image", data);

export const getWatchHistory = () =>
  API.get("/users/history");

export const getUserAllDetails = () =>
  API.get("/users/user");

export const getUserChannelProfile = username =>
  API.get(`/users/c/${username}`);
import API from "../api/axios";

export async function registerUser(userData) {
  const response = await API.post(
    "/users/register",
    userData
  );

  return response.data;
}

export async function loginUser(credentials) {
  const response = await API.post(
    "/users/login",
    credentials
  );

  return response.data;
}

export async function logoutUser() {
  const response = await API.post(
    "/users/logout"
  );

  return response.data;
}
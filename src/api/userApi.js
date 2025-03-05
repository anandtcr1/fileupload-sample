import apiClient from "./apiClient";

export const getUsers = async () =>
  apiClient.get("/users").then((res) => res.data);

export const createUser = async (user) =>
  apiClient.post("/users", user).then((res) => res.data);

export const updateUser = async (id, user) =>
  apiClient.put(`/users/${id}`, user).then((res) => res.data);

export const deleteUser = async (id) => apiClient.delete(`/users/${id}`);

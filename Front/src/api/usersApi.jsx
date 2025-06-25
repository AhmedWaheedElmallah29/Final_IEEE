import http from "./http";
const apiUrl = `http://localhost:5000/api`;
const createUser = (data) => http.post(`${apiUrl}/users`, data);
const usersApi = { createUser };
export default usersApi;

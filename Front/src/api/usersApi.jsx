import http from "./http";
const apiUrl = `http://localhost:5000`;
const creatUser = (data) => http.post(`${apiUrl}/users`, data);
const usersApi = { creatUser };
export default usersApi;

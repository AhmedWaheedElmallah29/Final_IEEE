import { useState } from "react";
<<<<<<< HEAD
import usersApi from "./api/usersApi";
import { toast } from "react-toastify";
import authApi from "./api/auth";
=======
import { useNavigate } from "react-router-dom";
>>>>>>> ade1979c57ce6e95dd46a5d3154a6f0835da11dd

export default function LogIn() {
  const [data, setData] = useState({
    username: "",
    password: "",
  });
  const [err, setErr] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
<<<<<<< HEAD
    try {
      const { data: token } = await usersApi.createUser(data);
      authApi.setToken(token);
      window.location = "/";
    } catch (err) {
      if (
        err.response &&
        err.response.status >= 400 &&
        err.response.status < 500
      )
        toast.error(err.response.data);
    }
  };
  const handleChange = ({ target }) =>
    setData({ ...data, [target.name]: target.value });
=======
    setErr(false);
    try {
      const res = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username: userName, password: pass }),
      });
      if (!res.ok) throw new Error("Login failed");
      const data = await res.json();
      localStorage.setItem("token", data.token);
      navigate("/Note");
    } catch {
      setErr(true);
    }
    setUserName("");
    setPass("");
  };

>>>>>>> ade1979c57ce6e95dd46a5d3154a6f0835da11dd
  return (
    <div
      className="min-h-screen flex items-center justify-center bg-[#f0f3da]
 "
    >
      <div className="bg-white/40 p-8 rounded-2xl shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
          Login
        </h2>

        <form className="flex flex-col space-y-4" onSubmit={handleLogin}>
          <input
            name="username"
            onFocus={() => setErr(false)}
            type="text"
            onChange={handleChange}
            placeholder="Username"
            className="p-3 rounded-xl  border-gray-300 border focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <input
            onFocus={() => setErr(false)}
            onChange={handleChange}
            type="password"
            name="password"
            placeholder="Password"
            className="p-3 rounded-xl border-solid border-gray-300 border focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          {err && (
            <div
              role="alert"
              className="bg-red-100 border-l-4 border-red-500 text-red-700 p-2 rounded-lg flex items-center transition duration-300 ease-in-out hover:bg-red-200"
            >
              <svg
                stroke="currentColor"
                viewBox="0 0 24 24"
                fill="none"
                className="h-5 w-5 flex-shrink-0 mr-2 text-White"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13 16h-1v-4h1m0-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  strokeWidth={2}
                  strokeLinejoin="round"
                  strokeLinecap="round"
                />
              </svg>
              <p className="text-xs font-semibold">
                Error - Something went wrong.
              </p>
            </div>
          )}
          <a
            href="/Signup"
            className="text-blue-600 text-lg font-medium hover:underline hover:text-blue-800 transition duration-200"
          >
            Create New Account
          </a>

          <button
            type="submit"
            className=" cursor-pointer bg-indigo-700 text-white py-3 rounded-xl font-semibold hover:bg-indigo-800 transition duration-300"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
// bg-gradient-to-br from-indigo-500 to-purple-600

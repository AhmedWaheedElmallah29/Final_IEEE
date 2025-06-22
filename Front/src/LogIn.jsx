import { useState } from "react";
// import Note from "./Note";
import { useNavigate } from "react-router-dom";

export default function LogIn() {
  const [userName, setUserName] = useState("");
  const [pass, setPass] = useState("");
  const navigate = useNavigate();
  const [err, setErr] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    userName === "ahmed" && pass === "123" ? navigate("/Note") : setErr(true);
    setUserName("");
    setPass("");
  };
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-500 to-purple-600 ">
      <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
          Login
        </h2>

        <form className="flex flex-col space-y-4" onSubmit={handleLogin}>
          <input
            onFocus={() => setErr(false)}
            type="text"
            onChange={(e) => setUserName(e.target.value)}
            value={userName}
            placeholder="Email"
            className="p-3 rounded-xl  border-gray-300 border focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <input
            onFocus={() => setErr(false)}
            value={pass}
            onChange={(e) => setPass(e.target.value)}
            type="password"
            placeholder="Password"
            className="p-3 rounded-xl border-solid border-gray-300 border focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          {err && (
            <div
              role="alert"
              className="bg-red-100 dark:bg-red-900 border-l-4 border-red-500 dark:border-red-700 text-red-900 dark:text-red-100 p-2 rounded-lg flex items-center transition duration-300 ease-in-out hover:bg-red-200 dark:hover:bg-red-800 transform hover:scale-105"
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
            href="/"
            className="text-blue-600 text-lg font-medium hover:underline hover:text-blue-800 transition duration-200"
          >
            Create New Account
          </a>

          <button
            type="submit"
            className=" cursor-pointer bg-indigo-600 text-white py-3 rounded-xl font-semibold hover:bg-indigo-700 transition duration-300"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

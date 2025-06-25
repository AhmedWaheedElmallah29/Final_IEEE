import React from "react";
import { Routes, Route } from "react-router-dom";
import LogIn from "./LogIn";
import Note from "./Note";
import SignUp from "./SignUp";
import { ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastif.css";

export default function App() {
  return (
    <>
      <ToastContainer />
      <Routes>
        <Route path="/" element={<LogIn />} />
        <Route path="/Note" element={<Note />} />
        <Route path="/Signup" element={<SignUp />} />
      </Routes>
    </>
  );
}

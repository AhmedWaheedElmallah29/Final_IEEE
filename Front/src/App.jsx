import { Routes, Route } from "react-router-dom";
import LogIn from "./LogIn";
import Note from "./Note";
import SignUp from "./SignUp";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<LogIn />} />
      <Route path="/Note" element={<Note />} />
      <Route path="/Signup" element={<SignUp />} />
    </Routes>
  );
}

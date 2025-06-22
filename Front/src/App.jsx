import { Routes, Route } from "react-router-dom";
import LogIn from "./LogIn";
import Note from "./Note";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<LogIn />} />
      <Route path="/Note" element={<Note />} />
    </Routes>
  );
}

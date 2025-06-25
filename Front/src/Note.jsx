import { useState, useEffect } from "react";
import LogoutBtn from "./components/LogoutBtn";
import Delete from "./components/Delete";

export default function Note() {
  const [text, setText] = useState("");
  const [arr, setArr] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch notes on mount
  useEffect(() => {
    const fetchNotes = async () => {
      const token = localStorage.getItem("token");
      if (!token) return;
      try {
        const res = await fetch("http://localhost:5000/api/notes", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        if (!res.ok) throw new Error("Failed to fetch notes");
        const data = await res.json();
        setArr(data);
      } catch (err) {
        setArr([]);
      } finally {
        setLoading(false);
      }
    };
    fetchNotes();
  }, []);

  // Add a new note
  async function addToArray() {
    const token = localStorage.getItem("token");
    try {
      const res = await fetch("http://localhost:5000/api/notes", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ title: "Note", content: text }),
      });
      if (!res.ok) throw new Error("Failed to add note");
      const newNote = await res.json();
      setArr([...arr, newNote]);
      setText("");
    } catch (err) {
      alert("Error adding note");
    }
  }

  // Delete a note
  async function deleteNote(id) {
    const token = localStorage.getItem("token");
    try {
      const res = await fetch(`http://localhost:5000/api/notes/${id}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (!res.ok) throw new Error("Failed to delete note");
      setArr(arr.filter((e) => e._id !== id));
    } catch (err) {
      alert("Error deleting note");
    }
  }

  // Auto-save note content
  async function editNote(id, newText) {
    const token = localStorage.getItem("token");
    try {
      const res = await fetch(`http://localhost:5000/api/notes/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ content: newText }),
      });
      if (!res.ok) throw new Error("Failed to update note");
      const updatedNote = await res.json();
      setArr(arr.map((note) => (note._id === id ? updatedNote : note)));
    } catch (err) {
      alert("Error updating note");
    }
  }

  return (
    <div className="bg-gradient-to-l from-yellow-100 to-blue-100 min-h-screen font-[cursive]">
      <div className="flex justify-end p-2">
        <LogoutBtn />
      </div>
      <h1 className="text-[#4a0080] text-center text-[35px] font-extrabold pt-[30px]">
        Notes App
      </h1>
      <p className="text-center text-[#4b0082] text-[18px]">
        Double click on a note to remove it
      </p>
      <div className="flex justify-center mt-6">
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Write a new note..."
          className="w-[300px] h-[80px] p-2 rounded-lg border border-gray-300 resize-none"
        />
        <button
          onClick={addToArray}
          className="ml-2 px-4 py-2 bg-yellow-400 rounded-lg font-bold text-indigo-700 hover:bg-yellow-500"
        >
          Add
        </button>
      </div>
      <div className="grid grid-cols-[repeat(auto-fill,_300px)] gap-[40px] justify-center p-[50px]">
        {loading ? (
          <div>Loading...</div>
        ) : (
          <NewNote arr={arr} onDelete={deleteNote} onEdit={editNote} />
        )}
      </div>
    </div>
  );
}

function NewNote({ arr, onDelete, onEdit }) {
  return (
    <>
      {arr.map((e) => (
        <div
          key={e._id}
          className="relative w-[300px] h-[200px] bg-white/90 p-[17px] rounded-[15px] shadow-md"
        >
          <textarea
            value={e.content}
            onChange={(ev) => onEdit(e._id, ev.target.value)}
            cols={30}
            rows={10}
            placeholder="Empty Note"
            className="w-full h-full bg-transparent border-none resize-none text-[18px] text-[#82001c] outline-none box-border
            placeholder:text-[#808080] placeholder:opacity-500"
          ></textarea>
          <div className="absolute bottom-2 right-2">
            <Delete onClick={() => onDelete(e._id)} />
          </div>
        </div>
      ))}
    </>
  );
}
// bg-[linear-gradient(to_left,_#ffefd5,_#87cefa)]

import { useState } from "react";
import LogoutBtn from "./components/LogoutBtn";
import Delete from "./components/Delete";

export default function Note() {
  const [text, setText] = useState("");
  const [arr, setArr] = useState([]);
  function addToArray() {
    const newNote = {
      id: Date.now(),
      text,
    };
    setArr([...arr, newNote]);
  }

  function deleteNote(id) {
    setArr(arr.filter((e) => e.id !== id));
  }

  function editNote(id, newText) {
    setArr(
      arr.map((note) => (note.id === id ? { ...note, text: newText } : note))
    );
    setText(arr[id]);
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

      <div className="grid grid-cols-[repeat(auto-fill,_300px)] gap-[40px] justify-center p-[50px]">
        <NewNote arr={arr} onDelete={deleteNote} onEdit={editNote} />
        <button
          onClick={addToArray}
          className="h-[200px] border-none rounded-[10%] text-[70px] font-bold text-indigo-700 cursor-pointer bg-yellow-200 transition-all duration-300 ease-in-out hover:bg-yellow-300 hover:text-white hover:scale-110  "
        >
          +
        </button>
      </div>
    </div>
  );
}

function NewNote({ arr, onDelete, onEdit }) {
  return (
    <>
      {arr.map((e) => (
        <div
          key={e.id}
          className="relative w-[300px] h-[200px] bg-white/90 p-[17px] rounded-[15px] shadow-md"
        >
          <textarea
            onChange={(ev) => onEdit(e.id, ev.target.value)}
            cols={30}
            rows={10}
            placeholder="Empty Note"
            className="w-full h-full bg-transparent border-none resize-none text-[18px] text-[#82001c] outline-none box-border
            placeholder:text-[#808080] placeholder:opacity-500"
          ></textarea>
          <div className="absolute bottom-2 right-2">
            <Delete onClick={() => onDelete(e.id)} />
          </div>
        </div>
      ))}
    </>
  );
}
// bg-[linear-gradient(to_left,_#ffefd5,_#87cefa)]

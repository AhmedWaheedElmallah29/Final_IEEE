import express from "express";
import NotesController from "../controllers/notesController.js";
import Note from "../models/note.js";
import auth from "../middleware/auth.js";

const router = express.Router();
const notesController = new NotesController(Note);

router.post("/", auth, notesController.createNote.bind(notesController));
router.get("/", auth, notesController.getNotes.bind(notesController));
router.put("/:id", auth, notesController.updateNote.bind(notesController));
router.delete("/:id", auth, notesController.deleteNote.bind(notesController));

export default router;

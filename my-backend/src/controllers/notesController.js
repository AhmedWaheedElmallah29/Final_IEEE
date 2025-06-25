class NotesController {
  constructor(Note) {
    this.Note = Note;
  }

  async createNote(req, res) {
    try {
      const note = new this.Note({
        ...req.body,
        user: req.user.id, // اربط النوت باليوزر الحالي
      });
      await note.save();
      res.status(201).json(note);
    } catch (error) {
      console.error("Create Note Error:", error);
      res.status(400).json({ message: error.message });
    }
  }

  async getNotes(req, res) {
    try {
      // رجع فقط النوتات الخاصة باليوزر الحالي
      const notes = await this.Note.find({ user: req.user.id });
      res.status(200).json(notes);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  async updateNote(req, res) {
    try {
      const { id } = req.params;
      // اسمح بتعديل النوت فقط لو هي بتاعة اليوزر الحالي
      const note = await this.Note.findOneAndUpdate(
        { _id: id, user: req.user.id },
        req.body,
        { new: true }
      );
      if (!note) {
        return res.status(404).json({ message: "Note not found" });
      }
      res.status(200).json(note);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }

  async deleteNote(req, res) {
    try {
      const { id } = req.params;
      // اسمح بمسح النوت فقط لو هي بتاعة اليوزر الحالي
      const note = await this.Note.findOneAndDelete({
        _id: id,
        user: req.user.id,
      });
      if (!note) {
        return res.status(404).json({ message: "Note not found" });
      }
      res.status(204).send();
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
}

export default NotesController;

async function myHandler(req, res) {
  const authHeader = req.headers.authorization;
  // ...rest of your code...
  if (!text.trim()) return;
}

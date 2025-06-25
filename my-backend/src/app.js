import express from "express";
import mongoose from "mongoose";
import notesRoutes from "./routes/notes.js";
import config from "./config.js";
import authRouter from "./routes/auth.js";
import cors from "cors";

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Database connection
mongoose
  .connect(config.MONGODB_URI)
  .then(() => console.log("Database connected"))
  .catch((err) => console.error("Connection error:", err));

// Routes
app.use("/api/auth", authRouter);
app.use("/api/notes", notesRoutes);

// Start the server
const PORT = config.PORT;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

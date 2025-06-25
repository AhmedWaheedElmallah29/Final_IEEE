import dotenv from "dotenv";
dotenv.config();

const config = {
  PORT: process.env.PORT || 5000,
  MONGODB_URI:
    process.env.MONGODB_URI ||
    process.env.DATABASE_URL ||
    "mongodb://localhost:27017/mydatabase",
};

export default config;

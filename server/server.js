const mongoose = require("mongoose");
const dotenv = require("dotenv");

process.on("uncaughtException", (err) => {
  console.log(err.name, err.message);
  console.log("Shutting down server");
  console.log("Server closed");
  process.exit(1);
});
dotenv.config({ path: "./config.env" });
const app = require("./app");

// connect database
const DB = process.env.DB.replace("<PASSWORD>", process.env.DB_PASSWORD);

const connectDB = async () => {
  try {
    await mongoose.connect(DB);
    console.log("DB connected successfully");
  } catch (error) {
    console.log(error.message);
  }
};

connectDB();

// Server
const port = process.env.PORT || 3001;
const server = app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

process.on("unhandledRejection", (err) => {
  console.log(err.name, err.message);
  console.log("Shutting down server");
  server.close(() => {
    console.log("Server closed");
    process.exit(1);
  });
});

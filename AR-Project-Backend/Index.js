// 6ALX3N2HarXDXKPl
// Use express
const express = require("express");

// Use cors
const cors = require("cors");

// Use body-parser
const BodyParser = require("body-parser");

// Use mongoose
const mongoose = require("mongoose");

// Connection to Mongodb
main().catch((err) => console.log(err));

const PORT = process.env.PORT || 8080;

async function main() {
  await mongoose.connect(
    DBHOST
  );
  console.log("db connected");
}

// Create Schema
const userSchema = new mongoose.Schema({
  email: String,
  password: String,
});

// Create Model
const User = mongoose.model("User", userSchema);

// Create server
const server = express();

// Start server
server.listen(8080, () => {
  console.log("Server ready on port 8080");
});

// Middleware between client and server to change request
server.use(
  cors({
    origin: [""],
    methods: ["POST", "GET"],
    credentials: true,
  })
);
server.use(BodyParser.json());

// Create API
// CRUD - Create
server.post("/test", async (req, res) => {
  // Store Data
  //   one time creation
  let user = new User();

  // user.email represent store data going in DB and it's name need to match from backend
  // req.body.email represent data coming from frontend and it's name need to match from frontend
  user.email = req.body.email;
  user.password = req.body.password;
  const doc = await user.save();

  console.log(doc);
  res.json(doc);
});

// CRUD - Read
server.get("/test", async (req, res) => {
  const docs = await User.find({});

  res.json(docs);
});

server.get("/", (req, res) => res.send("Express on Vercel"));


require('dotenv').config(); // Load environment variables

const express = require("express");
const cors = require("cors");
const connectDB = require("./utils/db");

const app = express();
app.use(express.json());
app.use(cors());

connectDB();

const PORT = process.env.PORT || 5173;

app.listen(PORT, () => console.log(`Server started running on port ${PORT}`));

app.get('/api/', (req, res) => res.send("API working!"));

module.exports = app;
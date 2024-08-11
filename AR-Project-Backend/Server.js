require('dotenv').config(); 

const express = require("express");
const cors = require("cors");
const connectDB = require("./utils/db");
const Users = require("./models/userModel")

const app = express();
app.use(express.json());
app.use(cors());

connectDB();

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => console.log(`Server started running on port ${PORT}`));

// Define a basic GET route to check if the server is running
app.get('/', (req, res) => {
    console.log("API was hit!");
    res.send("Hello, the API is working!");
});

app.post('/users', async (req, res) => {
    try {
        let user = new Users(req.body);
        let result = await user.save();
        res.send(result);
    } catch (error) {
        res.status(500).send(error.message);
    }
});

module.exports = app;

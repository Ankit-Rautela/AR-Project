require('dotenv').config();

const express = require("express");
const cors = require("cors");
const connectDB = require("./utils/db");
const User = require("./models/userModel");

const app = express();
app.use(express.json());
app.use(cors());

// Connect to the database
connectDB();

// Define the port from environment variables or default to 4000
const PORT = process.env.PORT || 4000;

// Start the server
app.listen(PORT, () => console.log(`Server started running on port ${PORT}`));

// Define a basic GET route to check if the server is running
app.get('/', (req, res) => {
    console.log("API was hit!");
    res.send("Hello, the API is working!");
});

// Route to display users in HTML format
app.get('/users', async (req, res) => {
    try {
        console.log("Fetching users...");
        const users = await User.find().select('-password'); // Exclude passwords from the response
        console.log("Users fetched:", users);

        let html = `<h1>Users List</h1><ul>`;
        users.forEach(user => {
            html += `<li>Email: ${user.email}</li>`;
        });
        html += `</ul>`;

        res.send(html);
    } catch (error) {
        console.error("Error fetching users:", error.stack || error.message);
        res.status(500).send("An error occurred while fetching users.");
    }
});

// Route to create a new user
app.post('/users', async (req, res) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            return res.status(400).send("Email and password are required.");
        }

        // Check for existing user
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).send("User already exists.");
        }

        const user = new User(req.body);
        const result = await user.save();

        res.status(201).send(result);
    } catch (error) {
        console.error("Error creating user:", error.stack || error.message);
        res.status(500).send("An error occurred while creating the user.");
    }
});

module.exports = app;
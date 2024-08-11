require('dotenv').config(); 

const express = require("express");
const cors = require("cors");
const connectDB = require("./utils/db");
const User = require("./models/userModel")

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

// Route to display users in HTML format
app.get('/users', async (req, res) => {
    try {
        // Fetch all users from the database
        const users = await User.find();
        
        // Generate an HTML response
        let html = `<h1>Users List</h1><ul>`;
        users.forEach(user => {
            html += `<li>Email: ${user.email}, Password: ${user.password}</li>`;
        });
        html += `</ul>`;

        // Send the HTML response
        res.send(html);
    } catch (error) {
        console.error("Error fetching users:", error);
        res.status(500).send("An error occurred while fetching users.");
    }
});

module.exports = app;

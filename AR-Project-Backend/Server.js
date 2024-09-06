require('dotenv').config();

const express = require("express");
const cors = require("cors");
const bcrypt = require("bcrypt");

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

// Base API route
app.get('/', (req, res) => {
    res.send("Hello, the API is working!");
});

// Get all users (excluding passwords)
app.get('/users', async (req, res) => {
    try {
        const users = await User.find().select('-password');
        res.json(users);
    } catch (error) {
        console.error("Error fetching users:", error);
        res.status(500).json({ message: "An error occurred while fetching users." });
    }
});

// Create a new user
app.post('/users', async (req, res) => {
    let { email, password } = req.body;

    email = email.trim().toLowerCase();
    password = password.trim();

    console.log("Received email:", email);

    if (email === "" || password === "") {
        console.log("Empty input fields.");
        return res.status(400).json({
            status: "FAILED",
            message: "Empty input fields!"
        });
    } else if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) {
        return res.status(400).json({
            status: "FAILED",
            message: "Invalid email entered"
        });
    } else if (password.length < 8) {
        return res.status(400).json({
            status: "FAILED",
            message: "Password is too short!"
        });
    }

    try {
        console.log("Checking if email already exists:", email);

        const existingUser = await User.findOne({ email });

        if (existingUser) {
            console.log("User already exists:", existingUser.email);
            return res.status(409).json({
                status: "FAILED",
                message: "User with the provided email already exists"
            });
        }

        // If no existing user, proceed to create a new one
        const saltRounds = 10;
        const hashedPassword = await bcrypt.hash(password, saltRounds);

        const newUser = new User({
            email,
            password: hashedPassword
        });

        const result = await newUser.save();
        console.log("User created successfully:", result);
        return res.status(201).json({
            status: "SUCCESS",
            message: "Signup successful",
            data: result,
        });

    } catch (err) {
        console.error("Error during user creation:", err);
        return res.status(500).json({
            status: "FAILED",
            message: "An error occurred while saving user account!"
        });
    }
});



app.post('/login', async (req, res) => {
    let { email, password } = req.body;

    email = email.trim();
    password = password.trim();

    if (email == "" || password == "") {
        res.json({
            status: "FAILED",
            message: "Empty credentials Supplied!"
        });
    } else {
        // check if user exist
        User.find({email})
        .then(data => {
            if(data.length) {
                // User exists

                const hasedPassword = data[0].password;

                bcrypt.compare(password,hasedPassword).then(result => {
                    if(result){
                        // Password match
                        res.json({
                            status: "SUCCESS",
                            message: "Login successful",
                            data: data
                        });
                    }else {
                        res.json({
                            status: "FAILED",
                            message: "Invalid password entered!"
                        });
                    }
                })
                .catch(err => {
                    console.log(err);
                    res.json({
                    status: "FAILED",
                    message: "An error occuered while comparing passwords"
                });

            })
        } else {
            res.json({
                status: "FAILED",
                message: "Invalid credentials entered!"
            })
        }
    })
    .catch(err => {
        console.log(err);
        res.json({
        status: "FAILED",
        message: "An error occuered while checking for user"
    })
    })
}
})

module.exports = app;
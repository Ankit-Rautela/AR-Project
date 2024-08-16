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

    email = email.trim();
    password = password.trim();

    if (email == "" || password == "") {
        res.json({
            status: "FAILED",
            message: "Empty input fields!"
        });
    } else if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) {
        res.json({
            status: "FAILED",
            message: "Invalid email entered"
        })
    } else if (password.length < 8) {
        res.json({
            status: "FAILED",
            message: "Password is too short!"
        })
    } else {
        // check if user already exists
        User.find({ email }).then(result => {
            if (result.length) {
                // A user alreay exists
                res.json({
                    status: "FAILED",
                    message: "User with the provided email already exists"
                })
            } else {
                // try to create new user

                // Password handling
                const saltRounds = 10;
                bcrypt.hash(password, saltRounds).then(hasedPassword => {
                    const newUser = new User({
                        email,
                        password: hasedPassword
                    });

                    newUser.save().then(result => {
                        res.json({
                            status: "SUCCESS",
                            message: "Signup successful",
                            data: result,
                        })
                    })
                        .catch(err => {
                            console.log(err);
                            res.json({
                                status: "FAILED",
                                message: "An error occured while saving user account!"
                            })
                        })

                })
                .catch(err => {
                    console.log(err);
                    res.json({
                        status: "FAILED",
                        message: "An error occured while hashing password! "
                    })
                })
            }
        })
        .catch(err => {
            console.log(err);
            res.json({
                status: "FAILED",
                message: "An error occured while checking for existing user!"
            })
        })      
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
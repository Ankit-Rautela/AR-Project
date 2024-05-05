const express = require("express");
const cors = require("cors");
const connectDB = require("./utils/db");
const Users = require("./models/userModel");

const app = express();

app.use(cors());
app.use(express.json());

connectDB();

app.get('/api/', (req, res) => res.send("API working!"));

app.post('/api/users', async (req,res) => {
    // console.log(req.body);
    try {
        const user = await Users.create(req.body)

        res.status(200).json({
            success: true,
            user
        })
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
})

const port = process.env.PORT || 4000;

app.listen(port, () => console.log(`Server started running on port ${port}`));



module.exports = app;
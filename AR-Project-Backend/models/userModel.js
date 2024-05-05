const mongoose = require("mongoose")

const usersSchema = mongoose.Schema({
    email : {
        type: String,
        required: true,
        unique:true
    },
    password : {
        type: String,
        required: true,
    }
}, {timestamps: true})

const Users = mongoose.model("users", usersSchema)

module.exports = Users;
const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose
      .connect(
        "mongodb+srv://ankitrautela:Bvk4mIZ4kYhwzZCM@cluster0.wqkck4x.mongodb.net/"
      )
      .then(console.log("MongoDB Conected"));
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = connectDB;

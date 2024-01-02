const mongoose = require("mongoose");
require("dotenv").config();

function connectDB() {
    try {
      mongoose.connect(process.env.MONGODB_URI);
      console.log("Successfully connected to the database !!");
    } catch (err) {
      console.error(err.message);
    }
}

module.exports = connectDB;
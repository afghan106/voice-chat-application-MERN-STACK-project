const mongoose = require("mongoose");

function DbConnect() {
    const DB_URL = process.env.DB_URL;

    // Create database connection
    mongoose.connect(DB_URL, { 
        useNewUrlParser: true, 
        useUnifiedTopology: true
    })
    .then(() => {
        console.log("DB connected successfully to the MongoDB server........");
    })
    .catch(err => {
        console.error("Connection error:", err);
    });
}

module.exports = DbConnect; // Export the function for use in other modules
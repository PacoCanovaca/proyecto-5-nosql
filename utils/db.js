const mongoose = require("mongoose");
const urlDB = "mongodb://localhost:27017/movies";

const connect = async() => {
    try {
        await mongoose.connect(urlDB);
        console.log("Connected with MongoDB")
    } catch (error) {
        console.log(`Error during the process: ${error}`);
    }
}

module.exports = connect;
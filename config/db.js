const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URL);
        console.log("mongodb connected successfully");
    } catch (error) {
        console.error("DB connection Error Message: ", error);
        process.exit(1);
    }
}

module.exports = connectDB;
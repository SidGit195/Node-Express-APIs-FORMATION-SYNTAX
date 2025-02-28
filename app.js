require('dotenv').config();
const express = require('express');
const connectDB = require('./config/db');
const ProductRoute = require('./routes/Product');

const app = express();

connectDB();

// middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
    res.status(200).json({message: "Hello World"});
})

app.use('/api', ProductRoute);


// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({error: err.message || "Internal Server Error"});
});

const PORT = process.env.PORT;
app.listen(PORT, () => console.log(`Server is running on ${PORT}`));
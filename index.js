const express = require("express");
const dbConnection = require("./utils/db");
const router = require("./routes/movie.routes");

dbConnection();

const PORT = 3000;
const server = express();

server.use(express.json());

server.use("/", router);

server.use((req, res, next) => {
    const error = new Error("Route not found");
    error.status = 404;
    next(error);
});

server.use((error, req, res, next) => {
    return res.status(error.status||500).json(error.message||"Unexpected error");
});

server.listen(PORT, () => {
    console.log(`Server running in http://localhost:${PORT}`);
})


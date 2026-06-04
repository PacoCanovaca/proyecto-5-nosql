const express = require("express");
const dbConnection = require("./utils/db");
const router = require("./routes/movie.routes");

dbConnection();

const PORT = 3000;
const server = express();

server.use("/", router);

server.listen(PORT, () => {
    console.log(`Server running in http://localhost:${PORT}`);
})


const express = require("express");
const cors = require("cors");
require("dotenv").config();

const todoRoutes = require("../server/routes/todo.routes");

const app = express();

app.use(express.json());
app.use(cors());

// Route
app.use("/api/todo", todoRoutes);

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {

    console.log(`Server started on port ${PORT}`);
    // console.log("Started on $1", [PORT]);
});